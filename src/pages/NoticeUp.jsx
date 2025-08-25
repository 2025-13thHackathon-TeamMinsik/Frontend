import React from "react";
import axios from "axios";
import * as S from "../styles/StyledNoticeUp";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NoticeUp = ({ formData }) => {
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
  const [businessInfo, setBusinessInfo] = useState(null);

  //시연용 위치 데이터
  const locations = [
    { lat: 37.6057198, lng: 127.0424609 }, //스윗케이크
    { lat: 37.601556, lng: 127.0425 }, //푸른책방
    { lat: 37.6052874, lng: 127.0404106 }, //피치헤어
    { lat: 37.603342, lng: 127.045435 }, //빵 굽는 하루
    { lat: 37.603681, lng: 127.046039 }, //한성 수학학원
    { lat: 37.605333, lng: 127.047056 }, //바삭 분식
    { lat: 37.60272, lng: 127.03954 }, //달빛 공방
    { lat: 37.608306, lng: 127.041528 }, //오색찬상
    { lat: 37.608333, lng: 127.036667 }, //(애기릉터공원)
    { lat: 37.6055, lng: 127.036833 }, //(월곡1동 주민센터)
  ];

  //위치 인덱스
  const [locationIndex, setLocationIndex] = useState(0);

  const navigate = useNavigate();

  const location = useLocation();
  const { jobId } = location.state || {};

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
      deleteJob();
    }
    setShowModal(false);
    setModalType(null);
  };

  const goBack = () => {
    navigate(-1);
  };

  //직접 이미지 파일 업로드만(AI는 성능 이슈로 구현 X)
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
    const userEmail = localStorage.getItem("userEmail"); // 로그인 시 이메일을 저장했다고 가정
    let lat = null;
    let lng = null;

    if (userEmail) {
      // 간단한 해시 함수를 이용해 이메일 기반으로 인덱스 생성
      let sum = 0;
      for (let i = 0; i < userEmail.length; i++) {
        sum += userEmail.charCodeAt(i);
      }
      const index = sum % locations.length;
      lat = locations[index].lat;
      lng = locations[index].lng;
    } else {
      console.warn("로그인 정보가 없어 기본 위치를 사용합니다.");
      lat = locations[0].lat;
      lng = locations[0].lng;
    }

    //body
    const postFormData = new FormData(); // 변수명 변경 (기존 formData와 겹치지 않게)
    postFormData.append("duration_time", durationTime);
    postFormData.append("payment_info", paymentInfo);
    postFormData.append("payment_type", paymentType);
    postFormData.append("description", description);
    postFormData.append("store_lat", lat);
    postFormData.append("store_lng", lng);

    postFormData.append("ceo_name", formData.name);
    postFormData.append("company_name", formData.company_name);
    postFormData.append("business_type", formData.business_type);
    postFormData.append("address", formData.address);

    if (imageSource === "gallery" && imageFile) {
      postFormData.append("image_from_gallery", imageFile); //갤러리 이미지 파일을 전송
    } else if (imageSource === "ai" && previewImage) {
      postFormData.append("image_from_ai", previewImage); //AI 이미지 URL을 전송(구현 x)
    }

    try {
      const response = await axios.post("/jobs/posts/create/", postFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      console.log("공고 작성 성공");
      const createdDate = response.data.created_at;
      setPostId(response.data.id);
      localStorage.setItem("posted_date", createdDate);
      setShowModal(true);
      setModalType("post");
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

    const userEmail = localStorage.getItem("userEmail");
    let lat = null;
    let lng = null;

    if (userEmail) {
      // 간단한 해시 함수를 이용해 이메일 기반으로 인덱스 생성
      let sum = 0;
      for (let i = 0; i < userEmail.length; i++) {
        sum += userEmail.charCodeAt(i);
      }
      const index = sum % locations.length;
      lat = locations[index].lat;
      lng = locations[index].lng;
    }

    const requestData = new FormData();
    requestData.append("duration_time", durationTime);
    requestData.append("payment_info", paymentInfo);
    requestData.append("payment_type", paymentType);
    requestData.append("description", description);
    requestData.append("store_lat", lat);
    requestData.append("store_lng", lng);

    requestData.append("ceo_name", formData.name);
    requestData.append("company_name", formData.company_name);
    requestData.append("business_type", formData.business_type);
    requestData.append("address", formData.address);

    if (imageSource === "gallery" && imageFile) {
      requestData.append("image_from_gallery", imageFile); //갤러리 이미지 파일을 전송
    } else if (imageSource === "ai" && previewImage) {
      requestData.append("image_from_ai", previewImage); //AI 이미지 URL을 전송(구현 x)
    }

    try {
      await axios.patch(`/jobs/posts/${postId}/update/`, requestData, {
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
      navigate("/BusinessAiPosts");
    } catch (error) {
      console.error("공고 삭제 실패:", error);
    }
  };

  // 공고 상세 정보 불러오기
  const fetchJobDetails = async (id) => {
    try {
      const response = await axios.get(`/jobs/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = response.data;

      // 불러온 데이터로 state 업데이트
      setDurationTime(data.duration_time);
      setPaymentInfo(data.payment_info);
      setPaymentType(data.payment_type);
      setDescription(data.description);
      setPreviewImage(`${data.image}`); // API 명세서에 따르면 image 필드에 경로가 있음
      setPostId(data.id);
      setIsPosted(true); // 수정/삭제 버튼이 보이도록 상태 변경
    } catch (error) {
      console.error("공고 상세 정보 조회 실패:", error);
    }
  };

  useEffect(() => {
    if (jobId) {
      // jobId가 있을 때만 상세 정보 불러오기
      fetchJobDetails(jobId);
    }
  }, [jobId]); // jobId가 변경될 때마다 실행

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
            <img
              src={`${process.env.PUBLIC_URL}/images/aiPhoto.svg`}
              alt="AI "
            />
          </S.PicBox1>
          <S.PicBox2>
            <label htmlFor="file-input">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="선택된 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/images/addPhoto.svg`}
                  alt="직접 추가"
                />
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
              border:
                paymentType === "LOCAL_CURRENCY"
                  ? " 1px solid #695739"
                  : " 1px solid #DFDFDF",
              color: paymentType === "LOCAL_CURRENCY" ? "#000" : "#DFDFDF",
            }}
          >
            지역화폐
          </S.choice1>
          <S.choice2
            onClick={() => setPaymentType("VOLUNTEER_TIME")}
            style={{
              border:
                paymentType === "VOLUNTEER_TIME"
                  ? "1px solid #695739"
                  : "1px solid #DFDFDF",
              color: paymentType === "VOLUNTEER_TIME" ? "#000" : "#DFDFDF",
            }}
          >
            봉사시간
          </S.choice2>
        </S.Box6>
      </S.Box1>
      <S.Box2>
        {isPosted ? (
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
        ) : (
          <S.Up onClick={postJob}>공고 올리기</S.Up>
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
