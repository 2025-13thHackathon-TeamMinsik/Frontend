import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledReciptPhoto";

const ReciptPhoto = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  return (
    <S.Container>
           <S.Background2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/background2.svg`}
                  alt="background2"
                  width="auto"
                  height="357.5px"
                />
              </S.Background2>
 
                
        <S.CoinIcon>  <img
                  src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
                  alt="참새코인" width="43px"
                /></S.CoinIcon>

        <S.Title>업체의 영수증 사진을 찍고<br></br>
스탬프를 받아보세요.</S.Title>

<S.Box1><S.GreenCheck> <img
                  src={`${process.env.PUBLIC_URL}/images/GreenCheck.svg`}
                  alt="체크완료표시"
                /></S.GreenCheck>
                <S.Info>해당 자료는 확인 후 즉시 폐기되며<br></br>
다른 목적으로 절대 사용하지 않습니다.</S.Info></S.Box1>


<S.Box2><S.GreenCheck> <img
                  src={`${process.env.PUBLIC_URL}/images/GreenCheck.svg`}
                  alt="체크완료표시"
                /></S.GreenCheck>
                <S.Info>제출 시 개인정보 수집 및 이용에 동의하신 것으로 간주됩니다.</S.Info></S.Box2>


<S.CameraBox><img
                  src={`${process.env.PUBLIC_URL}/images/camera.svg`}
                  alt="카메라"
                /></S.CameraBox>
    </S.Container>
  );
};

export default ReciptPhoto;
