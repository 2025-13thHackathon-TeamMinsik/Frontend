import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledBusinessApplications";

const BusinessApplications = () => {
  const navigate = useNavigate();
  const [tabBar, setTabBar] = useState("tabBar4");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // API에서 불러온 공고 + 지원자 데이터
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // axios 요청 함수
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`/recruits/my-jobs/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("공고 및 지원자 조회 실패:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // 탭 바 클릭
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // AI 공고 페이지로 이동
  const goAiPosts = () => {
    navigate("/BusinessAiPosts");
  };

  const goBusiTrash = () => {
    navigate(`/BusiTrashBtn`);
  };

  // 별점 렌더링 함수
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <img
        key={i}
        src={`${process.env.PUBLIC_URL}/images/Star-${
          i < rating ? "on" : "off"
        }.svg`}
        alt="star"
        width="9px"
        height="auto"
      />
    ));
  };

  if (loading) {
    return <P.Container>로딩 중...</P.Container>;
  }

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

      {/* === 공고 목록 === */}
      {jobs.map((job) => (
        <div key={job.job_id}>
          <P.Box>
            <P.FilterIcon>봉사</P.FilterIcon>
            <P.DateText>
              {job.applied_at?.slice(0, 10) || "날짜 미정"}
            </P.DateText>
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
                <span id="subText2">{job.duration_time || "협의"}</span>
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
                  alt="subTextIcon"
                  width="16px"
                  height="15.714px"
                  id="subTextIcon"
                />
                <span id="subText1">급여 방식 | </span>
                <span id="subText2">{job.payment_info}</span>
              </P.SubText>
              <P.PostContent1>{job.description}</P.PostContent1>
            </P.TextBox2>
          </P.Box>

          <P.OptionBox>
            <P.Option1
              onClick={() =>
                navigate("/NoticeUp", { state: { jobId: job.job_id } })
              }
            >
              공고 수정하기
            </P.Option1>
            <P.Option2>후기 작성하기</P.Option2>
          </P.OptionBox>

          <P.Line></P.Line>
          <P.ApplicationsTitle2>재능 도우미</P.ApplicationsTitle2>

          {/* === 지원자 목록 === */}
          <div id="row">
            {job.applicants.length > 0 ? (
              job.applicants.map((applicant) => (
                <P.Profile key={applicant.application_id}>
                  <P.ProfileInfo>
                    <P.ProfileImage>
                      <P.MyProfileImage>
                        <img
                          src={
                            applicant.profile_image
                              ? `http://localhost:8000${applicant.profile_image}`
                              : `${process.env.PUBLIC_URL}/images/defaultProfile.svg`
                          }
                          alt="defaultProfile"
                          width="51px"
                          height="auto"
                        />
                      </P.MyProfileImage>
                    </P.ProfileImage>
                    <P.ProfileTitle>{applicant.name}</P.ProfileTitle>
                    <P.ProfileLine></P.ProfileLine>
                  </P.ProfileInfo>

                  {/* 점수 영역 */}
                  <div className="RatingArea">
                    <P.RatingBox>
                      <P.RatingText>성실함</P.RatingText>
                      <P.Star>{renderStars(applicant.diligence_score)}</P.Star>
                    </P.RatingBox>
                  </div>
                  <div className="RatingArea">
                    <P.RatingBox>
                      <P.RatingText>시간 준수</P.RatingText>
                      <P.Star>
                        {renderStars(applicant.punctuality_score)}
                      </P.Star>
                    </P.RatingBox>
                  </div>
                  <div className="RatingArea">
                    <P.RatingBox>
                      <P.RatingText>밝은 태도</P.RatingText>
                      <P.Star>
                        {renderStars(applicant.cheerful_attitude_score)}
                      </P.Star>
                    </P.RatingBox>
                  </div>
                  <div className="RatingArea">
                    <P.RatingBox>
                      <P.RatingText>예의 바름</P.RatingText>
                      <P.Star>{renderStars(applicant.politeness_score)}</P.Star>
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
              ))
            ) : (
              <p>아직 지원자가 없습니다.</p>
            )}
          </div>
        </div>
      ))}

      {/* === 하단 탭바 === */}
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
            onClick={goBusiTrash}
          />
        </div>
      </P.TabBar>
    </P.Container>
  );
};

export default BusinessApplications;
