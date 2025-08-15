import React from "react";
import * as P from "../styles/StyledPost";

const StudentPost = () => {
  return (
    <P.Container>
      <div id="header">
        <P.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
          />
        </P.BackBtn>
        <P.MyMenu>
          <img
            src={`${process.env.PUBLIC_URL}/images/alert.svg`}
            alt="alert"
            width="25px"
            height="35px"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/user.svg`}
            alt="user"
            width="25px"
            id="logoutIcon"
          />
        </P.MyMenu>
      </div>
      <P.Box1>
        <P.FilterIcon>봉사</P.FilterIcon>
        <P.TextBox1>
          <P.Pic>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="pic"
              width="124px"
              height="165.333px"
              id="pic"
            />
          </P.Pic>
          <div id="info-section">
            <P.StoreName>짱베이커리</P.StoreName>
            <P.LocationText>현재 위치에서 93m</P.LocationText>
            <P.InfoText>
              <span id="infoText1">대표자명 | </span>
              <span id="infoText2">김제빵</span>
              <br />
              <span id="infoText1">업종 | </span>
              <span id="infoText2">음식점·카페</span>
              <br />
              <span id="infoText1">위치 | </span>
              <span id="infoText2">화랑로 13길 28</span>
              <br />
              <span id="infoText1">연락처 | </span>
              <span id="infoText2">010-1234-5678</span>
            </P.InfoText>
          </div>
        </P.TextBox1>
        <P.Line></P.Line>
      </P.Box1>
    </P.Container>
  );
};

export default StudentPost;
