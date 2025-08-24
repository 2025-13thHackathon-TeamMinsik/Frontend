import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../styles/StyledStudentAiPortfolio";
import { useNavigate } from "react-router-dom";

const StudentAiPortfolio = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  const Modi1Click = () => navigate("/StuInfoModi");
  const Modi2Click = () => navigate("/StuIntroModi");
  const Modi3Click = () => navigate("/StuActModi");
  const Modi4Click = () => navigate("/StuTalModi");

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("로그인 토큰이 없습니다.");
        }
        const response = await axios.get("/portfolio/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPortfolioData(response.data);
      } catch (err) {
        setError("포트폴리오 정보를 불러오는 데 실패했습니다.");
        console.error("Failed to fetch portfolio:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // 날짜 포맷 함수 (YYYY-MM-DD -> YYYY년)
  const getBirthYear = (birthDate) => {
    if (!birthDate) return "정보 없음";
    const year = birthDate.split("-")[0];
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year, 10) + 1;
    return `${age}세 (${year}년생)`;
  };

  if (loading) {
    return <S.Container>로딩 중...</S.Container>;
  }

  if (error) {
    return <S.Container>{error}</S.Container>;
  }

  if (!portfolioData) {
    return <S.Container>포트폴리오 데이터가 없습니다.</S.Container>;
  }

  const { user_info, self_introduce, activities, talent_url, images } =
    portfolioData;

  return (
    <S.Container>
      <S.Modi>
        <img src={`${process.env.PUBLIC_URL}/images/modi.svg`} alt="profile" />
      </S.Modi>
      <S.Background>
        <S.Box1>
          <S.Profile>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.svg`}
              alt="profile"
            />
          </S.Profile>
          <S.Box2>
            <S.Name>{user_info.full_name || "이름 정보 없음"}</S.Name>
            <S.AgeGen>
              {user_info.gender === "male" ? "남자" : "여자"}/
              {getBirthYear(user_info.birth)}
            </S.AgeGen>
            <S.Box3>
              <S.Selbox1>{user_info.skill_1 || "재능 정보 없음"}</S.Selbox1>
              <S.Selbox2>{user_info.skill_2 || "재능 정보 없음"}</S.Selbox2>
            </S.Box3>
            <S.Box4>
              <S.Text1>학교 | </S.Text1>
              <S.Text2>
                <S.Text2>
                  &nbsp;{user_info.university || "학교 정보 없음"}
                </S.Text2>
              </S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>전공 | </S.Text1>
              <S.Text2>&nbsp;{user_info.major || "전공 정보 없음"}</S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>학년 | </S.Text1>
              <S.Text2>
                &nbsp;{user_info.academic_status || "상태 정보 없음"}
              </S.Text2>
            </S.Box4>
          </S.Box2>
        </S.Box1>
        <S.Line></S.Line>
        <S.Box5>
          <S.Text1>연락처 | </S.Text1>
          <S.Text2>&nbsp;{user_info.phone || "연락처 정보 없음"}</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>이메일 | </S.Text1>
          <S.Text2>&nbsp;{user_info.email || "이메일 정보 없음"}</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>주소 | </S.Text1>
          <S.Text2>&nbsp;{user_info.location || "주소 정보 없음"}</S.Text2>
        </S.Box5>
        <S.Line></S.Line>
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

        <S.Modi>
          <img
            src={`${process.env.PUBLIC_URL}/images/modi.svg`}
            alt="profile"
            onClick={Modi1Click}
          />
        </S.Modi>

        <S.Modi2>
          <img
            src={`${process.env.PUBLIC_URL}/images/modi.svg`}
            alt="profile"
            onClick={Modi2Click}
          />
        </S.Modi2>

        <S.Modi3>
          <img
            src={`${process.env.PUBLIC_URL}/images/modi.svg`}
            alt="profile"
            onClick={Modi3Click}
          />
        </S.Modi3>

        <S.Modi4>
          <img
            src={`${process.env.PUBLIC_URL}/images/modi.svg`}
            alt="profile"
            onClick={Modi4Click}
          />
        </S.Modi4>

        <S.TextBox>{self_introduce || "자기소개 정보가 없습니다."}</S.TextBox>

        <S.Union2>
          <img
            src={`${process.env.PUBLIC_URL}/images/back3.svg`}
            alt="union"
            width="20.364px"
          />
        </S.Union2>

        <S.Title2>활동 이력</S.Title2>
        {activities.length > 0 ? (
          activities.map((activity) => (
            <S.TextBox2 key={activity.activity_id}>
              <S.Text3>
                {activity.company_name || "업체명 정보 없음"} |{" "}
                {activity.skills.join(" · ") || "재능 분야 정보 없음"}
              </S.Text3>
              <S.Text4>
                {activity.duration_time || "작업 기간/시간 정보 없음"}
              </S.Text4>
              <S.Line2></S.Line2>
              <S.Text5>
                {activity.ai_portfolio_summary || "활동 요약 정보 없음"}
              </S.Text5>
            </S.TextBox2>
          ))
        ) : (
          <p>등록된 활동 이력이 없습니다.</p>
        )}

        <S.TextBox3>
          <S.Text6>업체명 | 재능 분야</S.Text6>
          <S.Text7>작업 기간/시간</S.Text7>
          <S.Line3></S.Line3>
          <S.Text8>120자 공백 포함</S.Text8>
        </S.TextBox3>
        <S.Line4></S.Line4>

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
          defaultValue="http://"
          onFocus={(e) => {
            if (e.target.value === "http://") e.target.select();
          }}
        />

        <S.Box7>
          <img src={`${process.env.PUBLIC_URL}/images/pic.svg`} alt="pic" />
          <img src={`${process.env.PUBLIC_URL}/images/pic.svg`} alt="pic" />
          <img src={`${process.env.PUBLIC_URL}/images/pic.svg`} alt="pic" />
        </S.Box7>

        <S.Add>
          <img src={`${process.env.PUBLIC_URL}/images/add.svg`} alt="Add" />
        </S.Add>
      </S.Background>

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
      </S.TabBar>
    </S.Container>
  );
};

export default StudentAiPortfolio;
