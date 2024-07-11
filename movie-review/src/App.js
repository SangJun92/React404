import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// import MovieList from "./components/MovieList/MovieList";
// import Fire from "./assets/fire.png";
// import Star from "./assets/glowing-star.png";
// import Party from "./assets/partying-face.png";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MovieList /> */}
      {/* <MovieList type="popular" title="인기작품" emoji={Fire} />
      <MovieList type="top_rated" title="최고평점" emoji={Star} />
      <MovieList type="upcoming" title="예정작품" emoji={Party} /> */}
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
