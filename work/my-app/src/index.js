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

const root = ReactDOM.createRoot(document.getElementById("root"));

// 시계만들기
setInterval(() => { 
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library/> */}
    {/* <StudentList/> */}
    {/* <Library2/> */}
    {/* <ConfirmDialog /> */}
    <Clock />
  </React.StrictMode>
);
}, 1000); // 1초에 한번씩

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
