import React, { useState } from "react";
import * as S from "../styles/StyledStamp";
import { useEffect } from "react";

const Stamp = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
    useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <S.Container>
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

      <S.StampCircle10>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle10.svg`}
          alt="Circle"
        /></S.StampCircle10>
      <S.StampCircle9>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle9.svg`}
          alt="Circle"
        /></S.StampCircle9>     
             <S.StampCircle8>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle8.svg`}
          alt="Circle"
        /></S.StampCircle8>
               <S.StampCircle7>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle7.svg`}
          alt="Circle"
        /></S.StampCircle7>
        
               <S.StampCircle6>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle6.svg`}
          alt="Circle"
        /></S.StampCircle6>
        
               <S.StampCircle5>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle5.svg`}
          alt="Circle"
        /></S.StampCircle5>
        
               <S.StampCircle4>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle4.svg`}
          alt="Circle"
        /></S.StampCircle4>
        
               <S.StampCircle3>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle3.svg`}
          alt="Circle"
        /></S.StampCircle3>

                <S.StampCircle2>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle2.svg`}
          alt="Circle"
        /></S.StampCircle2>

                <S.StampCircle1>       <img
          src={`${process.env.PUBLIC_URL}/images/Circle1.svg`}
          alt="Circle"
        /></S.StampCircle1> 
        {/* 영수증 검토 완료 시 이미지 /DoneCircleN(숫자)로 바뀌는 형식 */}
        
        <S.CoinBtn>코인</S.CoinBtn>
        
        <S.CoinNum>0/10</S.CoinNum>


    </S.Container>

  );
};

export default Stamp;
