import React, { useState } from "react";
import * as S from "../styles/StyledStuTalModi";
import { useNavigate } from "react-router-dom";

const StuTalModi = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

    const navigate = useNavigate(); // useNavigate 훅 초기화

    // 뒤로가기 버튼 클릭 시 실행될 함수
  const BackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <S.Container>

    <S.BackBtn onClick={BackClick}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
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
            <S.UrlBox   type="text"
            defaultValue="http://"
            onFocus={(e) => {
              if (e.target.value === "http://") e.target.select();
            }}>
            </S.UrlBox>
            <S.UpBtn>등록</S.UpBtn></S.Box1>

            <S.Box2>
        <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"  width="105.565px"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
            </S.Box2>

                        <S.Box2>
        <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
         alt="pic"  width="105.565px"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
            </S.Box2>

                        <S.Box2>
        <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
         alt="pic"  width="105.565px"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
         <img
          src={`${process.env.PUBLIC_URL}/images/pic.svg`}
          alt="pic"
        />
            </S.Box2>
          <S.XBtn1>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn1>

             <S.XBtn1>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn1>

             <S.XBtn2>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn2>

             <S.XBtn3>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn3>

             <S.XBtn4>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn4>
        
             <S.XBtn5>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn5>

             <S.XBtn6>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn6>
             <S.XBtn7>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn7>
             <S.XBtn8>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn8>
             <S.XBtn9>       <img
          src={`${process.env.PUBLIC_URL}/images/X.svg`}
          alt="X"
        /></S.XBtn9>
            

    </S.Container>

  );
};

export default StuTalModi;
