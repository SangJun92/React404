import React from "react";

function Welcome(props) {
    return (
        <h1>안녕, {props.name}</h1>
    );
}

function Board(props) {
    return (
        <div>
            <h1>제목 : {props.title}</h1>
            <h2>작성자 : {props.writer}</h2>
            <h3>내용 : {props.content}</h3>
        </div>
    )
}


function PropsEx(props) {
    return (
        <div>
            <div>
                <Welcome name="부산"></Welcome>
            </div>
            <div>
                <Board title="title1" writer="A" content="content1"></Board>
                <Board title="title2" writer="B" content="content2"></Board>
            </div>
        </div>
        // 리턴은 하나의 객체로만
    )
}

export default PropsEx;