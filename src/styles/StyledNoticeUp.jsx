import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 240vh;
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
height: 166vh;
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
   resize: none;

  &:focus {
    outline: none;
    box-shadow: none;
    resize: none;

    color:  #000;
  }

  margin-left: 30px;
  margin-top: 35px;
`;

export const Box5 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`

export const PicBox1 = styled.div`
    width: 132.75px;
    height: 177px;
    flex-shrink: 0;
    border: 3px solid #695739;
    background: #F6F6F6;

    margin-left: 30px;
    margin-top: 20px;
    position: releative
`;

export const PicBox2 = styled.div`
    width: 137.75px;
    height: 182px;
    flex-shrink: 0;
    background: #F6F6F6;

    position: relative;
      margin-top: 20px;
`;


export const PicAdd2 = styled.div`
    position: absolute;
    top: 67px;
    right: 57px;
`;

export const Small = styled.div`
color: #000;

/* R16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
  margin-top: 4px;
  margin-left: 3px;
`;

export const Box6= styled.div`
    display: flex;
    flex-direction: row;
  
`;

export const Pic= styled.div`
    position: absolute;
  left: 113px;
  top: 820px;
`;

export const choice1 = styled.div`
display: flex;
width: 120px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
border: 1px solid #695739;
background: #FFF;
color: #000;

/* R16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
margin-left: 20px;
margin-top: 20px;
`;

export const choice2 = styled.div`
color: #DFDFDF;

/* R16 */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;

display: flex;
width: 120px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 10px;
border: 1px solid  #DFDFDF;
background: var #FFF;

margin-left: 12px;
margin-top: 20px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 배경 흐림 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  width: 333px;
height: 194px;
flex-shrink: 0;
  background: #fff;
  border-radius: 5.887px;
border: 1.177px solid var #DFDFDF;
background:  #FFF;
flex-direction: column;      /* 세로 배치 */
  justify-content: center;     /* 세로축 가운데 */
  align-items: center;         /* 가로축 가운데 */
  text-align: center;          /* 텍스트 중앙 */
`;
export const Icon2 = styled.div`
margin-top: 30px;
margin-bottom: 10px;
`;

export const Info2 = styled.div`
color: #000;

/* B20 */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const Line = styled.div`
width: 283px;
height: 0.5px;
background: #DFDFDF;

margin-top: 30px;
margin-left: 25px;
`;


export const Ok2 = styled.div`
display: flex;
width: 55px;
padding: 5px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 10px;
margin-left: 125px;
`;