import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "../styles/StyledAiPosts";

const BusinessAiPosts = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [tabBar, setTabBar] = useState("tabBar1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [jobs, setJobs] = useState([]); //공고데이터

  const sorts = ["최신순", "인기순", "거리순", "찜 콕"];

  const goAlert = () => {
    navigate(`/MyAlert`);
  };

  const goNoticeUp = () => {
    navigate(`/NoticeUp`);
  };

  //토글 아이콘
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //나에게 딱 맞는 정보 아이콘
  const handleInfoIcon = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const handleSelected = (sort) => {
    setSelected(sort); //sort선택하면
    setIsMenuOpen(false); //메뉴 닫기
  };

  //전체 | 봉사 필터 함수
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  //찜 콕 아이콘
  const handleHeartIcon = () => {
    setIsHeartClick(!isHeartClick);
  };

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  //모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsApplied(true);
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

  //공고 좋아요
  const handleHeartClick = async (jobId, isLiked) => {
    try {
      const endpoint = `/jobs/${jobId}/like/`;

      await axios.post(endpoint, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setJobs(
        jobs.map((job) =>
          job.id === jobId ? { ...job, is_liked: !isLiked } : job
        )
      );
    } catch (error) {
      console.error("좋아요 기능 실패:", error);
    }
  };

  //전체 공고 조회
  const fetchAllJobs = async () => {
    try {
      const response = await axios.get("/jobs/posts/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("공고 데이터:", response.data);
      setJobs(response.data); //받아온 데이터를 jobs 상태에 저장
    } catch (error) {
      console.error("공고 전체 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <A.Container>
      <div id="header">
        <img
          src={`${process.env.PUBLIC_URL}/images/alert.svg`}
          alt="alert"
          width="25px"
          height="auto"
          id="alert"
          onClick={goAlert}
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/logout.svg`}
          alt="logout"
          width="33px"
          height="auto"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <A.TitleBox>
        <A.Title>
          우리 곳간은 <span id="bold">성북구</span>
          <br />
          <span id="bold">관심도우미</span>는
        </A.Title>
        <A.CategoryBox2>
          <A.Category>디자인</A.Category>
          <A.Category>홍보/마케팅</A.Category>
        </A.CategoryBox2>
      </A.TitleBox>
      <A.Illust>
        <img
          src={`${process.env.PUBLIC_URL}/images/illust.svg`}
          alt="illust"
          width="100%"
          height="auto"
        />
      </A.Illust>
      <A.SearchBox>
        <A.SearchInput
          type="text"
          placeholder="원하는 키워드를 검색하세요. #개발 #디자인"
        ></A.SearchInput>
        <A.Line></A.Line>
        <img
          src={`${process.env.PUBLIC_URL}/images/searchIcon.svg`}
          alt="searchIcon"
          id="searchIcon"
        />
      </A.SearchBox>
      <A.StudentAiCardBox>
        <A.AiTitle>
          나에게 딱 맞는
          <img
            src={`${process.env.PUBLIC_URL}/images/info.svg`}
            alt="info"
            width="25px"
            height="auto"
            id="info"
            onClick={handleInfoIcon}
          />
          {isInfoOpen && (
            <A.InfoToggle2>
              초기: AI 참여횟수·재능
              <br />
              후기: AI 별점·재능
            </A.InfoToggle2>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/images/location.svg`}
            alt="location"
            width="23px"
            height="auto"
            id="location"
          />
        </A.AiTitle>
        <A.ProfileList>
          <A.Profile>
            <A.ProfileInfo>
              <A.ProfileImage>
                <A.MyProfileImage>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                    alt="defaultProfile"
                    width="51px"
                    height="auto"
                  />
                </A.MyProfileImage>
              </A.ProfileImage>
              <A.ProfileTitle>솜사탕12</A.ProfileTitle>
              <A.ProfileLine></A.ProfileLine>
            </A.ProfileInfo>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>참여도</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>성실함</A.RatingText>
                <A.Star>{renderStars(3)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>시간 준수</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>밝은 태도</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>예의 바름</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
              alt="heart-off"
              width="19.5px"
              height="auto"
              id="profileHeart"
            />
          </A.Profile>
          <A.Profile>
            <A.ProfileInfo>
              <A.ProfileImage>
                <A.MyProfileImage>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                    alt="defaultProfile"
                    width="51px"
                    height="auto"
                  />
                </A.MyProfileImage>
              </A.ProfileImage>
              <A.ProfileTitle>솜사탕12</A.ProfileTitle>
              <A.ProfileLine></A.ProfileLine>
            </A.ProfileInfo>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>참여도</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>성실함</A.RatingText>
                <A.Star>{renderStars(3)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>시간 준수</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>밝은 태도</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>예의 바름</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
              alt="heart-off"
              width="19.5px"
              height="auto"
              id="profileHeart"
            />
          </A.Profile>
          <A.Profile>
            <A.ProfileInfo>
              <A.ProfileImage>
                <A.MyProfileImage>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                    alt="defaultProfile"
                    width="51px"
                    height="auto"
                  />
                </A.MyProfileImage>
              </A.ProfileImage>
              <A.ProfileTitle>솜사탕12</A.ProfileTitle>
              <A.ProfileLine></A.ProfileLine>
            </A.ProfileInfo>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>참여도</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>성실함</A.RatingText>
                <A.Star>{renderStars(3)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>시간 준수</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>밝은 태도</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>예의 바름</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
              alt="heart-off"
              width="19.5px"
              height="auto"
              id="profileHeart"
            />
          </A.Profile>
          <A.Profile>
            <A.ProfileInfo>
              <A.ProfileImage>
                <A.MyProfileImage>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/defaultProfile.svg`}
                    alt="defaultProfile"
                    width="51px"
                    height="auto"
                  />
                </A.MyProfileImage>
              </A.ProfileImage>
              <A.ProfileTitle>솜사탕12</A.ProfileTitle>
              <A.ProfileLine></A.ProfileLine>
            </A.ProfileInfo>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>참여도</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>성실함</A.RatingText>
                <A.Star>{renderStars(3)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>시간 준수</A.RatingText>
                <A.Star>{renderStars(5)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>밝은 태도</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <div class="RatingArea">
              <A.RatingBox>
                <A.RatingText>예의 바름</A.RatingText>
                <A.Star>{renderStars(4)}</A.Star>
              </A.RatingBox>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/heart-off.svg`}
              alt="heart-off"
              width="19.5px"
              height="auto"
              id="profileHeart"
            />
          </A.Profile>
        </A.ProfileList>
      </A.StudentAiCardBox>
      <A.Line2></A.Line2>
      <div id="filterBar">
        <A.Filter1>
          <span
            id="option1"
            onClick={() => handleFilter("전체")}
            style={{ color: selectedFilter === "전체" ? "black" : "#a3a3a3" }}
          >
            전체{" "}
          </span>
          |{" "}
          <span
            id="option2"
            onClick={() => handleFilter("봉사")}
            style={{ color: selectedFilter === "봉사" ? "black" : "#a3a3a3" }}
          >
            봉사
          </span>
        </A.Filter1>
        <A.Filter2 onClick={handleToggle}>
          {selected}
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isMenuOpen ? "toggleUp2.svg" : "toggleDown2.svg"
            }`}
            alt="toggleIcon"
            width="16px"
            height="auto"
            id="toggleIcon"
          />
        </A.Filter2>
        {isMenuOpen && (
          <A.FilterToggle>
            {sorts.map((item) => (
              <div
                key={item}
                onClick={() => handleSelected(item)}
                style={{
                  fontWeight: selected === item ? "bold" : "normal",
                  color: selected === item ? "black" : "gray",
                }}
              >
                {item}
              </div>
            ))}
          </A.FilterToggle>
        )}
      </div>
      <A.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/background.svg`}
          alt="background"
        />
      </A.Background>
      <A.CardList2>
        {jobs.map((job) => (
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>
                {" "}
                {job.distance_m
                  ? `현재 위치에서 ${job.distance_m}m`
                  : "거리 정보 없음"}
              </A.LocationText>
              <A.CardText>{job.description}</A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                job.is_liked ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={() => handleHeartClick(job.id, job.is_liked)}
            />
            <A.FilterIcon>봉사</A.FilterIcon>
          </A.Card>
        ))}
      </A.CardList2>
      <A.WriteBtn>
        <img
          src={`${process.env.PUBLIC_URL}/images/writeBtn.svg`}
          alt="writeBtn"
          width="57px"
          height="auto"
          id="writeBtn"
          onClick={goNoticeUp}
        />
      </A.WriteBtn>
      <A.TabBar>
        <div id="tabBarIcon">
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar1" ? "tabBar1_on.svg" : "tabBar1_off.svg"
            }`}
            alt="tabBar1"
            width="41px"
            height="60px"
            onClick={() => handleTabBar("tabBar1")}
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
      </A.TabBar>
      {isModalOpen && (
        <A.ModalOverlay>
          <A.ApplyModal>
            <img
              src={`${process.env.PUBLIC_URL}/images/modalIcon.svg`}
              alt="modalIcon"
              width="29px"
              height="auto"
              id="modalIcon"
            />
            <div id="modalTextBox">
              <A.ModalTitle>로그아웃 하시겠습니까?</A.ModalTitle>
              <A.ModalLine></A.ModalLine>
              <div id="modalLogoutText">
                <A.ModalBtn1 onClick={handleModalClose}>예</A.ModalBtn1>
                <A.ModalLine2></A.ModalLine2>
                <A.ModalBtn2 onClick={handleModalClose}>아니오</A.ModalBtn2>
              </div>
            </div>
          </A.ApplyModal>
        </A.ModalOverlay>
      )}
    </A.Container>
  );
};

export default BusinessAiPosts;
