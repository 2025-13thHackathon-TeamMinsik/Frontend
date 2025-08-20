import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledLogin";

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogin = async (event) => {
    //폼 제출 시 페이지 새로고침 막기
    event.preventDefault();
    try {
      const email = `${emailId}@${emailDomain}`;
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post("/accounts/login/", data);

      console.log("로그인 성공", response.data);

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refreshs);

      setIsError(false);

      const userRole = response.data.role;

      //대학생, 소상공인 역할 따라서 각자 ver 메인페이지(AI 공고)로 이동
      if (userRole === "student") {
        navigate("/StudentAiPosts");
      } else if (userRole === "owner") {
        navigate("BusinessAiPosts");
      }
    } catch (error) {
      console.log("로그인 실패", error);
      setIsError(true);
    }
  };

  return (
    <S.Container>
      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>
      <form onSubmit={handleLogin}>
        <S.Text>이메일(아이디)</S.Text>
        <S.Box1>
          <S.TextInput1
            placeholder="happyshare1234"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          ></S.TextInput1>
          <S.Text2>&nbsp;@&nbsp;</S.Text2>
          <S.TextInput2
            placeholder="naver.com"
            value={emailDomain}
            onChange={(e) => setEmailDomain(e.target.value)}
          ></S.TextInput2>
        </S.Box1>
        <S.Text3>비밀번호</S.Text3>
        <S.TextInput3
          placeholder="8~12자, 영문과 숫자 조합"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></S.TextInput3>

        <S.LoginBtn type="submit">로그인</S.LoginBtn>
        {isError && <S.LogErr>아이디 또는 비밀번호가 맞지 않습니다.</S.LogErr>}
      </form>
    </S.Container>
  );
};

export default Login;
