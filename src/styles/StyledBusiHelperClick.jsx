import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 393px;
  height: 220vh;
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
  margin-top: 20px;
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
  display: flex;
  flex-direction: row;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  margin-top: 34px;
  margin-left: 30px;
`;
export const Name = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  margin-left: 13px;
  margin-top: 34px;
`;

export const AgeGen = styled.div`
  color: var(--, #000);

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  margin-left: 13px;
  margin-top: 5px;
`;

export const Selbox1 = styled.div`
  display: inline-flex;
  padding: 7.525px 10.033px;
  justify-content: center;
  align-items: center;
  gap: 5.017px;
  border-radius: 5.017px;
  border: 0.942px solid #695739;
  background: var(--, #fff);

  color: var(--, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 12.04px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 13px;
  margin-top: 5px;
`;
export const Selbox2 = styled.div`
  display: inline-flex;
  padding: 7.525px 10.033px;
  justify-content: center;
  align-items: center;
  gap: 5.017px;
  border-radius: 5.017px;
  border: 0.942px solid #695739;
  background: var(--, #fff);

  color: var(--, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 12.04px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 5px;
`;
export const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.5px;
  margin-bottom: 15px;
`;
export const Box4 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 13px;
`;

export const Text1 = styled.div`
  color: var(--300, #a3a3a3);

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
export const Text2 = styled.div`
  color: var(--, #000);

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Modi = styled.div`
  position: absolute;

  top: 100px;
  left: 315px;
`;

export const Line = styled.div`
  width: 273px;
  height: 0.5px;
  background: #dfdfdf;
  margin-left: 30px;
  margin-top: 15px;
`;

export const Union1 = styled.div`
  position: absolute;
  left: 60px;
  top: 687px;
`;

export const Union2 = styled.div`
  position: absolute;
  left: 60px;
  top: 908px;
`;

export const Box5 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-bottom: 5px;
`;

export const Box6 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
  margin-left: 57px;
`;

export const Title2 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 9.5px;
  margin-left: 57px;
`;

export const Modi2 = styled.div`
  position: absolute;

  top: 405px;
  left: 315px;
`;

export const Modi3 = styled.div`
  position: absolute;

  top: 630px;
  left: 315px;
`;

export const TextBox = styled.div`
  width: 273px;
  height: 147.594px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  margin-left: 20px;
  margin-top: 15px;
  padding: 10px;

  color: #000;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const TextBox2 = styled.div`
  width: 273px;
  height: 147.594px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  margin-left: 20px;
  margin-top: 15px;
  padding: 10px;

  color: #000;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  display: flex;
  flex-direction: column;
`;

export const Text3 = styled.div`
  color: #000;

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Text4 = styled.div`
  color: var(--300, #a3a3a3);

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 7px;
`;

export const Text5 = styled.div`
  color: #000;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  margin-top: 7px;
`;

export const Line2 = styled.div`
  width: 247px;
  height: 0.5px;
  background: #dfdfdf;

  margin-top: 7px;
`;

export const TextBox3 = styled.div`
  width: 273px;
  height: 147.594px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--100, #f6f6f6);
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Text6 = styled.div`
  color: #000;

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Text7 = styled.div`
  color: #a3a3a3;

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 7px;
`;

export const Text8 = styled.div`
  color: var(--, #000);

  /* R12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 7px;
`;

export const Line3 = styled.div`
  width: 273px;
  height: 0.5px;
  background: #dfdfdf;
  margin-top: 7px;
`;

export const Line4 = styled.div`
  width: 273px;
  height: 0.5px;
  background: #dfdfdf;
  margin-left: 30px;
  margin-top: 15px;
`;

export const Union3 = styled.div`
  position: absolute;
  left: 60px;
  top: 1340px;
`;

export const Title3 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
  margin-left: 57px;
`;

export const Modi4 = styled.div`
  position: absolute;

  top: 1055px;
  left: 315px;
`;

export const UrlInput = styled.input`
  border-radius: 5px;
  border: 1px solid #695739;
  width: 273px;
  height: 42px;
  flex-shrink: 0;
  margin-left: 30px;
  margin-top: 20px;

  color: #000;

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Box7 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.92px;
  margin-top: 10.17px;
  margin-left: 30px;
`;

export const Add = styled.div`
  position: absolute;
  left: 304px;
  top: 1215px;
`;

export const Icon = styled.div`
  margin-top: 22.5px;
  margin-left: 30px;
`;

export const Nick = styled.div`
  color: #000;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: -200px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Box9 = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: var(--, #fff);
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  width: 333px;
  height: 255px;
  flex-shrink: 0;
`;

export const Box10 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 18px;
  margin-left: 5px;
`;

export const ContentBox = styled.textarea`
  color: var(--, #000);

  /* R14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  width: 273px;
  height: 173px;
  flex-shrink: 0;
  border-radius: 5px;
  border: none;
  background: #f6f6f6;
  resize: none;
  outline: none;
  margin-left: 30px;
  margin-top: 10px;
`;

export const Line5 = styled.div`
  width: 333px;
  height: 0.5px;
  background: #dfdfdf;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Ok = styled.div`
  display: flex;
  width: 253px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #695739;

  color: #fff;

  /* B16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  margin-left: 30px;
  margin-top: 20px;
`;

export const BackBtn = styled.div`
  margin-left: -325px;
  margin-top: 20px;
`;

// 모달 배경
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달 박스
export const ModalBox = styled.div`
  background: #fff;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 420px;
  width: 333px;
  height: 194px;
  flex-shrink: 0;
`;

// 모달 아이콘
export const Icon2 = styled.div`
  margin-bottom: 10px;
  margin-top: 35px;
`;

// 모달 내용
export const Info2 = styled.div`
  color: #000;

  /* B20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 모달 확인 버튼
export const Ok2 = styled.div`
  display: flex;
  width: 55px;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 7px;
  margin-left: 127px;
`;

export const Line6 = styled.div`
  width: 283px;
  height: 0.5px;
  background: #dfdfdf;
  margin-left: 25px;
  margin-top: 35px;
`;
