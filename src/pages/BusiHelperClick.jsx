import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledBusiHelperClick";

const BusiHelperClick = () => {
  const [tabBar, setTabBar] = useState("tabBar1");

  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  return (
    <S.Container>
        <S.Nick>달고나12</S.Nick>
        <S.Box9>
            <S.Box10><S.Icon><img
              src={`${process.env.PUBLIC_URL}/images/back3.svg`}
              alt="union"
              width="20.364px"
            /></S.Icon><S.Content>나눔 동기</S.Content></S.Box10>
            <S.ContentBox></S.ContentBox>
        </S.Box9>
        <S.Line5></S.Line5>
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

      <S.Ok>재능 수락하기</S.Ok>
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
