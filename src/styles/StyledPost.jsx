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
  position: relative;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 333px;
  height: 674px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
  z-index: 3;
`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-items: center;
  justify-content: center;
  border-radius: 5.887px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 10;
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
  right: 10px;
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
  z-index: 8;
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
  position: relative;
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
  z-index: 5;
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
  z-index: 5;

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

export const StudentReviewBox = styled.div`
  display: flex;
  position: relative;
  top: 10px;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 333px;
  height: 428px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
`;

export const StarReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  padding: 28px 0px;
`;

export const StarImage = styled.img`
  width: 30px;
  height: auto;
`;

export const ReviewContent = styled.textarea`
  width: 244px;
  height: 76.286px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  border: none;
  outline: none;
  resize: none;
  color: var(--, #000);
  padding: 13px 14.5px;
  margin-top: px;
  margin-bottom: 15px;

  /* R14 */
  font-family: Pretendard;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.1px;

  &::placeholder {
    color: var(--300, #a3a3a3);
  }
`;

export const SubTitle = styled.div`
  color: #000;
  position: relative;
  top: 2px;
  right: 4px;

  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%;
`;

export const PayOptionBox = styled.div`
  display: flex;
  padding: 19px 0px;
  gap: 11px;
  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;

export const PayOption1 = styled.div`
  display: flex;
  width: 131px;
  padding: 18px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: var(--, #fff);
  color: var(--, #000);
`;

export const PayOption2 = styled.div`
  display: flex;
  width: 131px;
  padding: 18px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  background: var(--, #fff);
  color: var(--200, #dfdfdf);
`;

export const ReviewSubmit = styled.div`
  display: flex;
  margin: 0 auto;
  width: 273px;
  height: 49.679px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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

export const ModalOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-items: center;
  justify-content: center;
  width: 393px;
  height: 1364px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 150;
`;

export const ApplyModal = styled.div`
  display: flex;
  position: relative;
  flex-items: center;
  justify-content: center;
  margin-top: 242px;
  width: 333px;
  height: 194px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: #fff;

  #modalIcon {
    position: absolute;
    top: 35px;
  }

  #modalTextBox {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const ModalTitle = styled.div`
  color: #000;
  posiiton: relative;
  margin-top: 75px;
  align-self: center;

  /* B20 */
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 283px;
  border-top: 1.5px solid #dfdfdf;
  bottom: 61px;
`;

export const ModalBtn = styled.div`
  position: absolute;
  bottom: 31px;
  left: 50%;
  transform: translateX(-50%);
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;
