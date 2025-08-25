import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledPost";

const StudentReview = () => {
  const navigate = useNavigate();
  const { jobId } = useParams(); // URL에서 job_id 가져오기
  const [tabBar, setTabBar] = useState("tabBar1");
  const [rating, setRating] = useState(0); // SetRating을 setRating으로 변경
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("재능 나누기");
  const [isApplied, setIsApplied] = useState(false);
  const [content, setContent] = useState(""); // 리뷰 내용 상태 추가

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
    navigate("/StudentAiPosts");
  };

  // 모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
    setButtonText("대기 중");
    setIsApplied(true);
  };

  // ⭐ API 연동 함수 추가
  const handleSubmitReview = async () => {
    if (!jobId) {
      alert("리뷰를 작성할 공고 정보가 없습니다.");
      return;
    }

    if (!rating || content.trim() === "") {
      alert("별점과 리뷰 내용을 모두 작성해주세요.");
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인이 필요합니다.");
        navigate("/login"); // 로그인 페이지로 리디렉션
        return;
      }

      const reviewData = {
        job_post: jobId, // URL에서 가져온 job_id 사용
        rating: rating,
        content: content,
      };

      const response = await axios.post(`/reviews/employee/`, reviewData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log("리뷰 작성 성공:", response.data);
      alert("후기가 성공적으로 작성되었습니다.");
      setIsModalOpen(true); // 성공 시 모달 열기
    } catch (error) {
      console.error("리뷰 작성 실패:", error);
      alert("리뷰 작성에 실패했습니다. 다시 시도해주세요.");
    }
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
        <P.FilterIcon>봉사</P.FilterIcon>
        <P.TextBox1>
          <P.Pic>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="pic"
              width="124px"
              height="165.333px"
              id="pic"
            />
          </P.Pic>
          <div id="info-section">
            <P.StoreName>짱베이커리</P.StoreName>
            <P.LocationText>현재 위치에서 93m</P.LocationText>
            <P.InfoText>
              <span id="infoText1">대표자명 | </span>
              <span id="infoText2">김제빵</span>
              <br />
              <span id="infoText1">업종 | </span>
              <span id="infoText2">음식점·카페</span>
              <br />
              <span id="infoText1">위치 | </span>
              <span id="infoText2">화랑로 13길 28</span>
              <br />
              <span id="infoText1">연락처 | </span>
              <span id="infoText2">010-1234-5678</span>
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
            <span id="subText2">월화수 4시간/ 기간 1달 협의</span>
            <br />
            <img
              src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
              alt="subTextIcon"
              width="16px"
              height="15.714px"
              id="subTextIcon"
            />
            <span id="subText1">급여 방식 | </span>
            <span id="subText2">시급 11,000원</span>
          </P.SubText>
          <P.PostContent1>
            저희 카페의 감성 있는 디저트와 공간을 널리
            <br /> 알릴 홍보 및 디자인 도우미를 찾습니다.
            <br /> SNS 콘텐츠 제작, 포스터·배너 디자인, 이벤
            <br />트 홍보에 관심 있는 분 환영! 포토샵, 일러스
            <br />트 등 기본 디자인 툴 사용 가능자 우대.성실
            <br />
            하고 밝은 성향의 분이면 누구나 지원 가능. <br />
            함께 카페의 매력을 세상에 보여주세요!
          </P.PostContent1>
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
      <P.StudentReviewBox>
        <P.TextBox2>
          <P.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              id="titleIcon"
            />
            후기 작성하기
          </P.Title>
          <P.StarReview>
            {Array.from({ length: 5 }, (_, idx) => (
              <P.StarImage
                key={idx}
                src={`${process.env.PUBLIC_URL}/images/Star-${
                  idx < rating ? "on" : "off"
                }.svg`}
                alt="star"
                onClick={() => setRating(idx + 1)} // ⭐ 별점 클릭 로직 수정
              ></P.StarImage>
            ))}
          </P.StarReview>
          <P.ReviewContent
            placeholder="어떤 작업을 했는지 상세히 적어주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)} // ⭐ 입력 값 상태에 저장
          ></P.ReviewContent>
          <P.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
              alt="titleIcon"
              id="titleIcon"
            />
            급여 방식 선택하기
            <P.SubTitle>(필수 택 1)</P.SubTitle>
          </P.Title>
          <P.PayOptionBox>
            <P.PayOption1>지역화폐</P.PayOption1>
            <P.PayOption2>봉사시간</P.PayOption2>
          </P.PayOptionBox>
          <P.ReviewSubmit
            $active={isApplied}
            onClick={handleSubmitReview} // ⭐ API 연동 함수 연결
          >
            후기 보내기
          </P.ReviewSubmit>
        </P.TextBox2>
      </P.StudentReviewBox>
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
              <P.ModalBtn onClick={handleModalClose} $active={isModalOpen}>
                확인
              </P.ModalBtn>
            </div>
          </P.ApplyModal>
        </P.ModalOverlay>
      )}
    </P.Container>
  );
};

export default StudentReview;
