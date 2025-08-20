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
  outline: 1px solid black;
  align-items: center;

  position: relative;
`;

export const Background = styled.div`
border-radius: 5.887px;
border: 1.177px solid var(--200, #DFDFDF);
background: var(--, #FFF);
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