import React from "react";
import axios from "axios";
import * as S from "../styles/StyledNoticeUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticeUp = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [showModal, setShowModal] = useState(false);   // 모달 상태
  const [modalType, setModalType] = useState(null);    // 모달 종류: "post" | "delete"
  const [isPosted, setIsPosted] = useState(false);     // 공고 게시 상태

   const navigate = useNavigate();

  const handleTabBar = (menu) => {
    setTabBar(menu);
  };
  const handleConfirm = () => {
  const currentModal = modalType;

  if (currentModal === "post") {
    setIsPosted(true);
  } else if (currentModal === "delete") {
    setIsPosted(false);
    navigate("/BusinessAiPosts"); // 삭제 확인 시에만 이동
  }

  setShowModal(false);
  setModalType(null);
};





  return (
    <S.Container>   <S.BackBtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            alt="backBtn"
            width="19.5px"
            height="39px"
          />
        </S.BackBtn>
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
      <S.Box1>
           <S.Box3> <S.Icon> <img
            src={`${process.env.PUBLIC_URL}/images/Icon.svg`}
            alt="*"
          /></S.Icon> <S.Text>나눔 내용</S.Text><S.Day>250812</S.Day></S.Box3>

          <S.Box4><S.GrayIcon><img
            src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
            alt="*" width="16px"
          /></S.GrayIcon><S.GrayText>기간/시간</S.GrayText></S.Box4>

          <S.TimeInput placeholder="ex) 월화수 4시간/ 기간 1달 "></S.TimeInput>

          
          <S.Box4><S.GrayIcon><img
            src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
            alt="*" width="16px"
          /></S.GrayIcon><S.GrayText>급여 방식</S.GrayText></S.Box4>

          <S.TimeInput2 placeholder="ex) 시급 11,000원"></S.TimeInput2>

          <S.TextBox placeholder="300자 공백 포함"></S.TextBox>


          <S.Box3> <S.Icon> <img
            src={`${process.env.PUBLIC_URL}/images/Icon.svg`}
            alt="*"
          /></S.Icon> <S.Text>사진 첨부</S.Text></S.Box3>
        
        <S.Box5>
            <S.PicBox1><S.Pic></S.Pic></S.PicBox1><S.PicBox2><S.PicAdd2> <img
            src={`${process.env.PUBLIC_URL}/images/PicAdd2.svg`}
            alt="직접 추가"
          /></S.PicAdd2></S.PicBox2>
        </S.Box5>

          <S.Box3> <S.Icon> <img
            src={`${process.env.PUBLIC_URL}/images/Icon.svg`}
            alt="*"
          /></S.Icon> <S.Box6><S.Text>급여 방식 선택하기</S.Text><S.Small>(필수)</S.Small></S.Box6></S.Box3>
      <S.Box6><S.choice1>지역화폐</S.choice1> <S.choice2>봉사시간</S.choice2></S.Box6>
      
      </S.Box1>
       <S.Box2>
        {!isPosted ? (
          <S.Up onClick={() => { setShowModal(true); setModalType("post"); }}>
            공고 올리기
          </S.Up>
        ) : (
          <>
            <S.ModiBtn>수정하기</S.ModiBtn>
            <S.DelBtn onClick={() => { setShowModal(true); setModalType("delete"); }}>
              삭제하기
            </S.DelBtn>
          </>
        )}
      </S.Box2>

      {/* 모달창 */}
      {showModal && (
        <S.Overlay onClick={() => setShowModal(false)}>
          <S.ModalBox onClick={(e) => e.stopPropagation()}>
            <S.Icon2>
              <img
                src={`${process.env.PUBLIC_URL}/images/modalicon.svg`}
                alt="아이콘"
              />
            </S.Icon2>
            <S.Info2>
              {modalType === "post"
                ? "공고가 게시되었습니다."
                : "공고가 삭제되었습니다."}
            </S.Info2>
            <S.Line />
            <S.Ok2 onClick={handleConfirm}>확인</S.Ok2>
          </S.ModalBox>
        </S.Overlay>
      )}
    </S.Container>
  );
};

export default NoticeUp;
