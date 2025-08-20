import React from "react";
import axios from "axios";
import * as S from "../styles/StyledSplash3";

const Splash3 = () => {
  return (
    <S.Container>
      <S.Background></S.Background>

      <S.Login>로그인</S.Login>
      <S.Signup>회원가입</S.Signup>
    </S.Container>
  );
};

export default Splash3;
