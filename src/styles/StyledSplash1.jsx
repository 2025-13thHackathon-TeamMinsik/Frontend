import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background: #fff;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  left: 37px;
  top: 450px;
`;

export const Title = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 240px;
  margin-left: 60px;
`;

export const Text = styled.div`
  color: var(--400, #6c6c6c);

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-top: 19px;
  margin-left: 60px;
  display: block;
`;
