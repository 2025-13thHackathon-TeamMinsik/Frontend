import React from "react";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup1 = () => {
  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar1.svg`}
          alt="bar1"
          width="393px"
          height="14px"
        />
      </S.Bar>
      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>
      <S.Title>어느 학교에 다니고 있나요?</S.Title>
      <S.SchoolInput type="text"></S.SchoolInput>
      <S.Toggle>
        <img
          src={`${process.env.PUBLIC_URL}/images/toggleDown.svg`}
          alt="toggleDown"
        />
      </S.Toggle>
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

export default StudentSignup1;
