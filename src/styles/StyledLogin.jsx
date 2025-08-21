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

export const Background2 = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: -60px;
`;

export const Text = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 54px;
  margin-top: 350px;
`;

export const Text2 = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Text3 = styled.div`
  color: #695739;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 54px;
  margin-top: 7px;
`;
export const TextInput1 = styled.input`
  color: #a3a3a3;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: solid 1px #695739;
  background: transparent; /* 배경 투명 */
  outline: none;
  width: 151px;
`;

export const TextInput2 = styled.input`
  color: #a3a3a3;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: solid 1px #695739;
  background: transparent; /* 배경 투명 */
  outline: none; /* 클릭 시 생기는 파란 테두리 제거 */
  width: 92px;
`;

export const TextInput3 = styled.input`
  color: #a3a3a3;

  /* R20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: solid 1px #695739;
  background: transparent; /* 배경 투명 */
  outline: none; /* 클릭 시 생기는 파란 테두리 제거 */
  width: 214px;
  margin-left: 54px;
`;
export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 54px;
`;

export const LoginBtn = styled.button`
  display: flex;
  width: 285px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 1px solid #695739;
  background: #695739;

  margin-left: 54px;
  margin-top: 64px;

  color: #fff;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LogErr = styled.div`
  color: #ffc0c0;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-left: 54px;
  margin-top: 10px;
`;
