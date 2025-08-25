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
  right: 0px;
  top: 290px;
`;

export const Background2 = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  top: -60px;
`;

export const Background3 = styled.div`
  position: absolute;
  display: flex;
  right: 92px;
  top: 425.61px;
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

export const CoinIcon = styled.div`
  position: absolute;
  top: 275px;
  left: 48px;
`;
export const Title = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 48px;
  margin-top: 331px;
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
<<<<<<< HEAD
border-radius: 10px;
border: 1px solid #695739;
background: #FFF;
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

export const UploadResult = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
export const CoinBtn = styled.button`
  position: fixed; /* 위치 조정 */
  bottom: 20px;
  right: 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
`;

