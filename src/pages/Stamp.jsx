import React, { useState, useEffect } from "react";
import * as S from "../styles/StyledStamp";
import { useNavigate, useLocation } from "react-router-dom";

const Stamp = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => setTabBar(menu);

  const navigate = useNavigate();

  const goTalCoin = () => {
    navigate("/TalCoin");
  };
  const location = useLocation();

  // 완료된 스탬프 번호 저장
  const [completedStamps, setCompletedStamps] = useState([]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);

    // ReciptPhoto에서 돌아온 후 완료 스탬프 추가
    if (location.state?.completedStamp) {
      setCompletedStamps((prev) => {
        if (!prev.includes(location.state.completedStamp)) {
          return [...prev, location.state.completedStamp];
        }
        return prev;
      });
    }
  }, [location.state]);

  const stamps = Array.from({ length: 10 }, (_, i) => 10 - i); // [10,9,...,1]

  const handleStampClick = (stampNum) => {
    navigate("/ReciptPhoto", { state: { stampNum } });
  };

  return (
    <S.Container>
      {/* 탭바 */}
      <S.TabBar>
        <div id="tabBarIcon">
          {["tabBar1", "tabBar2", "tabBar3"].map((tab, idx) => (
            <img
              key={tab}
              src={`${process.env.PUBLIC_URL}/images/${
                tabBar === tab ? `${tab}_on.svg` : `${tab}_off.svg`
              }`}
              alt={tab}
              width={idx === 1 ? "66px" : idx === 2 ? "32px" : "41px"}
              height={idx === 1 ? "59px" : idx === 2 ? "58px" : "60px"}
              onClick={() => handleTabBar(tab)}
            />
          ))}
        </div>
      </S.TabBar>

      {/* 스탬프 */}
      {stamps.map((num) => {
        const StampComponent = S[`StampCircle${num}`];
        const isDone = completedStamps.includes(num); // 완료 여부
        return (
          <StampComponent key={num} onClick={() => handleStampClick(num)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${isDone ? `done${num}` : `Circle${num}`}.svg`}
              alt={`Circle${num}`}
            />
          </StampComponent>
        );
      })}

      {/* 코인 버튼 & 개수 */}
      <S.CoinBtn onClick={goTalCoin}>코인</S.CoinBtn>
      <S.CoinNum>0/10</S.CoinNum>
    </S.Container>
  );
};

export default Stamp;
