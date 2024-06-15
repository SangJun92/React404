// Navbar.jsx
import React from 'react';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import DarkMode from '../DarkMode/DarkMode'; // DarkMode 컴포넌트를 가져옵니다.
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        {/* DarkMode 컴포넌트를 여기서 렌더링합니다. */}
        <DarkMode />
        <a href="">
          인기순
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </a>
        <a href="">
          평점순
          <img className="navbar_emoji" src={Star} alt="star emoji" />
        </a>
        <a href="">
          최신순
          <img className="navbar_emoji" src={Party} alt="party emoji" />
        </a>
      </div>
    </nav>
  );
}
