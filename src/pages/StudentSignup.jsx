import React from "react";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup = () => {
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
      <S.Title>어느 학교에 다니고 있나요?</S.Title>
      <S.SchoolInput type="text"></S.SchoolInput>
    </S.Container>
  );
};

export default StudentSignup;
