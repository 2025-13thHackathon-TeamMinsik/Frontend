import React from "react";
import { useState } from "react";
import * as A from "../styles/StyledAiPosts";

const StudentAiPosts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("거리순");
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [isHeartClick, setIsHeartClick] = useState(false);

  const sorts = ["거리순", "인기순", "최신순", "찜 콕"];

  //토글 아이콘
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelected = (sort) => {
    setSelected(sort); //sort선택하면
    setIsMenuOpen(false); //메뉴 닫기
  };

  //전체 | 봉사 필터 함수
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  //찜 콕 아이콘
  const handleHeartIcon = () => {
    setIsHeartClick(!isHeartClick);
  };

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
      <A.StudentAiCardBox>
        <A.AiTitle>
          나에게 딱 맞는
          <img
            src={`${process.env.PUBLIC_URL}/images/info.svg`}
            alt="info"
            width="25px"
            height="auto"
            id="info"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/location.svg`}
            alt="location"
            width="23px"
            height="auto"
            id="location"
          />
        </A.AiTitle>
        <A.CardList>
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>현재 위치에서 93m</A.LocationText>
              <A.CardText>
                우리 가게 SNS 마케
                <br />
                팅을 도와줄 대학생을
                <br /> 찾습...
              </A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                isHeartClick ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={handleHeartIcon}
            />
          </A.Card>
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>현재 위치에서 93m</A.LocationText>
              <A.CardText>
                우리 가게 SNS 마케
                <br />
                팅을 도와줄 대학생을
                <br /> 찾습...
              </A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                isHeartClick ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={handleHeartIcon}
            />
          </A.Card>
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>현재 위치에서 93m</A.LocationText>
              <A.CardText>
                우리 가게 SNS 마케
                <br />
                팅을 도와줄 대학생을
                <br /> 찾습...
              </A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                isHeartClick ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={handleHeartIcon}
            />
          </A.Card>
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>현재 위치에서 93m</A.LocationText>
              <A.CardText>
                우리 가게 SNS 마케
                <br />
                팅을 도와줄 대학생을
                <br /> 찾습...
              </A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                isHeartClick ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={handleHeartIcon}
            />
          </A.Card>
          <A.Card>
            <A.CardImg>
              <img
                src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
                alt="cardImg"
                width="84.766px"
                height="113.021px"
                id="cardImg"
              />
            </A.CardImg>
            <div id="textBox">
              <A.CardTitle>짱베이커리</A.CardTitle>
              <A.LocationText>현재 위치에서 93m</A.LocationText>
              <A.CardText>
                우리 가게 SNS 마케
                <br />
                팅을 도와줄 대학생을
                <br /> 찾습...
              </A.CardText>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/${
                isHeartClick ? "heart-on.svg" : "heart-off.svg"
              }`}
              alt="heart-off"
              width="26px"
              height="auto"
              id="heart"
              onClick={handleHeartIcon}
            />
          </A.Card>
        </A.CardList>
      </A.StudentAiCardBox>
      <A.Line2></A.Line2>
      <div id="filterBar">
        <A.Filter1>
          <span
            id="option1"
            onClick={() => handleFilter("전체")}
            style={{ color: selectedFilter === "전체" ? "black" : "#a3a3a3" }}
          >
            전체{" "}
          </span>
          |{" "}
          <span
            id="option2"
            onClick={() => handleFilter("봉사")}
            style={{ color: selectedFilter === "봉사" ? "black" : "#a3a3a3" }}
          >
            봉사
          </span>
        </A.Filter1>
        <A.Filter2 onClick={handleToggle}>
          {selected}
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isMenuOpen ? "toggleUp2.svg" : "toggleDown2.svg"
            }`}
            alt="toggleIcon"
            width="16px"
            height="auto"
            id="toggleIcon"
          />
        </A.Filter2>
        {isMenuOpen && (
          <A.FilterToggle>
            {sorts.map((item) => (
              <div
                key={item}
                onClick={() => handleSelected(item)}
                style={{
                  fontWeight: selected === item ? "bold" : "normal",
                  color: selected === item ? "black" : "gray",
                }}
              >
                {item}
              </div>
            ))}
          </A.FilterToggle>
        )}
      </div>
      <A.Background>
        <img
          src={`${process.env.PUBLIC_URL}/images/background.svg`}
          alt="background"
        />
      </A.Background>
      <A.CardList2>
        <A.Card>
          <A.CardImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="cardImg"
              width="84.766px"
              height="113.021px"
              id="cardImg"
            />
          </A.CardImg>
          <div id="textBox">
            <A.CardTitle>짱베이커리</A.CardTitle>
            <A.LocationText>현재 위치에서 93m</A.LocationText>
            <A.CardText>
              우리 가게 SNS 마케
              <br />
              팅을 도와줄 대학생을
              <br /> 찾습...
            </A.CardText>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClick ? "heart-on.svg" : "heart-off.svg"
            }`}
            alt="heart-off"
            width="26px"
            height="auto"
            id="heart"
            onClick={handleHeartIcon}
          />
          <A.FilterIcon>봉사</A.FilterIcon>
        </A.Card>
        <A.Card>
          <A.CardImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="cardImg"
              width="84.766px"
              height="113.021px"
              id="cardImg"
            />
          </A.CardImg>
          <div id="textBox">
            <A.CardTitle>짱베이커리</A.CardTitle>
            <A.LocationText>현재 위치에서 93m</A.LocationText>
            <A.CardText>
              우리 가게 SNS 마케
              <br />
              팅을 도와줄 대학생을
              <br /> 찾습...
            </A.CardText>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClick ? "heart-on.svg" : "heart-off.svg"
            }`}
            alt="heart-off"
            width="26px"
            height="auto"
            id="heart"
            onClick={handleHeartIcon}
          />
        </A.Card>
        <A.Card>
          <A.CardImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="cardImg"
              width="84.766px"
              height="113.021px"
              id="cardImg"
            />
          </A.CardImg>
          <div id="textBox">
            <A.CardTitle>짱베이커리</A.CardTitle>
            <A.LocationText>현재 위치에서 93m</A.LocationText>
            <A.CardText>
              우리 가게 SNS 마케
              <br />
              팅을 도와줄 대학생을
              <br /> 찾습...
            </A.CardText>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClick ? "heart-on.svg" : "heart-off.svg"
            }`}
            alt="heart-off"
            width="26px"
            height="auto"
            id="heart"
            onClick={handleHeartIcon}
          />
        </A.Card>
        <A.Card>
          <A.CardImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="cardImg"
              width="84.766px"
              height="113.021px"
              id="cardImg"
            />
          </A.CardImg>
          <div id="textBox">
            <A.CardTitle>짱베이커리</A.CardTitle>
            <A.LocationText>현재 위치에서 93m</A.LocationText>
            <A.CardText>
              우리 가게 SNS 마케
              <br />
              팅을 도와줄 대학생을
              <br /> 찾습...
            </A.CardText>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClick ? "heart-on.svg" : "heart-off.svg"
            }`}
            alt="heart-off"
            width="26px"
            height="auto"
            id="heart"
            onClick={handleHeartIcon}
          />
        </A.Card>
        <A.Card>
          <A.CardImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/ex-pic.jpg`}
              alt="cardImg"
              width="84.766px"
              height="113.021px"
              id="cardImg"
            />
          </A.CardImg>
          <div id="textBox">
            <A.CardTitle>짱베이커리</A.CardTitle>
            <A.LocationText>현재 위치에서 93m</A.LocationText>
            <A.CardText>
              우리 가게 SNS 마케
              <br />
              팅을 도와줄 대학생을
              <br /> 찾습...
            </A.CardText>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClick ? "heart-on.svg" : "heart-off.svg"
            }`}
            alt="heart-off"
            width="26px"
            height="auto"
            id="heart"
            onClick={handleHeartIcon}
          />
        </A.Card>
      </A.CardList2>
      <A.TabBar>
        <div id="tabBarIcon">
          <img
            src={`${process.env.PUBLIC_URL}/images/tabBar1_on.svg`}
            alt="tabBar1"
            width="41px"
            height="60px"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tabBar2_off.svg`}
            alt="tabBar2"
            width="66px"
            height="59px"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/tabBar3_off.svg`}
            alt="tabBar3"
            width="32px"
            height="58px"
          />
        </div>
      </A.TabBar>
    </A.Container>
  );
};

export default StudentAiPosts;
