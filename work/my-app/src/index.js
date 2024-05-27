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
import Greeting from "./chapter09/Greeting";
import LoginControl from "./chapter09/LoginControl";
import LandingPage from "./chapter09/LandingPage";
import NumberList from "./chapter10/NumberList";
import StudentItemList from "./chapter10/StudentItemList";
import InterationSample from "./chapter10/InterationSample";
import BoardItemList from "./chapter10/BoardItemList";
import NameForm from "./chapter11/NameForm";
import SignUp from "./chapter11/SignUp";
import Calculator from "./chapter12/Calculator";
import TemperatureInput from "./chapter12/TemperatureInput";
import WelcomeDialog from "./chapter13/WelcomeDialog";
import ProfileCard from "./chapter13/ProfileCard";
import Maintest from "./chapter14/MainTest";
import DarkOrLight from "./chapter14/DarkOrLight";
import MainPage from "./chapter15/MainPage1";
import MainPage1 from "./chapter15/MainPage1";
import Blocks from "./chapter15/Blocks";

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
    {/* < EventPractice /> */}
    {/* <Greeting /> */}
    {/* <LoginControl /> */}
    {/* <LandingPage /> */}
    {/* <NumberList/> */}
    {/* <StudentItemList /> */}
    {/* <InterationSample /> */}
    {/* <BoardItemList /> */}
    {/* <NameForm /> */}
    {/* <SignUp /> */}
    {/* <Calculator /> */}
    {/* <WelcomeDialog /> */}
    {/* <TemperatureInput /> */}
    {/* <ProfileCard /> */}
    {/* <Maintest /> */}
    {/* <DarkOrLight /> */}
    {/* <MainPage /> */}
    {/* <MainPage1 /> */}
    <Blocks />
  </React.StrictMode>
);
// }, 1000); // 1초에 한번씩

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
