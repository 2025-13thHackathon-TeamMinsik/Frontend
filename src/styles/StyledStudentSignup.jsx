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
`;

export const Bar = styled.div`
  position: absolute;
  display: flex;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: 290px;
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
  line-height: normal;
`;

export const SchoolInput = styled.input`
  position: relative;
  top: 166px;
  margin-bottom: 6px;
  padding: 12px;
  width: 275px;
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
  width: 275px;
  justify-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #695739;
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

export const SubText = styled.div`
  color: #695739;
  margin-bottom: 5px; /* 입력창과의 간격을 줍니다 */

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MajorInput = styled.input`
  position: relative;
  top: 166px;
  margin-bottom: 6px;
  padding: 12px;
  width: 275px;
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

export const BackBtn = styled.div`
  position: absolute;
  display: flex;
  margin-top: 680px;
  left: 48px;
`;
