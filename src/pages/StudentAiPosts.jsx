import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "../styles/StyledAiPosts";

const StudentAiPosts = () => {
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
  const [recommendedJobs, setRecommendedJobs] = useState([]); //추천 공고 데이터

  const sorts = ["최신순", "인기순", "거리순", "찜 콕"];

  const goAlert = () => {
    navigate(`/MyAlert`);
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

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  //모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsApplied(true);
  };

  //공고 좋아요
  const handleHeartClick = async (jobId, isLiked, event) => {
    event.stopPropagation();

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

  //전체 공고 조회 + 봉사시간 공고만 보기
  const fetchJobs = async () => {
    let endpoint = "/jobs/posts/";
    if (selectedFilter === "봉사") {
      endpoint = "/jobs/posts/?payment_type=VOLUNTEER_TIME";
    }

    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(`${selectedFilter} 공고 데이터:`, response.data);
      setJobs(response.data);
    } catch (error) {
      console.error("공고 조회 실패:", error);
    }
  };

  //추천 공고 조회
  const fetchRecommendedJobs = async () => {
    try {
      const response = await axios.get("/matching/recommended/jobs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("추천 공고 데이터:", response.data);

      //추천 공고 데이터가 있을 경우에만 광고 공고를 추가
      if (response.data.recommended_jobs.length > 0) {
        const adJob = {
          id: "ad",
          image: `${process.env.PUBLIC_URL}/images/ad_pic.jpg`,
          company_name: "스윗케이크",
          description:
            "스윗케이크는 동네에서 운영되는 작은 베이커리예요.<br/> 가게를 알리고 홍보할 디자인 보조 도우미를 찾습니다!<br/><br/>- 주요업무 - <br/>SNS 게시물, 카드뉴스, 포스터 등 홍보용 디자인 제작과 이미지 편집<br/><br/> 작은 혜택: 매주 1회 스윗케이크 빵 제공<br/><br/> 빵러버들 환영 ^-^",
          distance_m: null,
          is_liked: false,
          is_ad: true,
        };
        setRecommendedJobs([adJob, ...response.data.recommended_jobs]);
      } else {
        setRecommendedJobs([]);
      }
    } catch (error) {
      console.error("추천 공고 조회 실패:", error);
      setRecommendedJobs([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchRecommendedJobs();
  }, [selectedFilter]);

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
          <span id="bold">민식</span>님의 재능은
        </A.Title>
        <A.CategoryBox>
          <A.Category>디자인</A.Category>
          <A.Category>홍보/마케팅</A.Category>
        </A.CategoryBox>
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
          {isInfoOpen && <A.InfoToggle>AI 재능·거리순</A.InfoToggle>}
          <img
            src={`${process.env.PUBLIC_URL}/images/location.svg`}
            alt="location"
            width="23px"
            height="auto"
            id="location"
          />
        </A.AiTitle>
        <A.CardList>
          {recommendedJobs.map((job) => (
            <A.Card
              key={job.id}
              onClick={() => !job.is_ad && navigate(`/StudentPost/${job.id}`)}
            >
              <A.CardImg>
                <img
                  src={job.image}
                  alt="cardImg"
                  width="84.766px"
                  height="113.021px"
                  id="cardImg"
                />
              </A.CardImg>
              <div id="textBox">
                <A.CardTitle>{job.company_name}</A.CardTitle>
                <A.LocationText>
                  {job.distance_m
                    ? `현재 위치에서 ${job.distance_m}m`
                    : "거리 정보 없음"}
                </A.LocationText>
                <A.CardText>{job.description}</A.CardText>
              </div>
              {job.is_ad && <A.FilterIcon2>광고</A.FilterIcon2>}
            </A.Card>
          ))}
        </A.CardList>
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
          <A.Card
            key={job.id}
            onClick={() => navigate(`/StudentPost/${job.id}`)}
          >
            <A.CardImg>
              <img
                src={job.image}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>{job.company_name}</A.CardTitle>
              <A.LocationText>
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
              onClick={(event) => handleHeartClick(job.id, job.is_liked, event)}
            />
            {job.payment_type === "VOLUNTEER_TIME" && (
              <A.FilterIcon>봉사</A.FilterIcon>
            )}{" "}
          </A.Card>
        ))}
      </A.CardList2>
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
export default StudentAiPosts;
