import React from "react";
import * as A from "../styles/StyledAiPosts";

const StudentAiPosts = () => {
  return (
    <A.Container>
      <div id="header">
        <img
          src={`${process.env.PUBLIC_URL}/images/alert.svg`}
          alt="alert"
          width="25px"
          height="auto"
          id="alert"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/logout.svg`}
          alt="logout"
          width="33px"
          height="auto"
        />
      </div>
      <A.TitleBox>
        <A.Title>
          우리 곳간은 <span id="bold">성북구</span>
          <br />
          <span id="bold">민식</span>님의 재능은
        </A.Title>
        <A.CategoryBox>
          <A.Category>디자인</A.Category>
          <A.Category>홍보/마케팅</A.Category>
        </A.CategoryBox>
      </A.TitleBox>
      <A.Illust>
        <img
          src={`${process.env.PUBLIC_URL}/images/illust.svg`}
          alt="illust"
          width="100%"
          height="auto"
        />
      </A.Illust>
      <A.SearchBox>
        <A.SearchInput
          type="text"
          placeholder="원하는 키워드를 검색하세요. #개발 #디자인"
        ></A.SearchInput>
        <A.Line></A.Line>
        <img
          src={`${process.env.PUBLIC_URL}/images/searchIcon.svg`}
          alt="searchIcon"
          id="searchIcon"
        />
      </A.SearchBox>
    </A.Container>
  );
};

export default StudentAiPosts;
