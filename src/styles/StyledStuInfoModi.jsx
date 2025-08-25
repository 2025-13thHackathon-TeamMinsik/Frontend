import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  min-height: 100vh;
  background: #fff;
  padding-bottom: 190px;

  #header {
    display: flex;
    justify-content: right;
    padding: 13px 30px; /* 위아래, 좌우 여백 */
    gap: 17px;
    margin-bottom: 10px;
  }

  #alert {
    position: relative;
    top: 4.5px;
  }

  #filterBar {
    display: flex;
    align-items: center;
    gap: 190px;
    margin: 0 auto;
    padding: 25px 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 765px;
  z-index: 1;
`;

export const TabBar = styled.div`
  width: 393px;
  height: 143px;
  flex-shrink: 0;
  border-radius: 30px 30px 0 0;
  border-top: 1px solid var(--200, #dfdfdf);
  border-right: 1px solid var(--200, #dfdfdf);
  border-left: 1px solid var(--200, #dfdfdf);
  background: #fff;
  z-index: 100;
  position: fixed;
  bottom: 0;

  #tabBarIcon {
    display: flex;
    gap: 68px;
    justify-content: center;
    align-items: center;
    margin-top: 25.5px;
  }
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 44px;
  left: 30px;
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

export const SchoolInput = styled.input`
  position: relative;
  top: 70px;
  margin-bottom: 6px;
  padding: 12px;
  width: 273px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #695739;
  outline: none;
  background: #fff;
  color: var(--, #000);
  text-align: center;
  z-index: 3;

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

export const TextBox = styled.div`
  margin-left: 54px;
  margin-top: 26px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Text = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  color: var(--, #000);

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 7px;
  width: 139px;
`;

export const Input2 = styled.input`
  color: var(--, #000);

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 7px;
  width: 204px;
`;

export const Title2 = styled.div`
  color: #000;
  text-align: left;
  margin-top: 201px;
  margin-left: 54px;
  z-index: 3;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
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
  font-size: 20px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없앰 */
  outline: none;
  border-bottom: solid #695739 1px;
  padding-bottom: 7px;
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
  //세로
  display: flex;
  flex-direction: column;
`;

export const Bbtn = styled.div`
  margin-top: 20px;
`;

export const Pic = styled.div`
  margin-top: 20px;
  margin-left: 54px;
`;

export const PicT = styled.div`
  margin-top: 165px;
  margin-left: 54px;

  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Line = styled.div`
  width: 286px;
  height: 0.5px;
  background: #dfdfdf;
  margin-top: 35px;
  margin-left: 54px;
`;
export const Text3 = styled.div`
  color: #695739;

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%;
  margin-top: 15px;
`;

export const Box6 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box7 = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 54px;
  margin-top: 7px;
  gap: 7px;
`;
export const SelBox = styled.div`
  color: #dfdfdf;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  cursor: pointer;

  &.active {
    border: 1px solid #695739;
    color: black;
    font-weight: 600;
  }
`;

export const Text2 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 30px;
`;

export const Unclick = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 32px;
  margin-left: 5px;
`;

export const Info = styled.div`
  color: #a3a3a3;

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */

  margin-left: 54px;
  margin-top: 15px;
`;
