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
    justify-content: right;
    padding: 13px 30px; /* 위아래, 좌우 여백 */
    gap: 17px;
    margin-bottom: 10px;
  }

  #alert {
    position: relative;
    top: 4.5px;
  }

  #filterBar {
    display: flex;
    align-items: center;
    gap: 190px;
    margin: 0 auto;
    padding: 25px 0;
  }
`;

export const TitleBox = styled.div`
  position: relative;
  display: flex;
  margin-left: 30px;
  bottom: 10px;
`;

export const Title = styled.div`
  color: #000;

  /* R20 */
  font-family: Pretendard;
  font-size: 19.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75;

  #bold {
    font-size: 23.5px;
    font-weight: 700;
  }
`;

export const CategoryBox = styled.div`
  position: relative;
  margin-top: 43px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

export const Category = styled.div`
  display: inline-flex;
  padding: 0 11px;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 6.876px;
  border: 1.7px solid #695739;
  background: var(--, #fff);
  color: var(--, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const Illust = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
`;

export const SearchBox = styled.div`
  display: inline-flex;
  padding: 5px 9.958px 5px 15px;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  border: 2.5px solid #695739;
  background: var(--, #fff);
  margin-left: 30px;
  margin-right: 30px;
  height: 27px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 250px;
  position: relative;
  right: 2px;

  &::placeholder {
    color: var(--200, #dfdfdf);

    /* R14 */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 0%; /* 0 */
  }
`;

export const Line = styled.div`
  position: absolute;
  height: 23px;
  width: 0;
  right: 72px;
  border-right: 2px solid #695739;
`;

export const StudentAiCardBox = styled.div`
  margin-top: 18px;
`;

export const AiTitle = styled.div`
  position: relative;
  color: #000;
  display: flex;
  align-items: center;
  gap: 6.5px;
  margin-left: 30px;

  /* B24 */
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  #info {
    position: relative;
    top: 2px;
  }

  #location {
    position: relative;
    top: 2px;
    left: 132px;
  }
`;

export const InfoToggle = styled.div`
  position: absolute;
  right: 110px;
  bottom: 29px;
  display: flex;
  padding: 8.5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px 5px 5px 0;
  background: #bfb3a0;
  color: #fff;

  /* B14 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const CardList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 9.7px;
  overflow-x: auto;
  overflow-y: visible;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 30px;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  width: 254.298px;
  height: 164px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.7px solid #dfdfdf;
  background: #fff;
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  #heart {
    position: relative;
    bottom: 60px;
    left: 5px;
  }

  #textBox {
    margin-top: 25px;
    margin-left: 11.4px;
  }

  #cardImg {
    border-radius: 5.887px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
  }

  #cardInfo {
    border-radius: 5.887px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #d9d9d9;
  }
`;

export const CardImg = styled.div`
  margin-top: 27.08px;
  margin-bottom: 25.9px;
  margin-left: 18.84px;
  flex-shrink: 0;
`;

export const CardTitle = styled.div`
  color: #000;

  /* B16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal; /* 0 */
`;

export const LocationText = styled.div`
  color: var(--300, #a3a3a3);
  margin-top: 3px;
  letter-spacing: -0.1px;

  /* R12 */
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; /* 0 */
`;

export const CardText = styled.div`
  color: #000;
  margin-top: 20px;
  letter-spacing: -0.2px;

  /* R12 */
  font-family: Pretendard;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.17; /* 0 */
`;

export const Line2 = styled.div`
  width: 333px;
  border-top: 1.8px solid #dfdfdf;
  margin: 0 auto;
  z-index: 10;
`;

export const Filter1 = styled.div`
  color: var(--300, #a3a3a3);
  position: absolute;
  left: 30px;

  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #option1 {
    color: #000;
  }
`;

export const Filter2 = styled.div`
  color: var(--300, #a3a3a3);
  position: relative;
  left: 111px;
  min-width: 40px;
  justify-content: flex-end;
  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; /* 0 */

  #toggleIcon {
    position: absolute;
    top: 3px;
    margin-left: 8px;
    left: 40px;
  }
`;

export const CardList2 = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column; /* 세로 배치 */
  gap: 10px; /* 카드 사이 위아래 간격 */
`;

export const Background = styled.div`
  position: absolute;
  top: 765px;
  z-index: 1;
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

export const FilterIcon = styled.div`
  display: flex;
  width: 39px;
  height: 22px;
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
  bottom: 10px;

  /* B12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FilterIcon2 = styled.div`
  display: flex;
  width: 39px;
  height: 22px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 3.893px;
  flex-shrink: 0;
  border-radius: 3.893px;
  border: 1px solid #dfdfdf;
  background: #fff;
  color: var(--100, #dfdfdf);
  right: 10px;
  bottom: 10px;

  /* B12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FilterToggle = styled.div`
  position: absolute;
  padding: 14px 19px;
  right: 0;
  width: 64px;
  height: 104px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--200, #dfdfdf);
  background: #fff;
  z-index: 20;
  margin-right: 30px;
  margin-top: 165px;
  color: var(--300, #a3a3a3);

  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8; /* 0 */
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

  #modalLogoutText {
    display: flex;
    align-self: center;
    gap: 120px;
    margin-top: 60px;
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

export const ModalBtn1 = styled.div`
  color: #000;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;

export const ModalBtn2 = styled.div`
  color: #000;
  position: relative;
  left: 15px;

  /* R16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;

export const ModalLine2 = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  border-right: 1.5px solid #dfdfdf;
`;
