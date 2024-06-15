import './MovieCard.css';
import Star from '../../assets/star.png';

const MovieCard = ({ title, posterPath, releaseDate, rating, description }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  // export default function MovieCard() {
  return (
    <a className="movie_card">
      <img
        // src="https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879"
        // alt="movie poster"
        // className="movie_poster"
        src={posterUrl}
        alt={`${title} poster`}
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_center movie_date_rate">
          <p>2023-06-14</p>
          <p className="align_center">
            평점
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {/* 영화 내용 설명 */}
          {description}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;