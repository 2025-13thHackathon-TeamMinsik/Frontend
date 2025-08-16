import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  min-height: 100vh;
  background: #fff;
  outline: 1px solid black;
  padding-bottom: 190px;

  #header {
    display: flex;
    align-items: center; /* 세로 방향으로 중앙 정렬 */
    padding: 13px 30px; /* 위아래, 좌우 여백 */
    width: 100%;
    gap: 244px;
    margin-bottom: 10px;
  }
`;

export const BackBtn = styled.div`
  display: flex;
`;

export const MyMenu = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 21px;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 333px;
  height: 674px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
`;

export const FilterIcon = styled.div`
  display: flex;
  width: 39px;
  height: 23px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 3.893px;
  flex-shrink: 0;
  border-radius: 3.893px;
  border: 0.389px solid #695739;
  background: #695739;
  color: var(--100, #f6f6f6);
  right: 43px;
  margin-top: 10px;

  /* B12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextBox1 = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 34px;
  margin-bottom: 22px;
`;

export const Pic = styled.div`
  margin-right: 13px;

  #pic {
    border-radius: 8.611px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
  }
`;

export const StoreName = styled.div`
  color: #000;
  position: relative;
  bottom: 3px;
  /* B20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

export const LocationText = styled.div`
  color: var(--300, #a3a3a3);
  margin-bottom: 43px;

  /* R14 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;

export const InfoText = styled.div`
  /* R12 */
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.95;

  #infoText1 {
    color: var(--300, #a3a3a3);
  }

  #infoText2 {
    color: var(--, #000);
  }
`;

export const Line = styled.div`
  width: 273px;
  border-top: 1.5px solid #dfdfdf;
  margin: 0 auto;
  z-index: 10;
`;

export const Title = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  gap: 7px;

  /* B20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  #titleIcon {
    margin-top: 2px;
  }
`;

export const TextBox2 = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 34px;
`;

export const SubText = styled.div`
  margin-top: 15px;
  align-items: center;

  #subTextIcon {
    position: relative;
    top: 3.5px;
    margin-right: 7px;
  }

  #subText1 {
    color: var(--300, #a3a3a3);

    /* R14 */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 0%; /* 0 */
  }

  #subText2 {
    color: var(--, #000);

    /* R14 */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 0%;
  }
`;

export const PostContent1 = styled.div`
  width: 245px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  color: var(--, #000);
  padding: 13px 14.5px;
  margin-top: 18px;

  /* R14 */
  font-family: Pretendard;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.1px;
`;

export const Box2 = styled.div`
  display: flex;
  position: relative;
  top: 10px;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 333px;
  height: 370px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
`;

export const PostContent2 = styled.textarea`
  width: 244px;
  height: 147px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  border: none;
  outline: none;
  resize: none;
  color: var(--, #000);
  padding: 13px 14.5px;
  margin-top: 18px;
  margin-bottom: 17px;

  /* R14 */
  font-family: Pretendard;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.1px;
`;

export const Btn1 = styled.div`
  display: flex;
  padding: 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  color: #000;
  align-self: center;
  margin-bottom: 8px;

  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;

export const Btn2 = styled.div`
  display: flex;
  padding: 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #695739;
  color: #fff;

  /* B16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 0%; /* 0 */
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
