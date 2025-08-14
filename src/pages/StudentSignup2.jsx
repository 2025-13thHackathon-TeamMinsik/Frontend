import React from "react";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup2 = () => {
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar2.svg`}
          alt="bar2"
          width="393px"
          height="14px"
        />
      </S.Bar>
      <S.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/background1.svg`}
          alt="background1"
          width="auto"
          height="357.5px"
        />
      </S.Background>
      <S.Title>현재 몇 학년인가요?</S.Title>
      <S.Btn>1학년</S.Btn>
      <S.Btn>2학년</S.Btn>
      <S.Btn>3학년</S.Btn>
      <S.Btn>4학년</S.Btn>
      <S.Btn>휴학 중</S.Btn>
      <S.Btn>졸업 예정</S.Btn>
      <S.BackBtn>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
          width="19.5px"
          height="39px"
        />
      </S.BackBtn>
    </S.Container>
  );
};

export default StudentSignup2;
