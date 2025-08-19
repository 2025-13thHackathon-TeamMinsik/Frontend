import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledBusinessApplications";

const BusinessApplications = () => {
  const navigate = useNavigate();
  const [tabBar, setTabBar] = useState("tabBar4");

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

  //별점 렌더링 함수
  const renderStars = (rating) => {
    const stars = [];
    let i;
    for (i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <img
          src={`${process.env.PUBLIC_URL}/images/Star-${
            isFilled ? "on" : "off"
          }.svg`}
          alt="star"
          width="9px"
          height="auto"
        />
      );
    }
    return stars;
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
        <P.ApplicationsTitle>내 공고</P.ApplicationsTitle>
      </div>
      <P.Box>
        <P.DateText>250812</P.DateText>

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
      </P.Box>
      <P.OptionBox>
        <P.Option1>공고 수정하기</P.Option1>
        <P.Option2>후기 작성하기</P.Option2>
      </P.OptionBox>
      <P.Line></P.Line>
      <P.ApplicationsTitle2>재능 도우미</P.ApplicationsTitle2>
      <div id="row">
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
                  height="auto"
                />
              </P.MyProfileImage>
            </P.ProfileImage>
            <P.ProfileTitle>솜사탕12</P.ProfileTitle>
            <P.ProfileLine></P.ProfileLine>
          </P.ProfileInfo>
          <P.NewText>신규 도우미</P.NewText>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
      </div>
      <div id="row">
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
      </div>
      <div id="row">
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
      </div>
      <div id="row">
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
        <P.Profile>
          <P.ProfileInfo>
            <P.ProfileImage>
              <P.MyProfileImage>
                <img
                  src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                  alt="defaultProfile"
                  width="51px"
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
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>성실함</P.RatingText>
              <P.Star>{renderStars(3)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>시간 준수</P.RatingText>
              <P.Star>{renderStars(5)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>밝은 태도</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <div class="RatingArea">
            <P.RatingBox>
              <P.RatingText>예의 바름</P.RatingText>
              <P.Star>{renderStars(4)}</P.Star>
            </P.RatingBox>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
            alt="heart-off"
            width="19.5px"
            height="auto"
            id="profileHeart"
          />
        </P.Profile>
      </div>
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

export default BusinessApplications;
