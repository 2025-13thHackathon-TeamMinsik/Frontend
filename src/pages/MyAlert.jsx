import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as M from "../styles/StyledMyAlert";

const MyAlert = () => {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // 알림 데이터 가져오기
  const fetchAlerts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/notifications/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setAlerts(response.data);
    } catch (error) {
      console.error("알림 조회 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  // 알림 읽기 처리
  const markAsRead = async (notificationId) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/notifications/${notificationId}/read/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // 읽음 처리 후 alerts 상태 업데이트
      setAlerts((prevAlerts) =>
        prevAlerts.map((alert) =>
          alert.notification_id === notificationId
            ? { ...alert, is_read: true }
            : alert
        )
      );
    } catch (error) {
      console.error("알림 읽기 실패:", error);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <M.Container>
      {/* 헤더 */}
      <div id="header">
        <M.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
            onClick={goBack}
          />
        </M.BackBtn>
        <M.Title>알림</M.Title>
      </div>

      <M.Line />

      {/* 로딩 상태 */}
      {loading && <M.AlertText>알림을 불러오는 중...</M.AlertText>}

      {/* 알림 데이터 없음 */}
      {!loading && alerts.length === 0 && (
        <M.AlertText>알림이 없습니다.</M.AlertText>
      )}

      {/* 알림 리스트 */}
      {!loading &&
        alerts.map((alert) => (
          <M.Box1
            key={alert.notification_id}
            onClick={() => markAsRead(alert.notification_id)}
            style={{
              backgroundColor: alert.is_read ? "#f5f5f5" : "#ffffff",
              cursor: "pointer",
            }}
          >
            <M.TextBox>
              <M.AlertTime>{alert.time_ago}</M.AlertTime>
              <M.AlertText>{alert.message}</M.AlertText>
            </M.TextBox>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              width="15.272px"
              height="15px"
              id="alertIcon"
            />
          </M.Box1>
        ))}
    </M.Container>
  );
};

export default MyAlert;
