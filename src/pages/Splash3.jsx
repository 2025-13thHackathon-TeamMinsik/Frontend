import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledSplash3";

const Splash3 = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/Login`);
  };

  const goSignup = () => {
    navigate(`/Splash4`);
  };

  return (
    <S.Container>
         <S.Background><img
                     src={`${process.env.PUBLIC_URL}/images/S3.svg`}
                     alt="스플래시3 배경"
                   /></S.Background>

      <S.Login onClick={goLogin}>로그인</S.Login>
      <S.Signup onClick={goSignup}>회원가입</S.Signup>
    </S.Container>
  );
};

export default Splash3;
