import React from "react";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Mojji from "../../assets/Mojji.jpg";
import Goguma from "../../assets/Goguma.png";

export default function Navbar() {
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
        <Link to="/login" className="small-text">
          로그인
          <img className="navbar_emoji" src={Mojji} alt="login" />
        </Link>
        <Link to="/register" className="small-text">
          회원가입
          <img className="navbar_emoji" src={Goguma} alt="register" />
        </Link>
      </div>
    </nav>
  );
}
