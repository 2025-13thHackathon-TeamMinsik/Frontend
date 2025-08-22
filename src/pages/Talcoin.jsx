import React, { useState } from "react";
import * as S from "../styles/StyledTalCoin";
import { useEffect } from "react";

const TalCoin = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
    useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const [showQBox, setShowQBox] = useState(false);

  const [showTakeBox, setShowTakeBox ] = useState(false);

  const [showRegiBox, setShowRegiBox ] = useState(false);

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
     
     <S.BackBtn>  <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
        /></S.BackBtn>

   <S.Box3>
    <S.Name>참새코인</S.Name>   
    <S.Q onClick={() => setShowQBox(!showQBox)}>
        <img
          src={`${process.env.PUBLIC_URL}/images/Q.svg`}
          alt="question"
        />
        {showQBox && (
          <S.QBox>성북사랑상품권으로 전환 가능합니다.</S.QBox>
        )}
      </S.Q><S.Info2>1,000원 단위로 발급이 가능합니다.</S.Info2>
    </S.Box3>
          
    <S.Box4>
      <S.Coin2>
       <img
          src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
          alt="참새코인"/> </S.Coin2>
          <S.Amount>3,050 원</S.Amount>
             {/* 발급하기 버튼 */}
      <S.Take onClick={() => setShowTakeBox(true)}>발급하기</S.Take>
{/* 모달창 (조건부 렌더링) */}
{showTakeBox && (
  <S.Overlay onClick={() => setShowTakeBox(false)}>
    <S.PrintBox onClick={(e) => e.stopPropagation()}>
      <S.CoinIcon2>
        <img
          src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
          alt="참새코인"
        />
      </S.CoinIcon2>
      <S.Amount5>3,000 원</S.Amount5>
      <S.Info3>지역화폐 코드를 발급하시겠습니까?</S.Info3>
      <S.Line2 />
      <S.Box7>
        <S.Yes onClick={() => {
          setShowTakeBox(false);  // 발급 모달 닫기
          setShowRegiBox(true);   // 등록 모달 열기
        }}>예</S.Yes>
        <S.CLine></S.CLine>
        <S.No onClick={() => setShowTakeBox(false)}>아니오</S.No>
      </S.Box7>
    </S.PrintBox>
  </S.Overlay>
)}

{/* 등록 모달창 */}
{showRegiBox && (
  <S.Overlay onClick={() => setShowRegiBox(false)}>
    <S.RegiBox onClick={(e) => e.stopPropagation()}>
      <S.CoinIcon2>
        <img
          src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
          alt="참새코인"
        />
      </S.CoinIcon2>
     <S.Box9> <S.Code4>RGC-3Y5L-8K9P-Q2WA</S.Code4>
      <S.Copy
        onClick={() => {
          navigator.clipboard.writeText("RGC-3Y5L-8K9P-Q2WA");
          alert("코드가 복사되었습니다!");
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/copy.svg`}
          alt="복사"
        />
      </S.Copy>
        </S.Box9>
        <S.Info4>위 코드를 복사하여 상품권을 등록해주세요.</S.Info4>
      <S.Line3 />
      <S.Box7>
        <S.O onClick={() => setShowRegiBox(false)}>확인</S.O>
      </S.Box7>
    </S.RegiBox>
  </S.Overlay>
)}

     </S.Box4>

    <S.Box5><S.Box1000>1,000원</S.Box1000><S.Box5000>5,000원</S.Box5000><S.Box10000>10,000원</S.Box10000>
    </S.Box5>


    <S.Box5><S.Box20000>20,000원</S.Box20000><S.Box50000>50,000원</S.Box50000><S.BoxInput>직접 입력</S.BoxInput>
    </S.Box5>
    <S.Line></S.Line>
    <S.Name2>발급 내역</S.Name2>

    <S.Box6>
      <S.Day>2025.07.28</S.Day>
      <S.Box7><S.Code>RGC-3Y5L-8K9P-Q2WA</S.Code><S.Amount2>1,000 원</S.Amount2></S.Box7>
    </S.Box6>
    <S.Box6>
            <S.Day>날짜</S.Day>
      <S.Box7><S.Code3>RGC-3Y5L-8K9P-Q2WA</S.Code3><S.Amount4>1,000 원</S.Amount4></S.Box7></S.Box6>
    <S.Box6>
      <S.Day>2025.07.28</S.Day>
      <S.Box7><S.Code>RGC-3Y5L-8K9P-Q2WA</S.Code><S.Amount2>1,000 원</S.Amount2></S.Box7>
    </S.Box6>
    </S.Container>

    

  );
};

export default TalCoin;
