import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPost";

const BusinessReview = () => {
  const navigate = useNavigate();
  const [tabBar, setTabBar] = useState("tabBar4");
  const [rating, SetRating] = useState({
    op1: 0, //참여도
    op2: 0, //성실함
    op3: 0, //시간 준수
    op4: 0, //밝은 태도
    op5: 0, //예의 바름
  });
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

  //별점 클릭
  const handleStarClick = (category, idx) => {
    SetRating((prev) => ({
      ...prev,
      [category]: prev[category] === idx + 1 ? 0 : idx + 1,
    }));
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
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="79.746px"
                  height="auto"
                />
              </P.MyProfileImage>
            </P.ProfileImage>
            <P.ProfileTitle>솜사탕12</P.ProfileTitle>
            <P.ProfileLine></P.ProfileLine>
          </P.ProfileInfo>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>참여도</P.RatingText>
              <P.StarBox>
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.Star
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating.op1 ? "on" : "off"
                    }.svg`}
                    alt="star"
                    onClick={() => handleStarClick("op1", idx)}
                  ></P.Star>
                ))}
              </P.StarBox>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.StarBox>
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.Star
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating.op2 ? "on" : "off"
                    }.svg`}
                    alt="star"
                    onClick={() => handleStarClick("op2", idx)}
                  ></P.Star>
                ))}
              </P.StarBox>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.StarBox>
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.Star
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating.op3 ? "on" : "off"
                    }.svg`}
                    alt="star"
                    onClick={() => handleStarClick("op3", idx)}
                  ></P.Star>
                ))}
              </P.StarBox>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.StarBox>
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.Star
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating.op4 ? "on" : "off"
                    }.svg`}
                    alt="star"
                    onClick={() => handleStarClick("op4", idx)}
                  ></P.Star>
                ))}
              </P.StarBox>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.StarBox>
                {Array.from({ length: 5 }, (_, idx) => (
                  <P.Star
                    key={idx}
                    src={`${process.env.PUBLIC_URL}/images/Star-${
                      idx < rating.op5 ? "on" : "off"
                    }.svg`}
                    alt="star"
                    onClick={() => handleStarClick("op5", idx)}
                  ></P.Star>
                ))}
              </P.StarBox>
            </P.RatingBox>
          </div>
          <P.ReviewSubmit2
            onClick={() => setIsModalOpen(true)}
            $active={isApplied}
          >
            저장하기
          </P.ReviewSubmit2>
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

export default BusinessReview;
