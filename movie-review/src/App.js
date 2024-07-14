import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import MovieList from './components/MovieList/MovieList';
import Fire from './assets/fire.png';
import Star from './assets/glowing-star.png';
import Party from './assets/partying-face.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import View from './pages/view/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="인기작품" emoji={Fire} />}
          />
          <Route
            path="/popular"
            element={<MovieList type="popular" title="인기작품" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList type="top_rated" title="최고평점" emoji={Star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="예정작품" emoji={Party} />
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
