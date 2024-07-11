import React from "react";

import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

import "./DarkMode.css";

const DarkMode = () => {
  const setDarkTheme = () =>
    document.querySelector("body").setAttribute("data-theme", "dark");
  const setLightTheme = () =>
    document.querySelector("body").setAttribute("data-theme", "light");
  const toggleTheme = (e) =>
    e.target.checked ? setDarkTheme() : setLightTheme();

  // 시작시 다크모드로 버튼 체크가 안되어있음, Sun, Moon 주석해제하면 오류나옴
  setLightTheme(); //처음 시작시 다크테마로 시작 -> 화이트모드로 변경했음(첫시작시 버튼이 안됨)
  return (
    <div className="dark_mode">
      <input
        onChange={toggleTheme}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
