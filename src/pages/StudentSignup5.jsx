import React from "react";
import * as S from "../styles/StyledStudentSignup";
import { useState } from "react";

const StudentSignup5 = () => {
    const [gender, setGender] = useState("");
  return (
  
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar5.svg`}
          alt="bar5"
          width="393px"
          height="14px"
        />
      </S.Bar>
      <S.Title2>
        회원가입을 진행해주세요.
      </S.Title2>
      <S.TextBox>
        <S.Text>이름</S.Text>
        <S.Input placeholder="홍길동"></S.Input>
        <S.Box1><S.Text>생년월일</S.Text><S.Text>성별</S.Text></S.Box1>
        <S.Box2><S.Input placeholder="20030519"></S.Input>
        <S.Btn2>
  <span
    className={gender === "남" ? "selected" : ""}
    onClick={() => setGender("남")}
  >
    남자
  </span>
  <span>|</span>
  <span
    className={gender === "여" ? "selected" : ""}
    onClick={() => setGender("여")}
  >
    여자
  </span>
</S.Btn2>
        </S.Box2>
      </S.TextBox>
      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>

    </S.Container>
  );
};

export default StudentSignup5;
