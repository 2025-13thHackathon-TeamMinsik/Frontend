import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledSplash1";

const Splash1 = () => {
  const navigate = useNavigate();

  const goNext = () => {
    navigate(`/Splash2`);
  };

  return (
    <S.Container onClick={goNext}>
      <S.Background></S.Background>

      <S.Title>작은 재능 하나.</S.Title>
      <S.Text>지금 텅 빈 곳간에 당신의 재능을 담아보세요.</S.Text>
    </S.Container>
  );
};

export default Splash1;
