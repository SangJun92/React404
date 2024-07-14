import React from 'react';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Mojji from '../../assets/Mojji.jpg';
import Goguma from '../../assets/Goguma.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUser } from '../../store/actions/user';

const Navbar = () => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearCurrentUser());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      {/* <h1>
        <a href="/" class="navbar_maintext">
          MovieApp
        </a>
      </h1> */}

      <div className="navbar_links">
        <DarkMode />
        <Link to="/popular">
          인기작품
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </Link>
        <Link to="/top_rated">
          최고평점
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </Link>
        <Link to="/upcoming">
          예정작품
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </Link>

        {!currentUser && (
          <div>
            <Link to="/login" className="small-text">
              로그인
              <img className="navbar_emoji" src={Mojji} alt="login" />
            </Link>
            <Link to="/register" className="small-text">
              회원가입
              <img className="navbar_emoji" src={Goguma} alt="register" />
            </Link>
          </div>
        )}

        {currentUser && (
          <div>
            <Link to="/profile" className="nav-link">
              {/* 로그인 했을때 username을 보여줌 */}
              {currentUser.username}
            </Link>
            <a href="##" className="nav-link" onClick={logout}>
              로그아웃
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
