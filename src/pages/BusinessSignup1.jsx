import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = [
    ["음식점·카페", "생활·서비스", "기타"],
    ["패션·잡화", "가전·디지털", "미용·뷰티"],
  ];

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setFormData((prevData) => ({ ...prevData, business_type: category }));
  };

  const handleFileButtonClick = () => {
    if (isProcessing) return; // 로딩 중에는 클릭 방지
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("business_cert", file);

      const response = await axios.post(
        "/accounts/business-cert/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("확인서 분석 성공", response.data);

      // 백엔드로부터 받은 데이터를 formData에 업데이트
      const { 대표자명, 업체이름, 사업자등록번호 } = response.data;
      console.log("확인서 분석 성공", response.data.ceo_name);
      console.log("확인서 분석 성공", response.data.대표자명);
      console.log("확인서 분석 성공", response.data);

      // 파일 정보와 백엔드에서 받은 데이터를 함께 저장
      const updatedFormData = {
        ...formData,
        business_cert: file,
        ceo_name: 대표자명, // 값이 null이면 빈 문자열로
        business_number: 업체이름 || "", // 값이 null이면 빈 문자열로
        company_name: 사업자등록번호 || formData.company_name, // API 값이 null이면 기존 값을 유지
      };
      setFormData(updatedFormData);
      navigate("/BusinessSignup2", { state: { formData: updatedFormData } });
    } catch (error) {
      console.error(
        "확인서 분석 실패",
        error.response ? error.response.data : error.message
      );
      alert("확인서 분석에 실패했습니다. 정보를 다시 확인해주세요.");
    } finally {
      setIsProcessing(false);
      e.target.value = null;
    }
  };

  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar1.svg`}
          alt="bar1"
          width="393px"
          height="14px"
        />
      </S.Bar>
      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>
      <S.Title>
        소상공인 자격 확인을 위해
        <br />
        소상공인확인서가 필요합니다.
      </S.Title>
      <S.Box6>
        <S.Box5>
          <S.In>사업자 등록번호</S.In>
          <S.Input3
            placeholder="숫자 10자리"
            value={formData.business_number}
            onChange={(e) =>
              setFormData({ ...formData, business_number: e.target.value })
            }
          />
        </S.Box5>
        <S.Box5>
          <S.In>상호(사업체명)</S.In>
          <S.Input4
            placeholder="달나라빵집"
            value={formData.company_name}
            onChange={(e) =>
              setFormData({ ...formData, company_name: e.target.value })
            }
          />
        </S.Box5>
      </S.Box6>
      <S.Box7>
        <S.In>업종</S.In>
        {categories.map((row, i) => (
          <S.Box8 key={i}>
            {row.map((cat) => (
              <S.SelBox
                key={cat}
                isSelected={selectedCategory === cat}
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </S.SelBox>
            ))}
          </S.Box8>
        ))}
      </S.Box7>
      <S.Box5>
        <S.Box9>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkbtn.svg`}
            alt="btn"
            width={17}
          />
          <S.Info1>
            해당 자료는 확인 후 즉시 폐기되며<br></br>
            다른 목적으로 절대 사용하지 않습니다.
          </S.Info1>
        </S.Box9>

        <S.Box10>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkbtn.svg`}
            alt="btn"
            width={17}
          />
          <S.Info2>
            제출 시 개인정보 수집 및 이용에 동의하신 것으로 간주됩니다.
          </S.Info2>
        </S.Box10>
      </S.Box5>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".jpg, .jpeg, .png, .pdf"
      />
      <S.CamBox onClick={handleFileButtonClick}>
        {isProcessing ? (
          <S.SpinnerWrapper>
            <S.Spinner />
          </S.SpinnerWrapper>
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/images/camera.svg`}
            alt="camera"
            width={32}
          />
        )}
      </S.CamBox>
      <S.Info3>
        {isProcessing
          ? "인증 진행 중입니다..."
          : formData.business_cert && formData.business_cert.name
          ? `선택된 파일: ${formData.business_cert.name}`
          : "발급일이 3개월 이내인 jpg파일을 제출해 주세요."}
      </S.Info3>
      {/* 다음 버튼은 이제 필요 없음 */}
    </S.Container>
  );
};

export default BusinessSignup1;
