import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledStudentSignup";

const BusinessSignup4 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [isHidden, setIsHidden] = useState(false); // 주소 숨김 여부

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleSubmit = async () => {
    try {
      //이메일 형식
      const email = `${formData.emailId}@${formData.emailDomain}`;

      //생년월일 형식
      const year = formData.birth.substring(0, 4);
      const month = formData.birth.substring(4, 6);
      const day = formData.birth.substring(6, 8);
      const formattedBirth = `${year}-${month}-${day}`;

      //성별 형식
      const formattedGender = formData.gender === "남" ? "male" : "female";

      const data = {
        role: formData.role,
        full_name: formData.name,
        password: formData.password,
        email: email,
        gender: formattedGender,
        phone: formData.phone_number,
        birth: formattedBirth,
        location: formData.address,
        skill_1: formData.skill_1,
        skill_2: formData.skill_2,
        ceo_name: formData.ceo_name,
        business_number: formData.business_number,
        company_name: formData.company_name,
        business_type: formData.business_type,
        // 대학생 관련 필드는 소상공인이므로 null로 설정
        university: "",
        major: "",
        academic_status: "",
      };

      const response = await axios.post("/accounts/signup/", data);

      console.log("회원가입 성공", response.data);
      navigate(`/StudentSignup6`, { state: { formData: formData } });
    } catch (error) {
      console.error(
        "회원가입 실패",
        error.response ? error.response.data : error.message
      );
      alert("회원가입에 실패했습니다.");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Bar>
        <img
          src={`${process.env.PUBLIC_URL}/images/bar5.svg`}
          alt="bar5"
          width="393px"
          height="14px"
        />
      </S.Bar>

      <S.Title2>회원가입을 진행해주세요.</S.Title2>

      <S.TextBox>
        <S.Text>이름</S.Text>
        <S.Input
          placeholder="홍길동"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <S.Box1>
          <S.Text>생년월일</S.Text>
          <S.Text>성별</S.Text>
        </S.Box1>

        <S.Box2>
          <S.Input
            placeholder="YYYYMMDD"
            value={formData.birth}
            onChange={(e) =>
              setFormData({ ...formData, birth: e.target.value })
            }
          />
          <S.Btn2>
            <span
              className={formData.gender === "남" ? "selected" : ""}
              onClick={() => setFormData({ ...formData, gender: "남" })}
            >
              남자
            </span>
            <span>|</span>
            <span
              className={formData.gender === "여" ? "selected" : ""}
              onClick={() => setFormData({ ...formData, gender: "여" })}
            >
              여자
            </span>
          </S.Btn2>
        </S.Box2>

        <S.Text>전화번호</S.Text>
        <S.Input
          placeholder="01012345678"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />

        <S.Text>이메일</S.Text>
        <S.emailBox>
          <S.Input
            placeholder="happyshare1234"
            value={formData.emailId}
            onChange={(e) =>
              setFormData({ ...formData, emailId: e.target.value })
            }
          />
          <S.Text>@</S.Text>
          <S.emailInput
            placeholder="naver.com"
            value={formData.emailDomain}
            onChange={(e) =>
              setFormData({ ...formData, emailDomain: e.target.value })
            }
          />
        </S.emailBox>

        <S.Text>비밀번호</S.Text>
        <S.Input2
          placeholder="8~12자 영문과 숫자 조합"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <S.Box3>
          <S.Text>주소</S.Text>
          <S.Text>숨기기</S.Text> {/* 글자는 그대로 유지 */}
        </S.Box3>

        <S.Box4>
          <S.Input2
            type={isHidden ? "password" : "text"} // 숨김 처리
            placeholder="성북구 화랑로 13길 28"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <S.Bbtn onClick={toggleHidden} style={{ cursor: "pointer" }}>
            <img
              src={
                isHidden
                  ? `${process.env.PUBLIC_URL}/images/click.svg`
                  : `${process.env.PUBLIC_URL}/images/unclick.svg`
              }
              alt="toggle"
            />
          </S.Bbtn>
        </S.Box4>
      </S.TextBox>

      <S.Background2>
        <img
          src={`${process.env.PUBLIC_URL}/images/background2.svg`}
          alt="background2"
        />
      </S.Background2>

      <S.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="backBtn"
          width="19.5px"
          height="39px"
        />
      </S.BackBtn>
      <S.NextBtn onClick={handleSubmit}>
        <img
          src={`${process.env.PUBLIC_URL}/images/nextBtn.svg`}
          alt="nextBtn"
          width="19.5px"
          height="39px"
        />
      </S.NextBtn>
    </S.Container>
  );
};

export default BusinessSignup4;
