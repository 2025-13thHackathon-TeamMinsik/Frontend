import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background: #fff;
  outline: 1px solid black;

  #CategoryBox {
    margin-top: 77px;
    margin-left: 40px;
  }

  #SchoolBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;

export const Bar = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: 290px;
`;

export const Background2 = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: -65px;
`;

export const Background3 = styled.div`
  position: absolute;
  display: flex;
  right: 92px;
  top: 425.61px;
`;

export const Title = styled.div`
  color: #000;
  text-align: left;
  margin-top: 201px;
  margin-left: 48px;
  z-index: 3;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
`;

export const SchoolInput = styled.div`
  position: relative;
  text-align: center;
  top: 70px;
  margin-bottom: 6px;
  padding: 12px;
  width: 273px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #fff;
  color: var(--, #000);
  z-index: 3;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #toggleIcon {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const MajorInput = styled.input`
  position: relative;
  text-align: center;
  top: 70px;
  margin-bottom: 6px;
  padding: 12px;
  width: 273px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #fff;
  color: var(--, #000);
  z-index: 3;
  outline: none;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterToggle = styled.div`
  display: flex;
  margin-top: 63px;
  flex-direction: column;
  gap: 14px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #fff;
  color: #000;
  padding: 10px 67px 20px 83px; /* 좌우 패딩 동일하게 */
  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Btn = styled.div`
  position: relative;
  top: 35px;
  margin-bottom: 6px;
  padding: 12px;
  width: 273px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  background: #fff;
  color: ${({ $active }) => ($active ? "#000" : "#dfdfdf")};
  border-color: ${({ $active }) => ($active ? "#695739" : "#dfdfdf")};
  text-align: center;
  z-index: 3;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubTitle = styled.div`
  position: relative;
  color: #000;
  align-self: center;
  bottom: 13px;
  left: 40px;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%;
`;

export const Category = styled.div`
  position: relative;
  display: inline-flex;
  padding: 13px 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1.5px solid;
  background: #fff;
  cursor: pointer;
  text-align: center;
  border-color: ${(props) => (props.isSelected ? "#695739" : "#dfdfdf")};
  color: ${(props) => (props.isSelected ? " #000" : "#dfdfdf")};

  /* R20 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8px;
  margin-bottom: 6px;
`;

export const Toggle = styled.div`
  position: relative;
  margin: 0 auto;
  left: 120px;
  top: 26px;
  z-index: 4;
`;

export const BackBtn = styled.div`
  position: absolute;
  display: flex;
  margin-top: 680px;
  left: 48px;
`;

export const NextBtn = styled.div`
  position: absolute;
  display: flex;
  margin-top: 680px;
  right: 48px;
`;

export const TextBox = styled.div`
  margin-left: 54px;
  margin-top: 26px;
  display: flex;
  gap: 3px;
  flex-direction: column;
`;

export const Text = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  color: var(--, #000);

  /* R20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 6px;
  width: 139px;
`;

export const Input2 = styled.input`
  color: var(--, #000);

  /* R20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 6px;
  width: 204px;
`;

export const Title2 = styled.div`
  color: #000;
  text-align: left;
  margin-top: 160px;
  margin-left: 54px;
  z-index: 3;

  /* B24 */
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
`;
export const Box1 = styled.div`
  display: flex;
  gap: 93px;
`;

export const Box2 = styled.div`
  display: flex;
  gap: 25px;
`;

export const Btn2 = styled.div`
  color: var(--300, #a3a3a3);

  /* R20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    cursor: pointer;
    transition: all 0.2s;
  }

  .selected {
    /* 클릭 시 배경 검정 */
    color: black; /* 글자 흰색 */
  }

  display: flex;
  gap: 5px;
`;

export const email = styled.div``;

export const emailInput = styled.input`
  color: var(--, #000);

  /* R20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 6px;
  width: 92px;
`;

export const emailBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 175px;
`;

export const Box4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Bbtn = styled.div`
  position: absolute;
  margin-top: 20px;
  right: 100px;
`;

export const Title3 = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 201px;
  margin-left: 66px;
`;

export const Box5 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 57px;
  margin-left: 48px;
  margin-top: 58px;
`;

export const Box7 = styled.div`
  margin-top: 22px;
  margin-left: 48px;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Box8 = styled.div`
  display: flex;
  flex-direction: row;

  gap: 3px;
`;

export const Input3 = styled.input`
  /* 입력 텍스트 색상 */
  color: #000;

  /* 폰트 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* 플레이스홀더 색상 */
  &::placeholder {
    color: #a3a3a3; /* var(--300) 대신 직접 색상 지정 */
  }

  /* 테두리, 배경 등 필요 시 */
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 6px;
  width: 121px;
`;

export const Input4 = styled.input`
  /* 입력 텍스트 색상 */
  color: #000;

  /* 폰트 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* 플레이스홀더 색상 */
  &::placeholder {
    color: #a3a3a3; /* var(--300) 대신 직접 색상 지정 */
  }

  /* 테두리, 배경 등 필요 시 */
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 6px;
  width: 121px;
`;

export const In = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SelBox = styled.div`
  display: inline-flex; /* 한 줄로 나열 */
  white-space: nowrap; /* 줄바꿈 금지 */
  color: ${(props) => (props.isSelected ? "#000" : "#DFDFDF")};
  border: 1px solid ${(props) => (props.isSelected ? "#695739" : "#DFDFDF")};
  border-radius: 5px;
  background-color: #fff;
  padding: 8px 5px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-right: 10px;
`;

export const Box9 = styled.div`
  margin-left: 48px;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;

export const Box10 = styled.div`
  margin-left: 48px;
  display: flex;
  flex-direction: row;
  margin-top: 11px;
`;

export const Info1 = styled.div`
  color: var(--300, #a3a3a3);

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-top: 15px;
  margin-left: 3px;
`;

export const Info2 = styled.div`
  color: var(--300, #a3a3a3);

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-left: 3px;
`;

export const CamBox = styled.div`
  border-radius: 10px;
  border: 1px solid #695739;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 298px;
  height: 54px;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 48px;
  margin-top: 15px;
`;

export const Info3 = styled.div`
  color: var(--200, #dfdfdf);

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 11px;
  margin-left: 82px;
`;

export const BackBtn2 = styled.div`
  position: absolute;
  display: flex;
  margin-top: 800px;
  left: 48px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #695739;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;
