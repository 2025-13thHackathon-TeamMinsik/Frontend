import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup3 = () => {
  const categories = [
    "디자인",
    "영상/사진",
    "공예",
    "코딩/개발",
    "외국어/번역",
    "홍보/마케팅",
    "문서 작성",
    "상담",
    "자원봉사",
  ];

  const [selected, setSelected] = useState(Array(9).fill(false));

  const toggleCategory = (idx) => {
    const newSelected = [...selected];
    newSelected[idx] = !newSelected[idx]; //false -> true, true -> false
    setSelected(newSelected);
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
        {categories.map((category, idx) => (
          <S.Category
            key={category}
            isSelected={selected[idx]}
            onClick={() => toggleCategory(idx)}
          >
            {category}
          </S.Category>
        ))}
      </div>
    </S.Container>
  );
};

export default BusinessSignup3;
