import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup4 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleSkill = (selectedSkill) => {
    //이미 선택된 스킬 취소
    if (formData.skill_1 === selectedSkill) {
      setFormData({ ...formData, skill_1: "" });
    } else if (formData.skill_2 === selectedSkill) {
      setFormData({ ...formData, skill_2: "" });
    }
    //1.스킬 3개 선택 막기 2.스킬 선택
    else if (formData.skill_1 && formData.skill_2) {
      return;
    } else if (!formData.skill_1) {
      setFormData({ ...formData, skill_1: selectedSkill });
    } else {
      setFormData({ ...formData, skill_2: selectedSkill });
    }
  };

  const goNext = () => {
    if (formData.skill_1 && formData.skill_2) {
      navigate(`/StudentSignup5`);
    } else {
      alert("2개를 선택해주세요.");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const categories = {
    디자인: "design",
    "영상/사진": "photo_video",
    공예: "craft",
    "코딩/개발": "coding",
    "외국어/번역": "language",
    "홍보/마케팅": "marketing",
    "문서 작성": "document",
    상담: "counsel",
    자원봉사: "volunteer",
  };

  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar4.svg`}
          alt="bar4"
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
      <S.Title>
        어떤 재능이나 기술을
        <br /> 가지고 있나요?
      </S.Title>
      <S.SubTitle>(최대 2개)</S.SubTitle>
      <div id="CategoryBox">
        {Object.keys(categories).map((category) => (
          <S.Category
            key={category}
            isSelected={
              formData.skill_1 === categories[category] ||
              formData.skill_2 === categories[category]
            }
            onClick={() => handleSkill(categories[category])} // 영문 값 저장
          >
            {category} {/* 화면에는 한글 표시 */}
          </S.Category>
        ))}
      </div>
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

export default StudentSignup4;
