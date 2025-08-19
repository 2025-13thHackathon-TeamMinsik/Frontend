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
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar5.svg`}
          alt="bar5"
          width="393px"
          height="14px"
        />
      </S.Bar>

      <S.Title2>회원가입을 진행해주세요.</S.Title2>

      <S.TextBox>
        <S.Text>이름</S.Text>
        <S.Input placeholder="홍길동" />

        <S.Box1>
          <S.Text>생년월일</S.Text>
          <S.Text>성별</S.Text>
        </S.Box1>

        <S.Box2>
          <S.Input placeholder="20030519" />
          <S.Btn2>
            <span
              className={gender === "남" ? "selected" : ""}
              onClick={() => setGender("남")}
            >
              남자
            </span>
            <span>|</span>
            <span
              className={gender === "여" ? "selected" : ""}
              onClick={() => setGender("여")}
            >
              여자
            </span>
          </S.Btn2>
        </S.Box2>

        <S.Text>전화번호</S.Text>
        <S.Input placeholder="01012345678" />

        <S.Text>이메일</S.Text>
        <S.emailBox>
          <S.Input placeholder="happyshare1234" />
          <S.Text>@</S.Text>
          <S.emailInput placeholder="naver.com" />
        </S.emailBox>

        <S.Text>비밀번호</S.Text>
        <S.Input2 placeholder="8~12자 영문과 숫자 조합" />

        <S.Box3>
          <S.Text>주소</S.Text>
          <S.Text>숨기기</S.Text> {/* 글자는 그대로 유지 */}
        </S.Box3>

        <S.Box4>
          <S.Input2
            type={isHidden ? "password" : "text"} // 숨김 처리
            placeholder="성북구 화랑로 13길 28"
          />
          <S.Bbtn onClick={toggleHidden} style={{ cursor: "pointer" }}>
            <img
              src={
                isHidden
                  ? `${process.env.PUBLIC_URL}/images/click.svg`
                  : `${process.env.PUBLIC_URL}/images/unclick.svg`
              }
              alt="toggle"
            />
          </S.Bbtn>
        </S.Box4>
      </S.TextBox>

      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>
    </S.Container>
  );
};

export default StudentSignup5;
