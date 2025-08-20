import React, { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledStuInfoModi";

const StuInfoModi = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  const [isHidden, setIsHidden] = useState(false); // 주소 숨김 여부
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const [gender, setGender] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  // ✅ 선택된 재능 관리 (최대 2개)
  const [selectedTalents, setSelectedTalents] = useState([]);

  const handleTalentClick = (talent) => {
    if (selectedTalents.includes(talent)) {
      // 이미 선택된 경우 → 해제
      setSelectedTalents(selectedTalents.filter((t) => t !== talent));
    } else {
      // 최대 2개까지만 선택 허용
      if (selectedTalents.length < 2) {
        setSelectedTalents([...selectedTalents, talent]);
      }
    }
  };

  return (
    <S.Container>
      <S.Background></S.Background>

      <S.BackBtn>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
        />
      </S.BackBtn>

      <S.TabBar>
        <div id="tabBarIcon">
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar1" ? "tabBar1_on.svg" : "tabBar1_off.svg"
            }`}
            alt="tabBar1"
            width="41px"
            height="60px"
            onClick={() => handleTabBar("tabBar1")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar2" ? "tabBar2_on.svg" : "tabBar2_off.svg"
            }`}
            alt="tabBar2"
            width="66px"
            height="59px"
            onClick={() => handleTabBar("tabBar2")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar3" ? "tabBar3_on.svg" : "tabBar3_off.svg"
            }`}
            alt="tabBar3"
            width="32px"
            height="58px"
            onClick={() => handleTabBar("tabBar3")}
          />
        </div>
      </S.TabBar>

      <S.PicT>본인 사진</S.PicT>
      <S.Pic>
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.svg`}
          alt="profile"
        />
      </S.Pic>

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
          <S.Text>숨기기</S.Text>
        </S.Box3>

        <S.Box4>
          <S.Input2
            type={isHidden ? "password" : "text"}
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

      <S.Line></S.Line>

      <S.TextBox>
        <S.Text>학교</S.Text>
        <S.Input placeholder="동덕여자대학교" />
        <S.Text>전공</S.Text>
        <S.Input placeholder="미디어디자인" />
        <S.Text>학년</S.Text>
        <S.Input placeholder="휴학 중" />
        <S.Box6>
          <S.Text>재능&nbsp;</S.Text>
          <S.Text3>(최대 2)</S.Text3>
        </S.Box6>
      </S.TextBox>

      {/* ✅ 선택 가능한 재능 박스 */}
      <S.Box7>
        <S.SelBox
          onClick={() => handleTalentClick("디자인")}
          className={selectedTalents.includes("디자인") ? "active" : ""}
        >
          디자인
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("영상/사진")}
          className={selectedTalents.includes("영상/사진") ? "active" : ""}
        >
          영상/사진
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("문서 작성")}
          className={selectedTalents.includes("문서 작성") ? "active" : ""}
        >
          문서 작성
        </S.SelBox>
      </S.Box7>

      <S.Box7>
        <S.SelBox
          onClick={() => handleTalentClick("코딩/개발")}
          className={selectedTalents.includes("코딩/개발") ? "active" : ""}
        >
          코딩/개발
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("외국어/번역")}
          className={selectedTalents.includes("외국어/번역") ? "active" : ""}
        >
          외국어/번역
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("상담")}
          className={selectedTalents.includes("상담") ? "active" : ""}
        >
          상담
        </S.SelBox>
      </S.Box7>

      <S.Box7>
        <S.SelBox
          onClick={() => handleTalentClick("홍보/마케팅")}
          className={selectedTalents.includes("홍보/마케팅") ? "active" : ""}
        >
          홍보/마케팅
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("자원봉사")}
          className={selectedTalents.includes("자원봉사") ? "active" : ""}
        >
          자원봉사
        </S.SelBox>
        <S.SelBox
          onClick={() => handleTalentClick("공예")}
          className={selectedTalents.includes("공예") ? "active" : ""}
        >
          공예
        </S.SelBox>
      </S.Box7>
      <S.Line></S.Line>
      <S.Box7>
        <S.Text2>추천 도우미 노출 여부</S.Text2>
        <S.Unclick onClick={() => setIsClicked(!isClicked)}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isClicked ? "click.svg" : "unclick.svg"
            }`}
            alt={isClicked ? "click" : "unclick"}
          />
        </S.Unclick>
      </S.Box7>
      <S.Info>AI가 선정한 추천 도우미 표시 여부를 설정합니다.</S.Info>
    </S.Container>
  );
};

export default StuInfoModi;
