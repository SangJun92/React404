import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import { useState } from "react";
import data from "./data.json";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const [posts, setPosts] = useState(data);

  const onDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <BrowserRouter>
      <MainTitleText>상준의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route
          path="post/:postId"
          element={<PostViewPage onDelete={onDeletePost} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
