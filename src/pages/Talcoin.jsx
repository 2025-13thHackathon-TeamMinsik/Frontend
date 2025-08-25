import React, { useState, useEffect } from "react";
import * as S from "../styles/StyledTalCoin";

const TalCoin = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [coinBalance, setCoinBalance] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(1000); // 👉 선택 금액 상태

  const [showQBox, setShowQBox] = useState(false);
  const [redeemHistory, setRedeemHistory] = useState([]); // 발급 내역

const token = localStorage.getItem("accessToken");
  const fetchBalance = () => {
    fetch("/wallets/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("잔액 조회 실패");
        return res.json();
      })
      .then((data) => {
        setCoinBalance(data.coin_balance);
      })
      .catch((err) => {
        console.error(err);
      });
  };

   // 발급 내역 가져오기
  const fetchRedeemHistory = () => {
    fetch("/wallets/redeem/history/", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("발급 내역 조회 실패");
        return res.json();
      })
      .then((data) => setRedeemHistory(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBalance();
    fetchRedeemHistory();
  }, []);

  // 발급하기
  const handleIssue = () => {
    fetch("/wallets/redeem/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: selectedAmount,
      }),
    })
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) {
          alert(data.error || "발급 실패");
          return;
        }
        alert(`발급 성공!\n코드: ${data.code}\n금액: ${data.amount.toLocaleString()}원`);
        fetchBalance(); // ✅ 잔액 갱신
      })
      .catch((err) => {
        console.error(err);
        alert("발급 중 오류 발생");
      });
  };

  return (
    <S.Container>
      <S.Box3>
        <S.Name>참새코인</S.Name>
        <S.Q onClick={() => setShowQBox(!showQBox)}>
          <img src={`${process.env.PUBLIC_URL}/images/Q.svg`} alt="question" />
          {showQBox && (
            <S.QBox>성북사랑상품권으로 전환 가능합니다.</S.QBox>
          )}
        </S.Q>
        <S.Info2>1,000원 단위로 발급이 가능합니다.</S.Info2>
      </S.Box3>

      <S.Box4>
        <S.Coin2>
          <img
            src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
            alt="참새코인"
          />
        </S.Coin2>
        <S.Amount>{coinBalance.toLocaleString()} 원</S.Amount>

        {/* 발급하기 버튼 */}
        <S.Take onClick={handleIssue}>발급하기</S.Take>
      </S.Box4>

      {/* 금액 선택 */}
      <S.Box5>
        <S.Box1000 onClick={() => setSelectedAmount(1000)}>1,000원</S.Box1000>
        <S.Box5000 onClick={() => setSelectedAmount(5000)}>5,000원</S.Box5000>
        <S.Box10000 onClick={() => setSelectedAmount(10000)}>10,000원</S.Box10000>
      </S.Box5>

      <S.Box5>
        <S.Box20000 onClick={() => setSelectedAmount(20000)}>20,000원</S.Box20000>
        <S.Box50000 onClick={() => setSelectedAmount(50000)}>50,000원</S.Box50000>
        <S.BoxInput>직접 입력</S.BoxInput>
      </S.Box5>
    <S.Line></S.Line>
    
      {/* 발급 내역 리스트 */}
      {redeemHistory.map((item, idx) => (
        <S.Box6 key={idx}>
          <S.Day>{item.created_at.slice(0, 10)}</S.Day>
          <S.Box7>
            <S.Code>{item.code}</S.Code>
            <S.Amount2>{item.amount.toLocaleString()} 원</S.Amount2>
          </S.Box7>
        </S.Box6>
      ))}
    </S.Container>

    
  );
};

export default TalCoin;
