import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter03/Library";
import StudentList from "./chapter03/StudentList";
import Library2 from "./chapter03/Library2";
import ConfirmDialog from "./chapter04/ConfirmDialog";
import Clock from "./chapter04/Clock";
import PropsEx from "./chapter05/PropsEx";
import CommentList from "./chapter05/CommentList";
import BoardList from "./chapter05/BoardList";
import NotificationList from "./chapter06/NotificationList";
import Counter from "./chapter07/Counter";
import Info from "./chapter07/Info";
import Average from "./chapter07/Average";
import Accommodate from "./chapter07/Accommodate";
import Say from "./chapter08/Say";
import Toggle from "./chapter08/Toggle";
import ConfirmButton from "./chapter08/ConfirmButton";
import EventPractice from "./chapter08/EventPractice";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 시계만들기
// setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library/> */}
    {/* <StudentList/> */}
    {/* <Library2/> */}
    {/* <ConfirmDialog /> */}
    {/* <Clock /> */}
    {/* <PropsEx /> */}
    {/* <CommentList /> */}
    {/* <BoardList /> */}
    {/* <NotificationList /> */}
    {/* <Counter /> */}
    {/* <Info /> */}
    {/* <App /> */}
    {/* <Average /> */}
    {/* <Accommodate /> */}
    {/* <Say /> */}
    {/* <Toggle /> */}
    {/* <ConfirmButton /> */}
    < EventPractice />
  </React.StrictMode>
);
// }, 1000); // 1초에 한번씩

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
