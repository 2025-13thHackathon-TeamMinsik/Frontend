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
  width: 280px;
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
