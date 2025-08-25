import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background-color: #695739;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 332px;
`;

export const Login = styled.div`
  color: #fff;
  text-align: center;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 0.5px solid white;
  padding: 10px;
  width: 80px;

  margin-top: 607px;
`;
export const Signup = styled.div`
  color: #fff;
  text-align: center;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-bottom: 0.5px solid white;
  padding: 10px;
  width: 80px;

  margin-top: 26px;
`;
