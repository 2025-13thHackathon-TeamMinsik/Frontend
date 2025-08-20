import React, { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup1 = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 업종 저장

  const categories = [
    ["음식점·카페", "생활·서비스", "기타"],
    ["패션·잡화", "가전·디지털", "미용·뷰티"],
  ];

  const handleSelect = (category) => {
    setSelectedCategory(category);
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
      <S.Title>
        소상공인 자격 확인을 위해
        <br />
        소상공인확인서가 필요합니다.
      </S.Title>
      <S.Box6>
        <S.Box5>
          <S.In>사업자 등록번호</S.In>
          <S.Input3 placeholder="숫자 10자리" />
        </S.Box5>
        <S.Box5>
          <S.In>상호(사업체명)</S.In>
          <S.Input4 placeholder="달나라빵집" />
        </S.Box5>
      </S.Box6>

      <S.Box7>
        <S.In>업종</S.In>
        {categories.map((row, i) => (
          <S.Box8 key={i}>
            {row.map((cat) => (
              <S.SelBox
                key={cat}
                isSelected={selectedCategory === cat}
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </S.SelBox>
            ))}
          </S.Box8>
        ))}
      </S.Box7>
      <S.Box5>
        <S.Box9>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkbtn.svg`}
            alt="btn"
            width={17}
          />
          <S.Info1>
            해당 자료는 확인 후 즉시 폐기되며<br></br>
            다른 목적으로 절대 사용하지 않습니다.
          </S.Info1>
        </S.Box9>

        <S.Box10>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkbtn.svg`}
            alt="btn"
            width={17}
          />
          <S.Info2>
            제출 시 개인정보 수집 및 이용에 동의하신 것으로 간주됩니다.
          </S.Info2>
        </S.Box10>
      </S.Box5>
      <S.CamBox>
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/images/camera.svg`}
          alt="btn"
          width={32}
        />
      </S.CamBox>
      <S.Info3>발급일이 3개월 이내인 jpg파일을 제출해 주세요.</S.Info3>
    </S.Container>
  );
};

export default BusinessSignup1;
