import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
 height: 300vh;
  background: #fff;
  outline: 1px solid black;

  position: relative;
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

export const Career = styled.div`
    color: #000;

    /* B24 */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin-left: 50px;
    margin-top: 94px;

`;

export const Box1 = styled.div`
width: 333px;
height: 55px;
flex-shrink: 0;
border-radius: 5.887px;
border: 1.177px solid #DFDFDF;
background: var(--, #FFF);
box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

margin-top: 14px;
margin-left: 30px;
`;

export const X = styled.div`
margin-top: 14px;
margin-left: 3px;
`;


export const Day = styled.div`
color: #000;

/* R16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;


margin-top: 13px;
margin-left: 7px;
`;


export const SeeBox = styled.div`
border-radius: 5px;
border: 0.664px solid #695739;
background: #FFF;
display: flex;
width: 115px;
height: 28px;
padding: 3.64px;
justify-content: center;
align-items: center;
gap: 6.64px;
flex-shrink: 0;

margin-top: 7.5px;
margin-left: 97px;
`;

export const RowBox = styled.div`
display: flex;
flex-direction: row;
`;

/* 모달 오버레이 (뒷배경 흐리게) */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/* 모달 내용 */
export const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

/* 모달 버튼 영역 */
export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  button:first-child {
    background: #695739;
    color: #fff;
  }

  button:last-child {
    background: #e0e0e0;
  }
`;

