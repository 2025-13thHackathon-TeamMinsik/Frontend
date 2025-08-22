import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 250vh;
  background: #fff;
  outline: 1px solid black;

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
margin-top: 50px;
margin-left: 30px;
`;

export const Box1 = styled.div`
width: 333px;
height: 190vh;
flex-shrink: 0;
border-radius: 5.887px;
border: 1.177px solid #DFDFDF;
background: #FFF;
box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);
margin-top: 10px;
margin-left: 30px;
`;

export const DelBtn = styled.div`
display: flex;
width: 145px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
border: 1px solid #695739;
background: #FFF;

color: #695739;

/* B16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;

`;

export const ModiBtn = styled.div`

display: flex;
width: 145px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
border: 1px solid #695739;
background: #695739;

color: #FFF;

/* B16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;

`;

export const Up = styled.div`
display: flex;
width: 273px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 10px;
border: 1px solid  #695739;
background: #695739;

color: #FFF;

/* B16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-left: 24px;
`;

export const Box2 = styled.div`
display: flex; 
flex-direction: row;

margin-bottom: 300px;
margin-left: 26px;
margin-top: 20px;
gap: 10px;
`;


export const Icon= styled.div`
margin-top: 5px;
`;



export const GrayIcon= styled.div`
margin-top: 1px;
margin-right: 7px;
`;

export const Box3 = styled.div`
display: flex; 
flex-direction: row;
margin-top: 26px;
margin-left: 30px;
`;

export const Text = styled.div`
color: #000;

/* B20 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 7.64px;
`;


export const Day = styled.div`
color: #A3A3A3;

/* R14 */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;

margin-top: 5px;
margin-left: 130px;
`;



export const Box4 = styled.div`
display: flex; 
flex-direction: row;

margin-left: 30px;
margin-top: 21px;

`;

export const GrayText = styled.div`
color: #A3A3A3;

/* R14 */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
`;

export const TimeInput = styled.input`
display: inline-flex;
padding: 10px 111px 10px 12px;
align-items: center;
border-radius: 10px;
border: 1px solid #695739;


margin-left: 30px;
margin-top: 9px;

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: #695739; /* 눌러도 똑같이 */
  }
`;


export const TimeInput2 = styled.input`
display: inline-flex;
padding: 10px 111px 10px 12px;
align-items: center;
border-radius: 10px;
border: 1px solid #695739;


margin-left: 30px;
margin-top: 9px;

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: #695739; /* 눌러도 똑같이 */
  }
`;

export const TextBox = styled.textarea`
width: 273px;
height: 294px;
flex-shrink: 0;

border-radius: 5px;
border: none;
background: #F6F6F6;

color: #A3A3A3;

/* R14 */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
padding: 7px;

  &:focus {
    outline: none;
    box-shadow: none;
    resize: none;

    color:  #000;
  }

  margin-left: 30px;
  margin-top: 35px;
`;