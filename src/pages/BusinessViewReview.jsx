import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledPost";

// Axios 인터셉터 설정
// 모든 API 호출에 공통으로 적용될 로직을 정의합니다.
axios.interceptors.request.use(
  (config) => {
    // 모든 요청에 타임아웃 5초를 설정합니다.
    config.timeout = 5000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const BusinessViewReview = () => {
  const navigate = useNavigate();
  const { jobPostId } = useParams(); // URL에서 jobPostId를 가져옵니다.
  const [tabBar, setTabBar] = useState("tabBar5");
  const [reviewData, setReviewData] = useState(null); // 후기 데이터를 저장할 상태
  const [jobData, setJobData] = useState(null); // 공고 상세 데이터를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 오류 메시지를 저장할 상태

  // 탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // AI 공고
  const goAiPosts = () => {
    navigate("/BusinessAiPosts");
  };

  // 후기 및 공고 데이터를 동시에 가져오는 함수
  const fetchData = async () => {
    try {
      setError(null); // 새로운 요청 전에 오류 상태 초기화
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        // 알림창 대신 사용자에게 보여줄 메시지를 설정합니다.
        setError("로그인이 필요합니다.");
        setIsLoading(false);
        //navigate("/login");
        return;
      }

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Promise.all을 사용하여 두 API를 동시에 호출합니다.
      const [reviewResponse, jobResponse] = await Promise.all([
        axios.get(`/reviews/employee/${jobPostId}/`, axiosConfig),
        axios.get(`/jobs/posts/${jobPostId}/`, axiosConfig),
      ]);

      // 후기 데이터가 존재할 경우에만 상태에 저장
      if (reviewResponse.data && reviewResponse.data.length > 0) {
        setReviewData(reviewResponse.data[0]);
      } else {
        setReviewData(null);
      }

      // 공고 상세 데이터가 존재할 경우에만 상태에 저장
      if (jobResponse.data) {
        setJobData(jobResponse.data);
      } else {
        setJobData(null);
      }
    } catch (err) {
      console.error("데이터를 가져오는 데 실패했습니다:", err);
      // Axios 오류 코드에 따라 상세 메시지 설정
      if (axios.isCancel(err)) {
        setError("요청이 취소되었습니다. 네트워크 상태를 확인해 주세요.");
      } else if (err.code === "ECONNABORTED") {
        setError("요청 시간이 초과되었습니다. 네트워크 연결이 불안정합니다.");
      } else if (err.response) {
        // 서버 응답 오류 (4xx, 5xx)
        setError(`정보를 불러오는 데 실패했습니다: ${err.response.status}`);
      } else {
        // 기타 오류 (네트워크 단절 등)
        setError("정보를 불러오는 데 실패했습니다. 다시 시도해 주세요.");
      }
      setReviewData(null);
      setJobData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 API를 호출합니다.
  useEffect(() => {
    console.log("useEffect 실행됨. jobPostId:", jobPostId);
    if (jobPostId) {
      setIsLoading(true);
      fetchData();
    } else {
      console.log("jobPostId가 유효하지 않습니다.");
      setIsLoading(false);
      setError("잘못된 공고 정보입니다.");
    }
  }, [jobPostId]);

  // 로딩 중일 때 표시할 UI
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // 오류가 발생했을 때 표시할 UI
  if (error) {
    return <div>오류: {error}</div>;
  }

  // 데이터가 없을 때 표시할 UI
  if (!reviewData && !jobData) {
    return <div>해당 공고 및 후기 정보가 없습니다.</div>;
  }

  const rating = reviewData?.rating || 0;
  const content = reviewData?.content || "";

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
        {/* 공고 내용 API 연동 */}
        {jobData?.payment_type === "VOLUNTEER_TIME" && (
          <P.FilterIcon>봉사</P.FilterIcon>
        )}
        <P.TextBox1>
          <P.Pic>
            <img
              src={jobData?.image}
              alt="pic"
              width="124px"
              height="165.333px"
              id="pic"
            />
          </P.Pic>
          <div id="info-section">
            <P.StoreName>{jobData?.company_name}</P.StoreName>
            <P.LocationText>
              {jobData?.distance_m
                ? `현재 위치에서 ${jobData.distance_m}m`
                : "거리 정보 없음"}
            </P.LocationText>
            <P.InfoText>
              <span id="infoText1">대표자명 | </span>
              <span id="infoText2">{jobData?.ceo_name}</span>
              <br />
              <span id="infoText1">업종 | </span>
              <span id="infoText2">{jobData?.business_type}</span>
              <br />
              <span id="infoText1">위치 | </span>
              <span id="infoText2">{jobData?.address}</span>
              <br />
              <span id="infoText1">연락처 | </span>
              <span id="infoText2">{jobData?.phone_number}</span>
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
            <span id="subText2">{jobData?.duration_time}</span>
            <br />
            <img
              src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
              alt="subTextIcon"
              width="16px"
              height="15.714px"
              id="subTextIcon"
            />
            <span id="subText1">급여 방식 | </span>
            <span id="subText2">{jobData?.payment_info}</span>
          </P.SubText>
          <P.PostContent1>{jobData?.description}</P.PostContent1>
        </P.TextBox2>
        <P.Overlay>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkStamp.svg`}
            alt="checkStamp"
            width="150.692px"
            height="auto"
          />
        </P.Overlay>
      </P.Box1>
      <P.ViewReviewBox>
        <P.TextBox2>
          <P.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              id="titleIcon"
            />
            받은 후기
          </P.Title>
          {reviewData ? (
            <>
              <P.StarReview>
                {/* API에서 가져온 rating에 따라 별점을 표시합니다. */}
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.StarImage
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating ? "on" : "off"
                    }.svg`}
                    alt="star"
                  ></P.StarImage>
                ))}
              </P.StarReview>
              {/* API에서 가져온 후기 내용을 표시합니다. */}
              <P.ReviewContent2>{content}</P.ReviewContent2>
            </>
          ) : (
            <div>아직 받은 후기가 없습니다.</div>
          )}
        </P.TextBox2>
      </P.ViewReviewBox>
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
              tabBar === "tabBar4" ? "tabBar4_on.svg" : "tabBar4_off.svg"
            }`}
            alt="tabBar4"
            width="52px"
            height="57px"
            onClick={() => handleTabBar("tabBar4")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar5" ? "tabBar5_on.svg" : "tabBar5_off.svg"
            }`}
            alt="tabBar5"
            width="45px"
            height="56px"
            onClick={() => handleTabBar("tabBar5")}
          />
        </div>
      </P.TabBar>
    </P.Container>
  );
};

export default BusinessViewReview;
