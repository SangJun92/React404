import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보이는 페이지</p>
      <button onClick={() => navigate("/profile/seo")}>서상준</button>
      <button onClick={() => navigate("/profile/park")}>박성언</button>
      <button onClick={() => navigate("/profile/you")}>유다인</button>
    </div>
  );
}

export default Home;
