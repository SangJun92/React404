import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=317b4d9e8a4070df2a4f68ba2e8f2238&language=ko`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // 리뷰를 서버에 저장하는 로직 추가
    console.log("리뷰 제출:", review);
  };

  if (!movie) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} 포스터`}
      />
      <p>{movie.overview}</p>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="리뷰를 작성하세요"
        />
        <button type="submit">리뷰 제출</button>
      </form>
    </div>
  );
};

export default View;
