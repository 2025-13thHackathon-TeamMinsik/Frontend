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
  const [designatedLocation, setDesignatedLocation] = useState({
    lat: 37.6063588,
    lng: 127.0418229,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null); // 검색 결과 상태 추가
  const [recommendedStudents, setRecommendedStudents] = useState([]);
  const [isRecommendedLoading, setIsRecommendedLoading] = useState(true);

  const sorts = ["최신순", "인기순", "거리순", "찜 콕"];

  const goAlert = () => {
    navigate(`/MyAlert`);
  };

  // ✅ goNoticeUp 함수 수정
  const goNoticeUp = () => {
    try {
      // localStorage에서 'user_info' 데이터 가져오기
      const userInfoString = localStorage.getItem("user_info");

      // 사용자 정보가 없으면 알림창을 띄우고 함수 종료
      if (!userInfoString) {
        alert("로그인 정보가 없습니다. 다시 로그인 해주세요.");
        console.error("User info not found in localStorage");
        return;
      }

      // JSON.parse를 사용하여 문자열을 객체로 변환
      const userInfo = JSON.parse(userInfoString);

      // NoticeUp 페이지로 이동하며 사용자 정보 전달
      // 로그인 응답에 있는 'full_name', 'company_name', 'business_type', 'location'을 사용
      navigate(`/NoticeUp`, {
        state: {
          formData: {
            name: userInfo.full_name,
            company_name: userInfo.company_name,
            business_type: userInfo.business_type,
            location: userInfo.location,
          },
        },
      });
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류 발생:", error);
      alert("사용자 정보를 불러오는데 실패했습니다. 다시 시도해주세요.");
    }
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

  // 전체 | 봉사 필터 함수 (수정된 부분)
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

  // ⭐ 별점 렌더링 함수를 학생 평점 데이터에 맞춰 수정
  const renderStars = (rating) => {
    const stars = [];
    let i;
    for (i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <img
          key={i}
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

  // 공고내역 검색 함수 추가 (수정된 부분)
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

  // 엔터 키 핸들러 추가
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
      console.log(
        `[${paymentType}] 공고 조회 - [${sortBy}] 정렬:`,
        response.data
      );
      setJobs(response.data);
    } catch (error) {
      console.error("공고 전체 조회 실패:", error);
    }
  };

  // ⭐ 추천 대학생 데이터를 불러오는 새로운 함수
  const fetchRecommendedStudents = async () => {
    setIsRecommendedLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("Access token not found. Please log in.");
        setIsRecommendedLoading(false);
        return;
      }
      const response = await axios.get(`/matching/recommend/students/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // API 응답 데이터를 상태에 저장합니다.
      setRecommendedStudents(response.data.recommended_students);
      console.log("추천 대학생 조회 성공:", response.data.recommended_students);
    } catch (error) {
      console.error("추천 대학생 조회 실패:", error);
      setRecommendedStudents([]);
    } finally {
      setIsRecommendedLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchJobs(selectedFilter, selected);
    }
  }, [selectedFilter, selected, searchTerm]);

  // ⭐ 컴포넌트 마운트 시 추천 대학생 목록을 불러옵니다.
  useEffect(() => {
    fetchRecommendedStudents();
  }, []);

  const jobsToDisplay = searchResults !== null ? searchResults : jobs;
  const noResultsFound =
    searchTerm.trim() !== "" && searchResults && searchResults.length === 0;

  useEffect(() => {
    if (noResultsFound) {
      console.log("검색 결과가 없습니다.");
    }
  }, [noResultsFound]);

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
          {/* ⭐ 로딩 상태와 데이터 유무에 따른 조건부 렌더링 */}
          {isRecommendedLoading ? (
            <p>추천 대학생 목록을 불러오는 중입니다...</p>
          ) : recommendedStudents.length > 0 ? (
            // ⭐ API에서 받은 데이터로 동적으로 프로필 카드 생성
            recommendedStudents.map((student) => (
              <A.Profile key={student.id}>
                <A.ProfileInfo>
                  <A.ProfileImage>
                    <A.MyProfileImage>
                      <img
                        src={
                          student.profile_image ||
                          `${process.env.PUBLIC_URL}/images/defaultProfile.svg`
                        }
                        alt="defaultProfile"
                        width="51px"
                        height="auto"
                      />
                    </A.MyProfileImage>
                  </A.ProfileImage>
                  <A.ProfileTitle>{student.name}</A.ProfileTitle>
                  <A.ProfileLine></A.ProfileLine>
                </A.ProfileInfo>
                <div class="RatingArea">
                  <A.RatingBox>
                    <A.RatingText>참여도</A.RatingText>
                    <A.Star>{renderStars(student.participation)}</A.Star>
                  </A.RatingBox>
                </div>
                <div class="RatingArea">
                  <A.RatingBox>
                    <A.RatingText>성실함</A.RatingText>
                    <A.Star>{renderStars(student.diligence)}</A.Star>
                  </A.RatingBox>
                </div>
                <div class="RatingArea">
                  <A.RatingBox>
                    <A.RatingText>시간 준수</A.RatingText>
                    <A.Star>{renderStars(student.punctuality)}</A.Star>
                  </A.RatingBox>
                </div>
                <div class="RatingArea">
                  <A.RatingBox>
                    <A.RatingText>밝은 태도</A.RatingText>
                    <A.Star>{renderStars(student.cheerful_attitude)}</A.Star>
                  </A.RatingBox>
                </div>
                <div class="RatingArea">
                  <A.RatingBox>
                    <A.RatingText>예의 바름</A.RatingText>
                    <A.Star>{renderStars(student.politeness)}</A.Star>
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
            ))
          ) : (
            <p>추천 대학생 프로필이 없습니다.</p>
          )}
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
        {noResultsFound ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          jobsToDisplay.map((job) => (
            <A.Card key={job.id} onClick={() => navigate(`/jobs/${job.id}`)}>
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
