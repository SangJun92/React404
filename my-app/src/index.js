import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./03.JSX소개/Library";
import ConfirmDialog from "./04.엘리먼트랜더링/ConfirmDialog";
import Clock from "./04.엘리먼트랜더링/Clock";
import PropsEx from "./05.컴포넌트와props/PropsEx";
import CommentList from "./05.컴포넌트와props/CommentList";
import BoardList from "./05.컴포넌트와props_게시판/BoardList";
import NotificationList from "./06.State와생명주기/NotificationList";
import Counter from "./07.Hooks/Counter";
import Info from "./07.Hooks/info";
import Average from "./07.Hooks/Average";
import Accommodate from "./07.Hooks/Accommodate";
import Say from "./08.이벤트핸들링/Say";
import Toggle from "./08.이벤트핸들링/Toggle";
import Toggle2 from "./08.이벤트핸들링/Toggle2";
import ConfirmButton from "./08.이벤트핸들링/ConfirmButton";
import EventPractice from "./08.이벤트핸들링/EventPractice";
import Greeting from "./09.조건부랜더링/Greeting";
import LoginControl from "./09.조건부랜더링/LoginControl";
import MainPage from "./09.조건부랜더링/MainPage";
import LandingPage from "./09.조건부랜더링/LandingPage";
import NumberList from "./10.리스트와 키/NumberList";
import StudentList from "./10.리스트와 키/StudentList";
import InterationSample from "./10.리스트와 키/InterationSample";
import BoardItemList from "./10.리스트와 키/BoardItemList";
import Calculator from "./12.State끌어올리기/Calculator";
import WelcomeDialog from "./13.합성vs상속/WelcomeDialog";
import ProfileCard from "./13.합성vs상속/ProfileCard";
import Maintest from "./14.컨택스트/MainTest";
import ThemeTest from "./14.컨택스트/ThemeTest";
import MainTesst from "./14.컨택스트/MainTest";
import DarkOrLight from "./14.컨택스트/DarkOrLight";

import AsyncTaskEx from "./18.비동기 통신/AsyncTaskEx";

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(() =>{
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// }, 1000)

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library /> */}
    {/* <ConfirmDialog /> */}
    {/* <PropsEx /> */}
    {/* <CommentList /> */}

    {/* <BoardList /> */}
    {/* <NotificationList /> */}
    {/* <Counter/> */}
    {/* <Info /> */}
    {/* <Average /> */}

    {/* <Accommodate /> */}

    {/* 8장 */}
    {/* <Say /> */}
    {/* <Toggle /> */}
    {/* <Toggle2 /> */}
    {/* <ConfirmButton /> */}
    {/* <EventPractice /> */}

    {/* 9장 */}
    {/* <Greeting /> */}
    {/* <LoginControl /> */}
    {/* <MainPage /> */}
    {/* <LandingPage /> */}

    {/* 10장 */}
    {/* <NumberList /> */}
    {/* <StudentList /> */}
    {/* <InterationSample /> */}
    {/* <BoardItemList /> */}

    {/* 12장 */}
    {/* <Calculator /> */}

    {/* 13장 */}
    {/* <WelcomeDialog /> */}
    {/* <ProfileCard/> */}

    {/* 14장 */}
    {/* <ThemeTest/> */}
    {/* <MainTest/> */}
    {/* <DarkOrLight/> */}

    {/* 15장 */}
    {/* <MainPage2/> */}
    {/* <Blocks/> */}

    {/* 18장 */}
    <AsyncTaskEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
