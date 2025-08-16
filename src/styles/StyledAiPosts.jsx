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
  right: 8px;
  display: flex;
  gap: 3px;
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
