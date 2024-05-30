import logo from "./logo.svg";
import "./App.css";

import {BrowerRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import MainPage from "./component/page/MainPage"
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weigth: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowerRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowerRouter>
  );
}

export default App;
