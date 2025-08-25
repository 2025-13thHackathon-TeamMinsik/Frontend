import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: initialFormData } = location.state || {};
  console.log("첫번째 페이지", formData.대표자명);
  console.log("첫번째 페이지", formData);

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
      console.log("확인서 분석 성공", formData);

      navigate(`/BusinessSignup4`);
    } else {
      alert("2개를 선택해주세요.");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar3-1.svg`}
          alt="bar3-1"
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
        어떤 재능이나 기술이
        <br />
        필요하신가요?
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

export default BusinessSignup3;
