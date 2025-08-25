import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledBusiTrashBtn";

const BusiTrashBtn = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 기능을 추가합니다.
  const [tabBar, setTabBar] = useState("tabBar1");
  const [posts, setPosts] = useState([]); // 공고 이력 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const [showModal, setShowModal] = useState(false); // 모달 상태
  const [selectedPost, setSelectedPost] = useState(null); // 삭제 대상 공고 정보

  // 날짜 포맷 함수 (YYYY-MM-DDTHH:mm:ss.sssZ -> YYMMDD)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  // API 호출
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("로그인 토큰이 없습니다.");
        }
        const response = await axios.get("/jobs/posts/history/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (err) {
        setError("공고 이력을 불러오는 데 실패했습니다.");
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 탭바 핸들러
  const handleTabBar = (menu) => {
    setTabBar(menu);
  };

  // 삭제 버튼 클릭 시 모달 열기
  const handleDeleteClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  // '받은 후기 보기' 클릭 시 네비게이션
  const handleViewReview = (jobPostId) => {
    navigate(`/business-review/${jobPostId}`);
  };

  // 삭제 확인 (프론트엔드에서만 처리)
  const confirmDelete = () => {
    if (selectedPost) {
      // API 호출 대신, 클라이언트 상태에서 해당 공고 제거
      setPosts(posts.filter((post) => post.id !== selectedPost.id));
      setShowModal(false);
      setSelectedPost(null);
      console.log(
        `프론트엔드에서 공고 ID ${selectedPost.id}가 삭제되었습니다.`
      );
    }
  };

  // 삭제 취소
  const cancelDelete = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  if (loading) {
    return <S.Container>로딩 중...</S.Container>;
  }

  if (error) {
    return <S.Container>{error}</S.Container>;
  }

  return (
    <S.Container>
      <S.Career>공고 이력</S.Career>

      {posts.length > 0 ? (
        posts.map((post) => (
          <S.Box1 key={post.id}>
            <S.RowBox>
              <S.X onClick={() => handleDeleteClick(post)}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Xbrown.svg`}
                  alt="갈색 X"
                />
              </S.X>
              <S.Day>{formatDate(post.created_at)}</S.Day>
              <S.SeeBox onClick={() => handleViewReview(post.id)}>
                받은 후기 보기
              </S.SeeBox>
            </S.RowBox>
          </S.Box1>
        ))
      ) : (
        <p>등록된 공고가 없습니다.</p>
      )}

      {/* 모달 */}
      {showModal && selectedPost && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.MIcon>
              <img
                src={`${process.env.PUBLIC_URL}/images/modalicon.svg`}
                alt="아이콘"
              />
            </S.MIcon>
            <S.MDay>{formatDate(selectedPost.created_at)} </S.MDay>
            <S.MInfo>해당 공고 이력을 삭제하시겠습니까?</S.MInfo>
            <S.RowLine></S.RowLine>
            <S.ModalButtons>
              <S.Btn1>
                <button onClick={confirmDelete}>예</button>
              </S.Btn1>
              <S.ColLine></S.ColLine>
              <S.Btn2>
                <button onClick={cancelDelete}>아니오</button>
              </S.Btn2>
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
