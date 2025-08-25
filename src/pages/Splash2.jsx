import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledSplash2";

const Splash2 = () => {
  const navigate = useNavigate();

  const goNext = () => {
    navigate(`/Splash3`);
  };

  return (
    <S.Container onClick={goNext}>
          <S.Background><img
               src={`${process.env.PUBLIC_URL}/images/S2.svg`}
               alt="스플래시2 배경"
             /></S.Background>
     

      <S.Title>우리 동네를 바꾸는 힘.</S.Title>
      <S.Text>
        차곡 차곡 쌓인 재능이
        <br />
        우리 동네를 따뜻하게 만들어줍니다.
      </S.Text>
    </S.Container>
  );
};

export default Splash2;
