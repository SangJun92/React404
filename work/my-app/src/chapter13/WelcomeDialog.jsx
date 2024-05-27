import React, { useState } from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function WelcomeDialog(props){
    return(
        <Dialog
        title="어서오세요"
        message="우리 사이트에 방문하신 것을 환영합니다." />
    );
}

function SignUpDialog(props) {
    const [nickName, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignUp = () => {
        alert(`어서오세요, ${nickName}님!`);
    }

    return (
        <Dialog title = "화성 탐사 프로그램" message="우리 사이트에 방문하신 것을 환영합니다.">

                <input value={nickName} onChange={handleChange}></input>
                        <button onClick={handleSignUp}>가입하기</button>
                        </Dialog>
    )
}

export default WelcomeDialog;