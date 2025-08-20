import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledPost";

const BusinessViewReview = () => {
  const navigate = useNavigate();
  const [tabBar, setTabBar] = useState("tabBar5");
  const [rating, SetRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("재능 나누기");
  const [isApplied, setIsApplied] = useState(false);

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
    navigate("/BusinessAiPosts");
  };

  //모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
    setButtonText("대기 중");
    setIsApplied(true);
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
          <P.StarReview>
            {Array.from({ length: 5 }, (_, idx) => (
              <P.StarImage
                key={idx}
                src={`${process.env.PUBLIC_URL}/images/Star-off.svg`}
                alt="star"
              ></P.StarImage>
            ))}
          </P.StarReview>
          <P.ReviewContent2>에그타르트 먹고싶다..</P.ReviewContent2>
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

export default BusinessViewReview;
