import React, { useState } from "react";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup2 = () => {
  const [gender, setGender] = useState("");
  const [isHidden, setIsHidden] = useState(false); // 주소 숨김 여부

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <S.Container>

      <S.Title3>회원가입이 완료되었습니다.</S.Title3>


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
