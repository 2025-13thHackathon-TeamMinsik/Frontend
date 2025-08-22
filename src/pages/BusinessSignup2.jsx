import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {}; //이전 페이지에서 전달받은 formData

  const goBusinessSignup3 = () => {
    navigate(`/BusinessSignup3`, { state: { formData } });
  };

  return (
    <S.Container onClick={goBusinessSignup3}>
      <S.Title3>인증이 완료되었습니다.</S.Title3>

      <S.Background3>
        <img
          src={`${process.env.PUBLIC_URL}/images/back-check.svg`}
          alt="back-check"
        />
      </S.Background3>
    </S.Container>
  );
};

export default BusinessSignup2;
