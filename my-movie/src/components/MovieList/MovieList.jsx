import './MovieList.css';
import Fire from '../../assets/fire.png';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';

const MovieList = () => {
  // 처음 받은 movie 데이터들을 movies state로 관리하기
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      // 'https://api.themoviedb.org/3/movie/popular?api_key=본인API&language=ko'
      'https://api.themoviedb.org/3/discover/movie?api_key=317b4d9e8a4070df2a4f68ba2e8f2238&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const data = await response.json();
    setMovies(data.results);
    // console.log(data.results);c
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          인기순 <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* movies에 있는 영화 갯수만큼 MovieCard 만들기 */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.vote_average}
            description={movie.overview}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
