import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const StudentSignup1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("동덕여자대학교");

  const sorts = [
    "고려대학교",
    "국민대학교",
    "한성대학교",
    "동덕여자대학교",
    "성신여자대학교",
    "서경대학교",
    "한국예술종합학교",
  ];

  //토글 아이콘
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelected = (sort) => {
    setSelected(sort); //sort선택하면
    setIsMenuOpen(false); //메뉴 닫기
  };

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
      <div id="SchoolBox">
        <S.SchoolInput onClick={handleToggle}>
          {selected}
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isMenuOpen ? "toggleUp.svg" : "toggleDown.svg"
            }`}
            alt="toggleIcon"
            width="16px"
            height="auto"
            id="toggleIcon"
          />
        </S.SchoolInput>
        {isMenuOpen && (
          <S.FilterToggle>
            {sorts.map((item) => (
              <div key={item} onClick={() => handleSelected(item)}>
                {item}
              </div>
            ))}
          </S.FilterToggle>
        )}
      </div>
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
