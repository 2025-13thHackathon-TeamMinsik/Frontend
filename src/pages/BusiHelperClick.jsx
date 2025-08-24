import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledBusiHelperClick";

const BusiHelperClick = () => {
  const { application_id } = useParams();
  const [tabBar, setTabBar] = useState("tabBar1");
  const [showModal, setShowModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [applicant, setApplicant] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 지원자 상세 데이터 불러오기
  const fetchApplicantDetail = async () => {
    if (!application_id) {
      console.error("❌ application_id가 없습니다. 라우트 설정을 확인하세요.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `/recruits/applications/${application_id}/detail/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setApplicant(response.data);
      setLoading(false);
    } catch (error) {
      console.error("지원자 상세정보 불러오기 실패:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicantDetail();
  }, [application_id]);

  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  const handleAccept = () => {
    setShowModal(true);
    setIsAccepted(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/BusinessAiPosts");
  };

  if (loading) {
    return <S.Container>로딩 중...</S.Container>;
  }

  if (!applicant) {
    return <S.Container>지원자 정보를 불러오지 못했습니다.</S.Container>;
  }

  const info = applicant.applicant_info;
  const portfolio = applicant.portfolio || {};
  const activities = applicant.activity_history || [];

  return (
    <S.Container>
      <S.Nick>{info.name}</S.Nick>

      <S.Box9>
        <S.Box10>
          <S.Icon>
            <img
              src={`${process.env.PUBLIC_URL}/images/back3.svg`}
              alt="union"
              width="20.364px"
            />
          </S.Icon>
          <S.Content>나눔 동기</S.Content>
        </S.Box10>
        <S.ContentBox>
          {info.skill_1} · {info.skill_2}
        </S.ContentBox>
      </S.Box9>

      <S.Line5 />

      <S.Background>
        <S.Box1>
          <S.Profile>
            <img
              src={
                portfolio.profile_img
                  ? `${portfolio.profile_img}`
                  : `${process.env.PUBLIC_URL}/images/profile.svg`
              }
              alt="profile"
            />
          </S.Profile>
          <S.Box2>
            <S.Name>{info.name}</S.Name>
            <S.AgeGen>
              {info.gender ? `${info.gender} / ` : ""}
              {info.birth
                ? `${new Date().getFullYear() - parseInt(info.birth)}세(${
                    info.birth
                  })`
                : ""}
            </S.AgeGen>
            <S.Box3>
              {info.skill_1 && <S.Selbox1>{info.skill_1}</S.Selbox1>}
              {info.skill_2 && <S.Selbox2>{info.skill_2}</S.Selbox2>}
            </S.Box3>
            <S.Box4>
              <S.Text1>학교 | </S.Text1>
              <S.Text2>{info.university}</S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>전공 | </S.Text1>
              <S.Text2>{info.major}</S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>학년 | </S.Text1>
              <S.Text2>{info.academic_status}</S.Text2>
            </S.Box4>
          </S.Box2>
        </S.Box1>

        <S.Line />

        <S.Box5>
          <S.Text1>연락처 | </S.Text1>
          <S.Text2>{info.phone}</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>이메일 | </S.Text1>
          <S.Text2>{info.email}</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>주소 | </S.Text1>
          <S.Text2>{info.location}</S.Text2>
        </S.Box5>

        <S.Line />

        <S.Box6>
          <S.Union1>
            <img
              src={`${process.env.PUBLIC_URL}/images/back3.svg`}
              alt="union"
              width="20.364px"
            />
          </S.Union1>
          <S.Title>자기소개</S.Title>
        </S.Box6>

        <S.TextBox>
          {portfolio.self_introduce || "자기소개가 없습니다."}
        </S.TextBox>

        <S.Union2>
          <img
            src={`${process.env.PUBLIC_URL}/images/back3.svg`}
            alt="union"
            width="20.364px"
          />
        </S.Union2>

        <S.Title2>활동 이력</S.Title2>

        {activities.length > 0 ? (
          activities.map((act, idx) => (
            <S.TextBox2 key={idx}>
              <S.Text3>
                {act.company_name} | {act.skills}
              </S.Text3>
              <S.Text4>{act.duration}</S.Text4>
              <S.Line2 />
              <S.Text5>{act.description}</S.Text5>
            </S.TextBox2>
          ))
        ) : (
          <S.TextBox3>
            <S.Text8>등록된 활동 이력이 없습니다.</S.Text8>
          </S.TextBox3>
        )}

        <S.Line4 />

        <S.Union3>
          <img
            src={`${process.env.PUBLIC_URL}/images/back3.svg`}
            alt="union"
            width="20.364px"
          />
        </S.Union3>

        <S.Title3>재능 관람</S.Title3>

        <S.UrlInput
          type="text"
          value={portfolio.talent_url || "http://"}
          readOnly
        />

        <S.Box7>
          {portfolio.talent_images?.length > 0 ? (
            portfolio.talent_images.map((img, idx) => (
              <img key={idx} src={`${img}`} alt="portfolio" />
            ))
          ) : (
            <p>등록된 포트폴리오 이미지가 없습니다.</p>
          )}
        </S.Box7>

        <S.Ok onClick={handleAccept}>재능 수락하기</S.Ok>
      </S.Background>

      {showModal && (
        <S.Overlay onClick={() => setShowModal(false)}>
          <S.ModalBox onClick={(e) => e.stopPropagation()}>
            <S.Icon2>
              <img
                src={`${process.env.PUBLIC_URL}/images/modalicon.svg`}
                alt="아이콘"
              />
            </S.Icon2>
            <S.Info2>재능 수락이 완료되었습니다.</S.Info2>
            <S.Line6 />
            <S.Ok2 onClick={handleConfirm}>확인</S.Ok2>
          </S.ModalBox>
        </S.Overlay>
      )}

      <S.TabBar>
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
      </S.TabBar>
    </S.Container>
  );
};

export default BusiHelperClick;
