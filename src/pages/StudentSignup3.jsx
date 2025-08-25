import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup3 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  //입력창 값 변경될 때마다 formData 업데이트
  const handleMajor = (e) => {
    setFormData({ ...formData, major: e.target.value });
  };

  const goNext = () => {
    if (!formData.major) {
      alert("전공을 입력해주세요.");
    } else {
      navigate(`/StudentSignup4`);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

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
      <S.MajorInput
        type="text"
        value={formData.major}
        onChange={handleMajor}
      ></S.MajorInput>
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

export default StudentSignup3;
