import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as P from "../styles/StyledPost";

const BusinessPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tabBar, setTabBar] = useState("tabBar1");
  const [job, setJob] = useState(null);

  // 공고 상세 조회(소상공인)
  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`/jobs/posts/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setJob(response.data);
      console.log("공고 상세 데이터:", response.data);
    } catch (error) {
      console.error("공고 상세 조회 실패:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJobDetails();
    }
  }, [id]); //ID가 바뀔 때마다 API 호출

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
        {job?.payment_type === "VOLUNTEER_TIME" && (
          <P.FilterIcon>봉사</P.FilterIcon>
        )}
        <P.TextBox1>
          <P.Pic>
            <img
              src={job?.image}
              alt="pic"
              width="124px"
              height="165.333px"
              id="pic"
            />
          </P.Pic>
          <div id="info-section">
            <P.StoreName>{job?.company_name}</P.StoreName>
            <P.LocationText>
              {job?.distance_m
                ? `현재 위치에서 ${job.distance_m}m`
                : "거리 정보 없음"}
            </P.LocationText>
            <P.InfoText>
              <span id="infoText1">대표자명 | </span>
              <span id="infoText2">{job?.ceo_name}</span>
              <br />
              <span id="infoText1">업종 | </span>
              <span id="infoText2">{job?.business_type}</span>
              <br />
              <span id="infoText1">위치 | </span>
              <span id="infoText2">{job?.address}</span>
              <br />
              <span id="infoText1">연락처 | </span>
              <span id="infoText2">{job?.phone_number}</span>
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
            <span id="subText2">{job?.duration_time}</span>
            <br />
            <img
              src={`${process.env.PUBLIC_URL}/images/subTextIcon.svg`}
              alt="subTextIcon"
              width="16px"
              height="15.714px"
              id="subTextIcon"
            />
            <span id="subText1">급여 방식 | </span>
            <span id="subText2">{job?.payment_info}</span>
          </P.SubText>
          <P.PostContent1>{job?.description}</P.PostContent1>
        </P.TextBox2>
      </P.Box1>

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

export default BusinessPost;
