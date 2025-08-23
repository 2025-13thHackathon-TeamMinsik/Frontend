import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledPost";

const StudentPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tabBar, setTabBar] = useState("tabBar1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("재능 나누기");
  const [isApplied, setIsApplied] = useState(false);
  const [job, setJob] = useState(null);
  const [myApplication, setMyApplication] = useState(null);
  const [motivation, setMotivation] = useState(""); // 나눔 동기 상태 추가

  // 공고 상세 정보와 지원 여부를 각각 조회
  const fetchJobDetails = async () => {
    try {
      // 1. 공고 상세 정보 조회 API 호출
      const jobResponse = await axios.get(`/jobs/posts/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setJob(jobResponse.data);
      console.log("공고 상세 정보 데이터:", jobResponse.data);

      // 2. 학생의 지원 정보 조회 API 호출
      try {
        const applicationResponse = await axios.get(
          `/jobs/posts/${id}/my_application`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setMyApplication(applicationResponse.data.my_application);
        setIsApplied(true);
        setButtonText("대기 중");
      } catch (appError) {
        console.log("아직 지원하지 않은 공고입니다.");
        setMyApplication(null);
        setIsApplied(false);
        setButtonText("재능 나누기");
      }
    } catch (error) {
      console.error("데이터 조회 실패:", error);
    }
  };

  //재능 나누기 기능
  const handleApply = async () => {
    if (isApplied) {
      return;
    }

    if (!motivation.trim()) {
      alert("나눔 동기를 작성해주세요.");
      return;
    }

    try {
      await axios.post(
        `/jobs/applications/${id}/`,
        { motivation: motivation },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      setIsModalOpen(true);
    } catch (error) {
      console.error("재능 나누기 실패:", error);
      alert("지원에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setButtonText("대기 중");
    setIsApplied(true);
  };

  useEffect(() => {
    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  //뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  //AI 공고
  const goAiPosts = () => {
    navigate("/StudentAiPosts");
  };

  return (
    <P.Container>
      <div id="header">
        <P.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
            onClick={goBack}
          />
        </P.BackBtn>
      </div>
      <P.Box1>
        {job?.payment_type === "VOLUNTEER_TIME" && (
          <P.FilterIcon>봉사</P.FilterIcon>
        )}
        <P.TextBox1>
          <P.Pic>
            <img
              src={job?.image}
              alt="pic"
              width="124px"
              height="165.333px"
              id="pic"
            />
          </P.Pic>
          <div id="info-section">
            <P.StoreName>{job?.company_name}</P.StoreName>
            <P.LocationText>
              {job?.distance_m
                ? `현재 위치에서 ${job.distance_m}m`
                : "거리 정보 없음"}
            </P.LocationText>
            <P.InfoText>
              <span id="infoText1">대표자명 | </span>
              <span id="infoText2">{job?.ceo_name}</span>
              <br />
              <span id="infoText1">업종 | </span>
              <span id="infoText2">{job?.business_type}</span>
              <br />
              <span id="infoText1">위치 | </span>
              <span id="infoText2">{job?.address}</span>
              <br />
              <span id="infoText1">연락처 | </span>
              <span id="infoText2">{job?.phone_number}</span>
            </P.InfoText>
          </div>
        </P.TextBox1>
        <P.Line></P.Line>
        <P.TextBox2>
          <P.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              id="titleIcon"
            />
            나눔 내용
          </P.Title>
          <P.SubText>
            <img
              src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
              alt="subTextIcon"
              width="16px"
              height="15.714px"
              id="subTextIcon"
            />
            <span id="subText1">기간/시간 | </span>
            <span id="subText2">{job?.duration_time}</span>
            <br />
            <img
              src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
              alt="subTextIcon"
              width="16px"
              height="15.714px"
              id="subTextIcon"
            />
            <span id="subText1">급여 방식 | </span>
            <span id="subText2">{job?.payment_info}</span>
          </P.SubText>
          <P.PostContent1>{job?.description}</P.PostContent1>
        </P.TextBox2>
      </P.Box1>
      <P.Box2>
        <P.TextBox2>
          <P.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              id="titleIcon"
            />
            나눔 동기 작성하기
          </P.Title>
          {isApplied ? (
            <P.PostContent2>{myApplication?.motivation}</P.PostContent2>
          ) : (
            <P.PostContent2
              as="textarea"
              placeholder="나눔 동기를 작성해주세요."
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
            />
          )}
          <P.Btn1>포트폴리오 수정하기</P.Btn1>
          <P.Btn2 onClick={handleApply}>{buttonText}</P.Btn2>
        </P.TextBox2>
      </P.Box2>
      <P.TabBar>
        <div id="tabBarIcon">
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar1" ? "tabBar1_on.svg" : "tabBar1_off.svg"
            }`}
            alt="tabBar1"
            width="41px"
            height="60px"
            onClick={() => {
              handleTabBar("tabBar1");
              goAiPosts();
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar2" ? "tabBar2_on.svg" : "tabBar2_off.svg"
            }`}
            alt="tabBar2"
            width="66px"
            height="59px"
            onClick={() => handleTabBar("tabBar2")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar3" ? "tabBar3_on.svg" : "tabBar3_off.svg"
            }`}
            alt="tabBar3"
            width="32px"
            height="58px"
            onClick={() => handleTabBar("tabBar3")}
          />
        </div>
      </P.TabBar>
      {isModalOpen && (
        <P.ModalOverlay>
          <P.ApplyModal>
            <img
              src={`${process.env.PUBLIC_URL}/images/modalIcon.svg`}
              alt="modalIcon"
              width="29px"
              height="auto"
              id="modalIcon"
            />
            <div id="modalTextBox">
              <P.ModalTitle>재능 나눔 지원이 완료되었습니다.</P.ModalTitle>
              <P.ModalLine></P.ModalLine>
              <P.ModalBtn onClick={handleModalClose}>확인</P.ModalBtn>
            </div>
          </P.ApplyModal>
        </P.ModalOverlay>
      )}
    </P.Container>
  );
};

export default StudentPost;
