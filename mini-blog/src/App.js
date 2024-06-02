import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import { useState } from 'react';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  // const [todo, setTodo] = useState(mockTodo);

  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todo.map((it) => {
  //       if (it.id === targetId) {
  //         return {
  //           ...it,
  //           isDone: !it.isDone,
  //         };
  //       } else {
  //         return it;
  //       }
  //     })
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));
  // };
  // return (
  //   <div className="App">
  //     {/* <div>Header</div> */}
  //     <Header />
  //     <TodoEditor onCreate={onCreate} />
  //     <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <MainTitleText>상준의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route
          path="post/:postId"
          element={<PostViewPage />}
          // onUpdate={onUpdate}
          // onDelete={onDelete}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
