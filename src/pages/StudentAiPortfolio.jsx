import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledStudentAiPortfolio";
import { useNavigate } from "react-router-dom"

const StudentAiPortfolio = () => {
  const [tabBar, setTabBar] = useState("tabBar1");

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

    // 👈 useNavigate 훅을 초기화합니다.
  const navigate = useNavigate();

  const Modi1Click = () => navigate("/StuInfoModi");
  const Modi2Click = () => navigate("/StuIntroModi");
  const Modi3Click = () => navigate("/StuActModi");
  const Modi4Click = () => navigate("/StuTalModi");
      
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
            <S.Name>이승언</S.Name>
            <S.AgeGen>여자/22세(2003년생)</S.AgeGen>
            <S.Box3>
              <S.Selbox1>디자인</S.Selbox1>
              <S.Selbox2>홍보/마케팅</S.Selbox2>
            </S.Box3>
            <S.Box4>
              <S.Text1>학교 | </S.Text1>
              <S.Text2>&nbsp;동덕여자대학교</S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>전공 | </S.Text1>
              <S.Text2>&nbsp;미디어디자인</S.Text2>
            </S.Box4>
            <S.Box4>
              <S.Text1>학년 | </S.Text1>
              <S.Text2>&nbsp;휴학 중</S.Text2>
            </S.Box4>
          </S.Box2>
        </S.Box1>
        <S.Line></S.Line>
        <S.Box5>
          <S.Text1>연락처 | </S.Text1>
          <S.Text2>&nbsp;010-1234-5678</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>이메일 | </S.Text1>
          <S.Text2>&nbsp;happyshare1234@gmail.com</S.Text2>
        </S.Box5>
        <S.Box5>
          <S.Text1>주소 | </S.Text1>
          <S.Text2>&nbsp;성북구 화랑로 13길 60</S.Text2>
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

        <S.Modi >
          <img
            src={`${process.env.PUBLIC_URL}/images/modi.svg`}
            alt="profile"
            onClick={Modi1Click}
          />
        </S.Modi>

        <S.Modi2 >
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

        <S.TextBox>
          200자 공백 포함. 안녕하세요. 저는 동덕여자대학교<br></br>
          미디어디자인학과 휴학생입니다. 3학년 마치고 쉬면서<br></br>
          저의 재능을 나누고 디벨롭하고자 합니다.<br></br>
          미디어에 관련된 디자인 공부를 하고 있습니다.<br></br>
          실무경험을 쌓고 소상공인에게 도움을 주고 싶습니다.<br></br>
          저의 작은 도움이 큰 힘이 되었으면 합니다.<br></br>
          감사합니다.
        </S.TextBox>

        <S.Union2>
          <img
            src={`${process.env.PUBLIC_URL}/images/back3.svg`}
            alt="union"
            width="20.364px"
          />
        </S.Union2>

        <S.Title2>활동 이력</S.Title2>
        <S.TextBox2>
          <S.Text3>냠디저트 | 디자인 · 홍보/마케팅</S.Text3>
          <S.Text4>월화수 4시간</S.Text4>
          <S.Line2></S.Line2>
          <S.Text5>
            성북구 카페의 SNS 마케팅을 함께하며 촬영,운영,홍<br></br>보 실무를
            경험하였습니다. 사장님과의 협업으로 마케<br></br>팅 감각과 현장
            적응력을 키웠습니다. 저의 재능이 도<br></br>
            움이 필요한 곳에 닿아 뿌듯하고 뜻 깊은 시간이었습<br></br>
            니다.
          </S.Text5>
        </S.TextBox2>

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
