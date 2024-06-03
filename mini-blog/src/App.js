import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import data from './data.json';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const [posts, setPosts] = useState(data);

  const addPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id, title, content) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, title, content } : post))
    );
  };

  return (
    <BrowserRouter>
      <MainTitleText>상준의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage posts={posts} />} />
        <Route
          path="post-write"
          element={<PostWritePage addPost={addPost} />}
        />
        <Route
          path="post/:postId"
          element={
            <PostViewPage
              posts={posts}
              deletePost={deletePost}
              editPost={editPost}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
