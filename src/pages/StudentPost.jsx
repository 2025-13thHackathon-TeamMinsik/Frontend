import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPost";

const StudentPost = () => {
  const navigate = useNavigate();
  const [tabBar, setTabBar] = useState("tabBar1");
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
    navigate("/StudentAiPosts");
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
          <P.PostContent2></P.PostContent2>
          <P.Btn1>포트폴리오 수정하기</P.Btn1>
          <P.Btn2 onClick={() => setIsModalOpen(true)}>{buttonText}</P.Btn2>
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
