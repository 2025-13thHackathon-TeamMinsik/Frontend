import React from "react";
import axios from "axios";
import * as S from "../styles/StyledNoticeUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticeUp = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [showModal, setShowModal] = useState(false); // 모달 상태
  const [modalType, setModalType] = useState(null); // 모달 종류: "post" | "delete"
  const [isPosted, setIsPosted] = useState(false); // 공고 게시 상태
  const [durationTime, setDurationTime] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [description, setDescription] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [postId, setPostId] = useState(null);
  const [imageSource, setImageSource] = useState(null);

  //시연용 위치 데이터
  const locations = [
    { lat: 37.601556, lng: 127.0425 },
    { lat: 37.603342, lng: 127.045435 },
    { lat: 37.603681, lng: 127.046039 },
    { lat: 37.605333, lng: 127.047056 },
    { lat: 37.608306, lng: 127.041528 },
    { lat: 37.608333, lng: 127.036667 },
    { lat: 37.6055, lng: 127.036833 },
  ];

  //위치 인덱스
  const [locationIndex, setLocationIndex] = useState(0);

  const navigate = useNavigate();

  //오늘 날짜
  const getFormattedDate = () => {
    const today = new Date();
    const year = String(today.getFullYear()).slice(2);
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  const handleConfirm = () => {
    const currentModal = modalType;
    if (currentModal === "post") {
      setShowModal(false);
      setIsPosted(true);
    } else if (currentModal === "delete") {
      setIsPosted(false);
      navigate("/BusinessAiPosts");
    }
    setShowModal(false);
    setModalType(null);
  };

  const goBack = () => {
    navigate(-1);
  };

  //직접 이미지 파일 업로드만(AI는 구현 미완성)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
      setImageSource("gallery");
    }
  };

  //공고 작성
  const postJob = async () => {
    const currentLat = locations[locationIndex].lat;
    const currentLng = locations[locationIndex].lng;

    //body
    const payload = {
      duration_time: durationTime,
      payment_info: paymentInfo,
      payment_type: paymentType,
      description: description,
      store_lat: currentLat,
      store_lng: currentLng,
      image_from_gallery: "임시",
    };

    try {
      const response = await axios.post("/jobs/posts/create/", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      console.log("공고 작성 성공");
      setPostId(response.data.id);
      setShowModal(true);
      setModalType("post");
      //시연용 위치 사용 위해 인덱스 증가
      setLocationIndex((prevIndex) => prevIndex + 1);
      setIsPosted(true);
    } catch (error) {
      console.error("공고 작성 실패:", error);
    }
  };

  //공고 수정
  const updateJob = async () => {
    if (!postId) {
      return;
    }

    const payload = {
      duration_time: durationTime,
      payment_info: paymentInfo,
      payment_type: paymentType,
      description: description,
      store_lat: locations[locationIndex - 1].lat, //현재 인덱스 해당 위치
      store_lng: locations[locationIndex - 1].lng,
      image_from_gallery: "임시",
    };

    try {
      await axios.patch(`/jobs/posts/${postId}/update/`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("공고 수정 성공");
    } catch (error) {
      console.error("공고 수정 실패:", error);
    }
  };

  //공고 삭제
  const deleteJob = async () => {
    if (!postId) {
      return;
    }

    try {
      await axios.delete(`/jobs/posts/${postId}/delete/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("공고 삭제 성공");
      setShowModal(true);
      setModalType("delete");
    } catch (error) {
      console.error("공고 삭제 실패:", error);
    }
  };

  return (
    <S.Container>
      <S.BackBtn onClick={goBack}>
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
        <S.Box3>
          <S.Icon>
            <img src={`${process.env.PUBLIC_URL}/images/Icon.svg`} alt="*" />
          </S.Icon>
          <S.Text>나눔 내용</S.Text>
          <S.Day>{getFormattedDate()}</S.Day>
        </S.Box3>

        <S.Box4>
          <S.GrayIcon>
            <img
              src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
              alt="*"
              width="16px"
            />
          </S.GrayIcon>
          <S.GrayText>기간/시간</S.GrayText>
        </S.Box4>

        <S.TimeInput
          placeholder="ex) 월화수 4시간/ 기간 1달 "
          value={durationTime}
          onChange={(e) => setDurationTime(e.target.value)}
        ></S.TimeInput>

        <S.Box4>
          <S.GrayIcon>
            <img
              src={`${process.env.PUBLIC_URL}/images/GrayIcon.svg`}
              alt="*"
              width="16px"
            />
          </S.GrayIcon>
          <S.GrayText>급여 방식</S.GrayText>
        </S.Box4>

        <S.TimeInput2
          placeholder="ex) 시급 11,000원"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        ></S.TimeInput2>

        <S.TextBox
          placeholder="300자 공백 포함"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></S.TextBox>

        <S.Box3>
          <S.Icon>
            <img src={`${process.env.PUBLIC_URL}/images/Icon.svg`} alt="*" />
          </S.Icon>
          <S.Text>사진 첨부</S.Text>
        </S.Box3>

        <S.Box5>
          <S.PicBox1>
            <S.Pic>
              <img
                src={`${process.env.PUBLIC_URL}/images/Pizza.svg`}
                alt="피자"
              />
            </S.Pic>
          </S.PicBox1>
          <S.PicBox2>
            <label htmlFor="file-input">
              {!previewImage && (
                <S.PicAdd2>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/PicAdd2.svg`}
                    alt="직접 추가"
                  />
                </S.PicAdd2>
              )}
              {previewImage && (
                <S.PicAdd2>
                  <img src={previewImage} alt="선택된 이미지" />
                </S.PicAdd2>
              )}
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </S.PicBox2>
        </S.Box5>

        <S.Box3>
          <S.Icon>
            <img src={`${process.env.PUBLIC_URL}/images/Icon.svg`} alt="*" />
          </S.Icon>
          <S.Box6>
            <S.Text>급여 방식 선택하기</S.Text>
            <S.Small>(필수)</S.Small>
          </S.Box6>
        </S.Box3>
        <S.Box6>
          <S.choice1
            onClick={() => setPaymentType("LOCAL_CURRENCY")}
            style={{
              border: paymentType === "LOCAL_CURRENCY" ? "#695739" : "#DFDFDF",
              color: paymentType === "LOCAL_CURRENCY" ? "#000" : "#DFDFDF",
            }}
          >
            지역화폐
          </S.choice1>
          <S.choice2
            onClick={() => setPaymentType("VOLINTEER_TIME")}
            style={{
              border: paymentType === "LOCAL_CURRENCY" ? "#695739" : "#DFDFDF",
              color: paymentType === "LOCAL_CURRENCY" ? "#000" : "#DFDFDF",
            }}
          >
            봉사시간
          </S.choice2>
        </S.Box6>
      </S.Box1>
      <S.Box2>
        {!isPosted ? (
          <S.Up
            onClick={() => {
              postJob();
            }}
          >
            공고 올리기
          </S.Up>
        ) : (
          <>
            <S.ModiBtn onClick={updateJob}>수정하기</S.ModiBtn>
            <S.DelBtn
              onClick={() => {
                setShowModal(true);
                setModalType("delete");
              }}
            >
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
