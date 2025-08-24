import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "../styles/StyledAiPosts";

export const StudentAiPosts = () => {
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
  const [designatedLocation, setDesignatedLocation] = useState({
    lat: 37.6063588,
    lng: 127.0418229,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // 초기값을 null로 설정하여 검색 전 상태를 구분

  const sorts = ["최신순", "인기순", "거리순", "찜 콕"];

  const goAlert = () => {
    navigate(`/MyAlert`);
  };

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInfoIcon = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  // 정렬 필터 선택 시 호출되는 함수 (수정된 부분)
  const handleSelected = async (sort) => {
    setSelected(sort);
    setIsMenuOpen(false);

    // 검색어가 있을 경우, 검색 API에 정렬 파라미터를 추가하여 재요청
    if (searchTerm.trim() !== "") {
      handleSearch(selectedFilter, sort);
    } else {
      // 검색어가 없을 경우, 기존 공고 조회 함수를 호출
      fetchJobs(selectedFilter, sort);
    }
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    if (searchTerm.trim() !== "") {
      handleSearch(filter, selected);
    } else {
      fetchJobs(filter, selected);
    }
  };

  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsApplied(true);
  };

  const handleHeartClick = async (jobId, isLiked, event) => {
    event.stopPropagation();
    try {
      const endpoint = `/jobs/${jobId}/like/`;
      await axios.post(endpoint, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // 찜 상태 업데이트
      setJobs(
        jobs.map((job) =>
          job.id === jobId ? { ...job, is_liked: !isLiked } : job
        )
      );
      if (searchResults) {
        setSearchResults(
          searchResults.map((job) =>
            job.id === jobId ? { ...job, is_liked: !isLiked } : job
          )
        );
      }
    } catch (error) {
      console.error("좋아요 기능 실패:", error);
    }
  };

  // 공고내역 검색 (수정된 부분)
  const handleSearch = async (
    paymentFilter = selectedFilter,
    sortBy = selected
  ) => {
    try {
      if (searchTerm.trim() === "") {
        setSearchResults(null);
        return;
      }
      const paymentType = paymentFilter === "봉사" ? "VOLUNTEER_TIME" : "ALL";
      let sortParam;
      if (sortBy === "최신순") sortParam = "latest";
      else if (sortBy === "인기순") sortParam = "popular";
      else if (sortBy === "거리순") sortParam = "distance";
      else if (sortBy === "찜 콕") sortParam = "liked";

      let endpoint = `/jobs/search/?q=${searchTerm}&payment_type=${paymentType}`;
      if (sortParam) {
        endpoint += `&sort=${sortParam}`;
      }
      if (sortParam === "distance" && designatedLocation) {
        endpoint += `&lat=${designatedLocation.lat}&lng=${designatedLocation.lng}`;
      }

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("검색 결과:", response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error("검색 실패", error);
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const fetchJobs = async (paymentType, sortBy) => {
    let endpoint = `/jobs/posts/`;
    let params = {
      payment_type: paymentType === "봉사" ? "VOLUNTEER_TIME" : "ALL",
    };

    if (sortBy === "최신순") {
      params.sort = "latest";
    } else if (sortBy === "인기순") {
      params.sort = "popular";
    } else if (sortBy === "거리순") {
      if (designatedLocation) {
        params.sort = "distance";
        params.lat = designatedLocation.lat;
        params.lng = designatedLocation.lng;
      } else {
        console.warn("지정된 위치 정보가 없습니다.");
        return;
      }
    } else if (sortBy === "찜 콕") {
      params.sort = "liked";
    }

    try {
      const response = await axios.get(endpoint, {
        params,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("공고 조회 실패:", error);
    }
  };

  const fetchRecommendedJobs = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/matching/recommended/jobs/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
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
      console.error(
        "추천 공고 조회 실패:",
        error.response?.data || error.message
      );
      setRecommendedJobs([]);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchJobs(selectedFilter, selected);
    }
    fetchRecommendedJobs();
  }, [selectedFilter, selected, searchTerm]);

  const jobsToDisplay = searchResults !== null ? searchResults : jobs;
  const noResultsFound = searchResults && searchResults.length === 0;

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        ></A.SearchInput>
        <A.Line></A.Line>
        <img
          src={`${process.env.PUBLIC_URL}/images/searchIcon.svg`}
          alt="searchIcon"
          id="searchIcon"
          onClick={() => handleSearch()}
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
        {noResultsFound ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          jobsToDisplay.map((job) => (
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
                onClick={(event) =>
                  handleHeartClick(job.id, job.is_liked, event)
                }
              />
              {job.payment_type === "VOLUNTEER_TIME" && (
                <A.FilterIcon>봉사</A.FilterIcon>
              )}
            </A.Card>
          ))
        )}
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
