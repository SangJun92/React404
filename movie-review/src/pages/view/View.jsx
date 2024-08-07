import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../components/MovieList/MovieList.css"; // MovieList의 CSS 파일 가져오기
import "../../components/MovieList/MovieCard.css"; // MovieCard의 CSS 파일 가져오기
import "./View.css";
import { useSelector } from "react-redux";
import { reviewService } from "../../Services/review.service";
import StarRating from "./StarRating";
import Modal from "./Modal";
import Review from "../../models/Review";

const View = () => {
  // useParams 훅을 사용하여 URL 파라미터에서 영화 ID를 가져옴
  const { id } = useParams();

  // movie 상태: API로부터 받아온 영화 데이터를 저장
  const [movie, setMovie] = useState(null);

  // review 상태: 사용자가 작성한 리뷰를 저장
  const [review, setReview] = useState(new Review());

  // 리뷰 리스트 상태: 작성된 리뷰들을 저장
  const [reviewList, setReviewList] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  // 리덕스 상태에서 현재 로그인된 사용자 정보 가져오기
  const currentUser = useSelector((state) => state.user);

  // 별점 상태 추가
  const [rating, setRating] = useState(0);

  // 모달 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 컴포넌트가 마운트되거나 id가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    // 비동기 함수 정의
    const fetchMovie = async () => {
      // 영화 데이터를 받아오기 위한 API 호출
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=317b4d9e8a4070df2a4f68ba2e8f2238&language=ko`
      );
      // 응답 데이터를 JSON 형태로 변환
      const data = await response.json();
      // 받아온 데이터를 movie 상태에 저장
      setMovie(data);
    };

    // 리뷰 리스트를 가져오는 함수 정의
    const fetchReviews = async () => {
      const response = await fetch(
        `http://localhost:8090/api/review/getReview/${id}`
      );
      const data = await response.json();
      setReviewList(data);
    };

    // 비동기 함수 호출
    fetchMovie();
    fetchReviews();
  }, [id]); // id가 변경될 때마다 useEffect 실행
  console.log("1111111111111111");
  console.log(reviewList);
  // 리뷰 텍스트 변경 시 상태 업데이트
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  // 리뷰 제출 시 실행되는 함수
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) return; // 빈 리뷰는 추가하지 않도록 함
    if (!currentUser || !currentUser.username) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const token = JSON.parse(localStorage.getItem("currentUser")).token;
      console.log(token);
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }

      // 리뷰 서비스 호출
      const response = await reviewService(review, rating, id);

      // 리뷰 리스트 업데이트
      setReviewList([
        ...reviewList,
        { username: currentUser.username, content: review, rating: rating },
      ]);

      // 리뷰 입력 창 초기화
      setReview("");
      setRating(""); // 별점 초기화
      setIsModalOpen(false); // 모달 닫기
    } catch (error) {
      console.error("리뷰 제출 실패:", error);
      setErrorMessage("예상하지 못한 에러가 발생했습니다.");
    }
  };

  // movie 데이터가 아직 로딩 중일 때 표시할 내용
  if (!movie) return <div>로딩 중...</div>;

  // movie 데이터가 로딩 완료되면 화면에 표시할 내용
  return (
    <div className="view_container">
      <h1>{movie.title}</h1>
      {/* 영화 포스터 이미지 */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} 포스터`}
        className="view_movie_poster"
      />
      {/* 영화 개요 */}
      <p>{movie.overview}</p>

      {/* 작성된 리뷰 리스트 표시 */}
      <ul className="review_list">
        {reviewList.map((review, index) => (
          <li key={index} className="review_item">
            <strong>{review.username}</strong>: {review.content} -{" "}
            {review.rating} ★
          </li>
        ))}
      </ul>

      <button className="review_button" onClick={() => setIsModalOpen(true)}>
        리뷰 작성
      </button>

      <Modal show={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <h2>리뷰작성</h2>
        <br></br>
        <hr></hr>
        {/* 리뷰 작성 폼 */}
        <form className="review_form" onSubmit={handleReviewSubmit}>
          <textarea
            className="review_textarea"
            name="content"
            value={review}
            onChange={handleReviewChange}
            placeholder="리뷰를 작성하세요"
          />
          <StarRating rating={rating} setRating={setRating} />
          <br></br>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <button className="review_button" type="submit">
            리뷰 작성
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default View;
