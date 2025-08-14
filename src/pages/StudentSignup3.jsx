import React from "react";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup3 = () => {
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar3.svg`}
          alt="bar3"
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
      <S.Title>전공은 무엇인가요?</S.Title>
      <S.SubText1>본전공</S.SubText1>
      <S.MajorInput type="text"></S.MajorInput>
      <S.SubText2>복수전공 (선택)</S.SubText2>
      <S.MajorInput type="text"></S.MajorInput>
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

export default StudentSignup3;
