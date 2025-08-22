import React from "react";
import axios from "axios";
import * as S from "../styles/StyledNoticeUp";
import { useState } from "react";

const NoticeUp = () => {
const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  return (
    <S.Container>   <S.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
          />
        </S.BackBtn>
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

      <S.Box1>
           <S.Box3> <S.Icon> <img
            src={`${process.env.PUBLIC_URL}/images/Icon.svg`}
            alt="*"
          /></S.Icon> <S.Text>나눔 내용</S.Text><S.Day>250812</S.Day></S.Box3>

          <S.Box4><S.GrayIcon><img
            src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
            alt="*" width="16px"
          /></S.GrayIcon><S.GrayText>기간/시간</S.GrayText></S.Box4>

          <S.TimeInput placeholder="ex) 월화수 4시간/ 기간 1달 "></S.TimeInput>

          
          <S.Box4><S.GrayIcon><img
            src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
            alt="*" width="16px"
          /></S.GrayIcon><S.GrayText>급여 방식</S.GrayText></S.Box4>

          <S.TimeInput2 placeholder="ex) 시급 11,000원"></S.TimeInput2>

          <S.TextBox placeholder="300자 공백 포함"></S.TextBox>


          <S.Box3> <S.Icon> <img
            src={`${process.env.PUBLIC_URL}/images/Icon.svg`}
            alt="*"
          /></S.Icon> <S.Text>사진 첨부</S.Text></S.Box3>

      </S.Box1>

      <S.Box2><S.Up>공고 올리기</S.Up></S.Box2>
    </S.Container>
  );
};

export default NoticeUp;
