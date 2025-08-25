import { styled } from "styled-components";

export const BackBtn = styled.div`
  position: absolute;
  top: 44px;
  left: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 180vh;
  background: #fff;
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

export const Box1 = styled.div`
  width: 333px;
  height: 180.032px;
  flex-shrink: 0;
  border-radius: 6.099px;
  background: #f6f6f6;
  margin-top: 137.32px;
`;

export const Input1 = styled.textarea`
  width: 301.286px;
  height: 82.815px;
  flex-shrink: 0;

  color: #000;
  font-family: Pretendard;
  font-size: 14.637px;
  font-style: normal;
  font-weight: 400;
  resize: none;
  border: none;
  outline: none;
  background: #f6f6f6;

  margin-left: 15.86px;
  margin-top: 6px;
`;

export const Box2 = styled.div`
  width: 333px;
  height: 180.032px;
  flex-shrink: 0;
  border-radius: 6.099px;
  background: #f6f6f6;

  margin-top: 12px;
`;

export const Input2 = styled.textarea`
  width: 301.286px;
  height: 82.815px;
  flex-shrink: 0;

  color: #000;
  font-family: Pretendard;
  font-size: 14.637px;
  font-style: normal;
  font-weight: 400;
  resize: none;
  border: none;
  outline: none;
  background: #f6f6f6;

  margin-left: 15.86px;
  margin-top: 6px;
`;

export const Name = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 17.077px;
  font-style: normal;
  font-weight: 400;

  margin-left: 15.86px;
  margin-top: 15.6px;
`;
export const Time = styled.div`
  color: var(--300, #a3a3a3);
  font-family: Pretendard;
  font-size: 14.637px;
  font-style: normal;
  font-weight: 400;

  margin-left: 15.86px;
  margin-top: 3px;
`;
export const Line = styled.div`
  width: 301.286px;
  height: 0.5px;
  background: #dfdfdf;

  margin-left: 15.86px;
  margin-top: 5px;
`;
