import { styled } from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 155vh;
  background: #fff;
  align-items: center;
  background: url("/images/StampBackground.svg") no-repeat top left;
  background-size: 100% auto; /* 가로폭에 맞추고 세로는 비율 유지 */
  outline: 1px solid black;
  align-items: center;

  position: relative;
`;

export const Background = styled.div`
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
  width: 333px;
  height: 180vh;
  flex-shrink: 0;
  margin-top: 84px;
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

export const StampCircle1 = styled.div`
  position: absolute;
  top: 1056px;
  left: 62px;
`;

export const StampCircle2 = styled.div`
  position: absolute;
  top: 975px;
  left: 169.13px;
`;
export const StampCircle3 = styled.div`
  position: absolute;
  top: 875.12px;
  left: 265.12px;
`;
export const StampCircle4 = styled.div`
  position: absolute;
  top: 790px;
  left: 146px;
`;
export const StampCircle5 = styled.div`
  position: absolute;
  top: 689.2px;
  left: 82.2px;
`;
export const StampCircle6 = styled.div`
  position: absolute;
  top: 592px;
  left: 186px;
`;
export const StampCircle7 = styled.div`
  position: absolute;
  top: 473px;
  left: 278px;
`;
export const StampCircle8 = styled.div`
  position: absolute;
  top: 367px;
  left: 162px;
`;

export const StampCircle9 = styled.div`
  position: absolute;
  top: 272px;
  left: 65px;
`;

export const StampCircle10 = styled.div`
  position: absolute;
  top: 167px;
  left: 266px;
`;
export const CoinBtn = styled.div`
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 68px;
  background: #695739;
  color: #fff;
  text-align: center;

  /* B16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  position: absolute;
  left: 301px;
  top: 89px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinNum = styled.div`
  display: inline-flex;
  height: 49px;
  padding: 0px 17px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #695739;
  background: #fff;
  color: var(--, #000);
  text-align: center;

  position: absolute;
  top: 1156px;
  left: 288.5px;

  /* B14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
