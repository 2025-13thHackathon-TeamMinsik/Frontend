import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background: #fff;

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
  right: 118px;
  top: 500px;
`;

export const Title = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 66px;
  margin-top: 331px;
`;

export const Coin = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 43.476px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 150px;
  margin-top: 320px;
`;
export const Info = styled.div`
  color: #a3a3a3;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 118px;
  margin-left: 48px;
`;

export const GreenCheck = styled.div``;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 48px;
  margin-top: 11px;
`;

export const CameraBox = styled.div`
  border-radius: 10px;
  border: 1px solid #695739;
  background: #fff;
  display: flex;
  width: 298px;
  height: 54px;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 38px;
  margin-top: 55px;
`;
