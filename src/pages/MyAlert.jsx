import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMyAlert";

const MyAlert = () => {
  const navigate = useNavigate();

  //뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  return (
    <M.Container>
      <div id="header">
        <M.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
            onClick={goBack}
          />
        </M.BackBtn>
        <M.Title>알림</M.Title>
      </div>
      <M.Line></M.Line>
      <M.Box1>
        <M.TextBox>
          <M.AlertTime>10분 전</M.AlertTime>
          <M.AlertText>
            <span id="bold">업체명 </span>작업을 마치셨나요?
            <br />
            후기를 작성해보세요.
          </M.AlertText>
        </M.TextBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
          alt="titleIcon"
          width="15.272px"
          height="15px"
          id="alertIcon"
        />
      </M.Box1>
      <M.Box2>
        <M.TextBox>
          <M.AlertTime>1시간 전</M.AlertTime>
          <M.AlertText>
            <span id="bold">업체명 </span>에서 재능을 요청했어요!
          </M.AlertText>
        </M.TextBox>
        <img
          src={`${process.env.PUBLIC_URL}/images/titleIcon.svg`}
          alt="titleIcon"
          width="15.272px"
          height="15px"
          id="alertIcon"
        />
      </M.Box2>
    </M.Container>
  );
};

export default MyAlert;
