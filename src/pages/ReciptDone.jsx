import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledReciptDone";

const ReciptDone = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  return (
    <S.Container>
           <S.Background>
                <img
                  src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`}
                  alt="background2"
                  width="157px"
                  height="157px"
                />
              </S.Background>
              <S.Title>참새코인이 지급되었습니다.</S.Title>
    
            <S.Coin>10원</S.Coin>
    </S.Container>
  );
};

export default ReciptDone;
