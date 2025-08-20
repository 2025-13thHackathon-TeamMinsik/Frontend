import React from "react";
import * as S from "../styles/StyledLogin";

const Login = () => {
  return (
    <S.Container>

      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>

   
    <S.Text>이메일(아이디)</S.Text>
    <S.Box1>
    <S.TextInput1 placeholder="happyshare1234">
        </S.TextInput1><S.Text2>&nbsp;@&nbsp;</S.Text2>
    <S.TextInput2 placeholder="naver.com"></S.TextInput2></S.Box1>
    <S.Text3>비밀번호</S.Text3>
    <S.TextInput3 placeholder="8~12자, 영문과 숫자 조합"></S.TextInput3>

    <S.LoginBtn>로그인</S.LoginBtn>
    <S.LogErr>아이디 또는 비밀번호가 맞지 않습니다.</S.LogErr>
    </S.Container>
  );
};

export default Login;
