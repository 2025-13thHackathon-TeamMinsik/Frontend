import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  min-height: 100vh;
  background: #fff;
  padding-bottom: 190px;

  #header {
    display: flex;
    align-items: center; /* 세로 방향으로 중앙 정렬 */
    padding: 13px 30px; /* 위아래, 좌우 여백 */
    width: 100%;
  }
`;

export const BackBtn = styled.div`
  display: flex;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  /* B24 */
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Line = styled.div`
  width: 333px;
  border-top: 1.8px solid #695739;
  margin: 0 auto;
  z-index: 10;
  margin-bottom: 8px;
`;

export const Box1 = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  width: 333px;
  height: 101px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  #alertIcon {
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 13px;
    top: 50%;
    transform: translateY(-50%); /* 아이콘 높이 절반 만큼 위로 이동 */
  }
`;

export const TextBox = styled.div`
  padding: 14px 22px;
`;

export const AlertTime = styled.div`
  color: var(--300, #a3a3a3);
  margin-bottom: 7px;

  /* R14 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; /* 0 */
`;

export const AlertText = styled.div`
  color: var(--, #000);

  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  #bold {
    font-weight: 700;
  }
`;

export const Box2 = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  width: 333px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  #alertIcon {
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 13px;
    top: 50%;
    transform: translateY(-50%); /* 아이콘 높이 절반 만큼 위로 이동 */
  }
`;

export const Box3 = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10px;
  width: 333px;
  height: 138px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid var(--200, #dfdfdf);
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  #alertIcon {
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 13px;
    top: 50%;
    transform: translateY(-50%); /* 아이콘 높이 절반 만큼 위로 이동 */
  }
`;
