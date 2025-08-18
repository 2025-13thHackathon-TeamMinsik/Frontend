import React, { useState } from "react";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup5 = () => {
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
          src={`${process.env.PUBLIC_URL}/images/back3.svg`}
          alt="background3"
        />
      </S.Background3>
    </S.Container>
  );
};

export default StudentSignup5;
