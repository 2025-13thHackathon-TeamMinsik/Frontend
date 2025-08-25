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
  display: flex;
  margin-top: 80px;
  left: 30px;
`;

export const Name = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Q = styled.div`
  margin-top: 8px;
  margin-left: 3px;

  position: relative;
`;

export const Info2 = styled.div`
  color: #a3a3a3;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 37px;
`;

export const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 138px;
  margin-left: 30px;
`;

export const Box4 = styled.div`
  width: 333px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: #fff;
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
  margin-left: 30px;
  margin-top: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;
`;

export const Coin2 = styled.div`
  width: 43px;
  height: 43px;
  flex-shrink: 0;

  margin-left: 20px;
`;

export const Amount = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 20px;
`;

export const Take = styled.div`
  display: flex;
  width: 124px;
  height: 39px;
  padding: 1px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #fff;

  /* B16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  border-radius: 5px;
  background: #695739;

  margin-left: 37px;
`;

export const Box5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-top: 10px;
  margin-left: 30px;
`;

export const Box1000 = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
export const Box5000 = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Box10000 = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Box20000 = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Box50000 = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const BoxInput = styled.div`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  width: 88px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #dfdfdf;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Line = styled.div`
  width: 333px;
  height: 0.5px;
  background: #dfdfdf;

  margin-top: 24px;
  margin-left: 30px;
`;

export const Name2 = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 30px;
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const Box6 = styled.div`
  width: 333px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: #fff;
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  margin-top: 10px;
  margin-left: 30px;
`;

export const Day = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  margin-top: 15px;
`;

export const Code = styled.div`
  color: #a3a3a3;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  marign-top: 5px;
`;

export const Amount2 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 62px;
  marign-top: 5px;
`;

export const Box7 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Day2 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  margin-top: 15px;
`;

export const Code2 = styled.div`
  color: #a3a3a3;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  marign-top: 5px;
`;

export const Amount3 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 102px;
  marign-top: 5px;
`;

export const Day3 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  margin-top: 15px;
`;

export const Code3 = styled.div`
  color: #a3a3a3;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 22px;
  marign-top: 5px;
`;

export const Amount4 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin-left: 62px;
  marign-top: 5px;
`;

export const QBox = styled.div`
  width: 224px;
  height: 37px;
  position: absolute;
  top: 50%;
  left: 22px; /* 버튼 옆에 배치 */
  transform: translateY(-130%);
  display: inline-flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  border-radius: 5px 5px 5px 0;
  background: #bfb3a0;

  /* B14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PrintBox = styled.div`
  width: 333px;
  height: 194px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: #fff;
  margin-top: 329px;
  margin-left: 30px;

  position: fixed; /* 화면 기준 */
  top: 50%;
  left: 50%;
  transform: translate(-58.5%, -215%); /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegiBox = styled.div`
  width: 333px;
  height: 194px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: #fff;

  margin-top: 329px;
  margin-left: 30px;

  position: fixed; /* 화면 기준 */
  top: 50%;
  left: 50%;
  transform: translate(-58.5%, -215%); /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); /* 검은색 투명 */
  display: flex;

  z-index: 999; /* 위로 올리기 */
`;

export const CoinIcon2 = styled.div`
  width: 29px;
  height: 29px;

  margin-top: 20px;
  margin-bottom: 7px;
  margin-right: 18px;
`;

export const Amount5 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

export const Info3 = styled.div`
  color: #a3a3a3;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Line2 = styled.div`
  background: #dfdfdf;
  width: 283px;
  height: 0.5px;
`;

export const Box8 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Yes = styled.div`
  color: #000;
  text-align: center;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
  margin-right: 60px;
`;

export const No = styled.div`
  color: #000;
  text-align: center;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 47px;
`;

export const CLine = styled.div`
  background: #dfdfdf;
  width: 0.5px;
  height: 47px;
`;

export const Code4 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

export const Info4 = styled.div`
  color: #a3a3a3;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Line3 = styled.div`
  background: #dfdfdf;
  width: 283px;
  height: 0.5px;
  margin-bottom: 10px;
`;

export const O = styled.div`
  margin-bottom: 10px;
`;

export const Box9 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Copy = styled.div`
  margin-top: 15px;
  margin-left: 5px;
`;
