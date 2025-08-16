import React from "react";
import * as S from "../styles/StyledSplash4";

const Splash4 = () => {
  return (
    <S.Container>
      <S.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/background1.svg`}
          alt="background1"
          width="auto"
          height="357.5px"
        />
      </S.Background>
      <S.Title>역할을 선택해주세요.</S.Title>
      <S.Btn>대학생 (도우미)</S.Btn>
      <S.Btn>소상공인 (의뢰인)</S.Btn>
    </S.Container>
  );
};

export default Splash4;
