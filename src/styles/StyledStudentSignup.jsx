import { styled } from "styled-components";

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
  top: -60px;
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

export const BackBtn = styled.div`
  position: absolute;
  display: flex;
  margin-top: 680px;
  left: 48px;
`;

export const TextBox = styled.div`
margin-left: 54px;
margin-top: 26px;
display: flex;
gap: 8px;
flex-direction: column
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
color: #A3A3A3;

/* R20 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;

  background: transparent; /* 배경 투명 */
  border: none;           /* 테두리 없앰 */
  outline: none;   
  border-bottom:solid #695739 1px;
  padding-bottom: 7px;
  width: 139px;
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
color: var(--300, #A3A3A3);

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

  .selected { /* 클릭 시 배경 검정 */
    color: black;            /* 글자 흰색 */
  }

display: flex;
gap: 5px;
`;