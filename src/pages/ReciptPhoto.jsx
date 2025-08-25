import React, { useState, useRef } from "react";
import * as S from "../styles/StyledReciptPhoto";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReciptPhoto = () => {
  const [tabBar, setTabBar] = useState("tabBar1");
  const [uploadResult, setUploadResult] = useState(null);

  const token = localStorage.getItem("accessToken");
  const fileInputRef = useRef(null);

  const handleTabBar = (menu) => setTabBar(menu);

  const navigate = useNavigate();

  // 카메라 버튼 클릭 → 파일 선택창 열기
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("receipt", file);

    try {
      const res = await axios.post("/wallets/receipt/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUploadResult(res.data);

      // 정상 등록 시 Stamp 페이지로 이동
      if (res.data.stamp_progress) {
        const doneNum = parseInt(res.data.stamp_progress.split("/")[0]);
        navigate("/Stamp", { state: { completedStamp: doneNum } });
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setUploadResult(err.response.data);
      } else {
        alert("업로드 중 오류가 발생했습니다.");
      }
    }
  
 

   };



  return (
    <S.Container>
     {/* 탭바 */}
         <S.TabBar>
           <div id="tabBarIcon">
             {["tabBar1", "tabBar2", "tabBar3"].map((tab, idx) => (
               <img
                 key={tab}
                 src={`${process.env.PUBLIC_URL}/images/${
                   tabBar === tab ? `${tab}_on.svg` : `${tab}_off.svg`
                 }`}
                 alt={tab}
                 width={idx === 1 ? "66px" : idx === 2 ? "32px" : "41px"}
                 height={idx === 1 ? "59px" : idx === 2 ? "58px" : "60px"}
                 onClick={() => handleTabBar(tab)}
               />
             ))}
           </div>
         </S.TabBar>

      {/* 배경 */}
      <S.Background2>
        <img src={`${process.env.PUBLIC_URL}/images/background2.svg`} alt="background2" width="auto" height="357.5px" />
      </S.Background2>

      {/* 코인 아이콘 */}
      <S.CoinIcon>
        <img src={`${process.env.PUBLIC_URL}/images/CoinIcon.svg`} alt="참새코인" width="43px" />
      </S.CoinIcon>

      {/* 제목 */}
      <S.Title>
        업체의 영수증 사진을 찍고<br />
        스탬프를 받아보세요.
      </S.Title>

      {/* 안내 박스 */}
      <S.Box1>
        <S.GreenCheck>
          <img src={`${process.env.PUBLIC_URL}/images/GreenCheck.svg`} alt="체크완료표시" />
        </S.GreenCheck>
        <S.Info>
          해당 자료는 확인 후 즉시 폐기되며<br />
          다른 목적으로 절대 사용하지 않습니다.
        </S.Info>
      </S.Box1>

      <S.Box2>
        <S.GreenCheck>
          <img src={`${process.env.PUBLIC_URL}/images/GreenCheck.svg`} alt="체크완료표시" />
        </S.GreenCheck>
        <S.Info>
          제출 시 개인정보 수집 및 이용에 동의하신 것으로 간주됩니다.
        </S.Info>
      </S.Box2>

      {/* 카메라 버튼 */}
      <S.CameraBox onClick={handleCameraClick}>
        <img src={`${process.env.PUBLIC_URL}/images/camera.svg`} alt="카메라" />
      </S.CameraBox>

      {/* 숨겨진 파일 input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* 업로드 결과 */}
      {uploadResult && (
        <S.UploadResult>
          {uploadResult.error ? (
            <p style={{ color: "red" }}>{uploadResult.error}</p>
          ) : (
            <div>
              <p>업체명: {uploadResult.company_name}</p>
              <p>금액: {uploadResult.amount} 원</p>
              <p>지역: {uploadResult.region}</p>
              <p>적립: {uploadResult.earned} 코인</p>
              <p>스탬프 진행: {uploadResult.stamp_progress}</p>
              <p>지갑 잔액: {uploadResult.wallet_balance}</p>
            </div>
          )}
        </S.UploadResult>
      )}
    </S.Container>
  );
};

export default ReciptPhoto;