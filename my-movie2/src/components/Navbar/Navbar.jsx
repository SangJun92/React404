import React from 'react';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearCurrentUser } from '../../MovieLogin/actions/user';


const Navbar = () => {
  const currentUser = useSelector((state) => state.user); // 로그인 상태 가져오기
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const logout = () => {
  //   dispatch(clearCurrentUser());
  //   navigate("/login");
  // };

  // const login = () => {
  //   navigate("/login");
  // };

  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </a>
        <a href="#top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </a>
        <a href="#upcoming">
          예정작품
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </a>
      </div>

      {/* <div className="navbar_auth">
        {currentUser ? ( // 로그인 여부에 따라 버튼 표시
          <button onClick={logout} className="logout_button">
            로그아웃
          </button>
        ) : (
          <button onClick={login} className="login_button">
            로그인
          </button>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;