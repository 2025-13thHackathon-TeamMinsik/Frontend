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
    align-items: center; /* 세로 방향으로 중앙 정렬 */
    padding: 13px 30px; /* 위아래, 좌우 여백 */
    width: 100%;
    gap: 244px;
    margin-bottom: 10px;
  }

  #row {
    display: flex;
    padding: 5px 47px;
    gap: 10px;
  }
`;

export const BackBtn = styled.div`
  display: flex;
`;

export const ApplicationsTitle = styled.div`
  color: #000;
  margin-top: 25px;
  margin-left: 17px;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ApplicationsTitle2 = styled.div`
  color: #000;
  margin-top: 18px;
  margin-left: 47px;
  margin-bottom: 8px;

  /* B24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  flex-direction: column; /* 세로로 배치 */
  margin: 0 auto;
  width: 333px;
  height: 444px;
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

export const DateText = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 30px;
  margin-top: 32px;

  color: var(--300, #a3a3a3);

  /* R14 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
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

export const OptionBox = styled.div`
  display: flex;
  align-self: center;
  padding: 19px 0px;
  gap: 11px;
  /* R16 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 0%; /* 0 */
`;

export const Option1 = styled.div`
  display: flex;
  width: 160px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: var(--, #fff);
  color: #695739;
`;

export const Option2 = styled.div`
  display: flex;
  width: 160px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid #695739;
  background: #695739;
  color: var(--200, #fff);
`;

export const Line = styled.div`
  width: 333px;
  border-top: 1.5px solid #dfdfdf;
  margin: 0 auto;
  z-index: 10;
`;

export const Profile = styled.div`
  position: relative;
  z-index: 10;
  width: 145px;
  height: 196px;
  flex-shrink: 0;
  border-radius: 5.887px;
  border: 1.177px solid #dfdfdf;
  background: #fff;
  box-shadow: 0 0 11.773px 0 rgba(0, 0, 0, 0.15);

  #profileHeart {
    position: absolute;
    right: 0;
    top: 12px;
    right: 10px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileImage = styled.div`
  position: relative;
  top: 16px;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  overflow: hidden;
`;

export const MyProfileImage = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileTitle = styled.div`
  color: #000;
  margin-top: 25px;
  margin-bottom: 15px;

  /* B14 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileLine = styled.div`
  position: relative;
  width: 108px;
  border-top: 1.5px solid #dfdfdf;
  margin-bottom: 4.5px;
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 0px 15px;
  margin-bottom: 0.5px;
`;

export const RatingText = styled.div`
  display: flex;
  align-items: center;
  color: var(--300, #a3a3a3);
  font-family: Pretendard;
  font-size: 9.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Star = styled.div`
  display: flex;
  gap: 4.5px;
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

export const NewText = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 35px;
  color: var(--300, #a3a3a3);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 0%; /* 0 */
`;
