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

export const UrlBox = styled.input`
  border-radius: 4.89px;
  border: 0.978px solid var(--, #695739);
  width: 267px;
  height: 41.077px;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 13.692px;
  font-style: normal;
  font-weight: 400;
  outline: none;

  margin-top: 170px;
`;

export const UpBtn = styled.div`
  display: flex;
  width: 60px;
  height: 41px;
  padding: 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #695739;

  margin-top: 170px;

  color: #fff;

  /* B14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5px;
  margin-bottom: 20px;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  margin-top: 7px;
`;

export const XBtn1 = styled.div`
  position: absolute;
  top: 245px;
  left: 111px;
`;

export const XBtn2 = styled.div`
  position: absolute;
  top: 245px;
  left: 225px;
`;
export const XBtn3 = styled.div`
  position: absolute;
  top: 245px;
  left: 338px;
`;
export const XBtn4 = styled.div`
  position: absolute;
  top: 360px;
  left: 111px;
`;
export const XBtn5 = styled.div`
  position: absolute;
  top: 360px;
  left: 225px;
`;
export const XBtn6 = styled.div`
  position: absolute;
  top: 360px;
  left: 338px;
`;
export const XBtn7 = styled.div`
  position: absolute;
  top: 470px;
  left: 111px;
`;
export const XBtn8 = styled.div`
  position: absolute;
  top: 470px;
  left: 225px;
`;
export const XBtn9 = styled.div`
  position: absolute;
  top: 470px;
  left: 338px;
`;
