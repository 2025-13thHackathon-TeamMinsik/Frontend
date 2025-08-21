import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup2 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const grades = [
    "1학년",
    "2학년",
    "3학년",
    "4학년 이상",
    "휴학 중",
    "졸업 예정",
  ];

  //학년 선택하면 formData로 저장
  const handleGrade = (grade) => {
    setFormData({ ...formData, academic_status: grade });
  };

  const goNext = () => {
    if (formData.academic_status) {
      navigate(`/StudentSignup3`);
    } else {
      alert("학년을 선택해주세요.");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

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
      {grades.map((grade, idx) => (
        <S.Btn
          key={idx}
          $active={formData.academic_status === grade} //선택된 상태 전달
          onClick={() => handleGrade(grade)} //클릭 시 해당 버튼 선택
        >
          {grade}
        </S.Btn>
      ))}

      <S.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
          width="19.5px"
          height="39px"
        />
      </S.BackBtn>
      <S.NextBtn onClick={goNext}>
        <img
          src={`${process.env.PUBLIC_URL}/images/nextBtn.svg`}
          alt="nextBtn"
          width="19.5px"
          height="39px"
        />
      </S.NextBtn>
    </S.Container>
  );
};

export default StudentSignup2;
