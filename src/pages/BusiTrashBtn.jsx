import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "../styles/StyledBusiTrashBtn";

const BusiTrashBtn= () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [showRequestBox, setShowRequestBox] = useState(false); // 모달 상태
  const [requestStatus, setRequestStatus] = useState("재능 요청하기"); // 버튼 상태


  const [showModal, setShowModal] = useState(false); // 모달 상태
  const [selectedDay, setSelectedDay] = useState(null); // 어떤 항목을 선택했는지
  //탭 바
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  const [days, setDays] = useState([
    "250812",
    "250801",
    "250731",
    "250603",
    "250502",
    "250308",
    "250301",
    "250301",
    "250301",
    "250301",
    "250222",
  ]);

  // X 클릭 → 모달 열기
  const handleDeleteClick = (day) => {
    setSelectedDay(day);
    setShowModal(true);
  };

  // 삭제 확인
  const confirmDelete = () => {
    setDays(days.filter((d) => d !== selectedDay));
    setShowModal(false);
    setSelectedDay(null);
  };

  // 취소
  const cancelDelete = () => {
    setShowModal(false);
    setSelectedDay(null);
  };

  return (
  <S.Container>
      <S.Career>공고 이력</S.Career>

      {days.map((day, idx) => (
        <S.Box1 key={idx}>
          <S.RowBox>
            <S.X onClick={() => handleDeleteClick(day)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Xbrown.svg`}
                alt="갈색 X"
              />
            </S.X>
            <S.Day>{day}</S.Day>
            <S.SeeBox>받은 후기 보기</S.SeeBox>
          </S.RowBox>
        </S.Box1>
      ))}

      {/* 모달 */}
      {showModal && (
        <S.ModalOverlay>
          <S.ModalContent>
              <S.MIcon><img
              src={`${process.env.PUBLIC_URL}/images/modalicon.svg`}
              alt="아이콘"
            /></S.MIcon> 
              <S.MDay>{selectedDay} </S.MDay>
              <S.MInfo>해당 공고 이력을 삭제하시겠습니까?</S.MInfo>
                <S.RowLine></S.RowLine>
            <S.ModalButtons>
              <S.Btn1><button onClick={confirmDelete}>예</button></S.Btn1>
              <S.ColLine></S.ColLine>
              <S.Btn2><button onClick={cancelDelete}>아니오</button></S.Btn2>
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      )}


      <S.TabBar>
        <div id="tabBarIcon">
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar1" ? "tabBar1_on.svg" : "tabBar1_off.svg"
            }`}
            alt="tabBar1"
            width="41px"
            height="60px"
            onClick={() => handleTabBar("tabBar1")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar4" ? "tabBar4_on.svg" : "tabBar4_off.svg"
            }`}
            alt="tabBar4"
            width="52px"
            height="57px"
            onClick={() => handleTabBar("tabBar4")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${
              tabBar === "tabBar5" ? "tabBar5_on.svg" : "tabBar5_off.svg"
            }`}
            alt="tabBar5"
            width="45px"
            height="56px"
            onClick={() => handleTabBar("tabBar5")}
          />
        </div>
      </S.TabBar>
    </S.Container>
  );
};

export default BusiTrashBtn;