import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup5 = () => {
  const navigate = useNavigate();
  const useLocationHook = useLocation();
  const { formData } = useLocationHook.state || { formData: null };

  // 화면 터치 시 메인 페이지로 이동하는 함수
  const handleNavigation = () => {
    if (formData?.role === "student") {
      navigate("/StudentAiPosts");
    } else if (formData?.role === "owner") {
      navigate("/BusinessAiPosts");
    }
  };

  return (
    <S.Container onClick={handleNavigation}>
      <S.Title3>회원가입이 완료되었습니다.</S.Title3>

      <S.Background3>
        <img
          src={`${process.env.PUBLIC_URL}/images/back3.svg`}
          alt="background3"
        />
      </S.Background3>
    </S.Container>
  );
};

export default StudentSignup5;
