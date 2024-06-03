import React, { useState } from "react";

function BoardItemList(props) {
    const [boards, setBoards] = useState([
        {
            id : 1, 
            name : 'A',
            title : '제목1',
            content : '내용1',
        },
        {
            id : 2, 
            name : 'B',
            title : '제목2',
            content : '내용2',
        },
        {
            id : 3, 
            name : 'C',
            title : '제목3',
            content : '내용3',
        },
    ]);

    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [nextId, setNextId] = useState(3);

    const onChangeName = e => setInputName(e.target.value);
    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContent = e => setInputContent(e.target.value);

    const onClick = () =>{
        const nextBoards = boards.concat({
            id : nextId, 
            name : inputName,
            title : inputTitle,
            content : inputContent,
        });

        setNextId(nextId + 1);
        setBoards(nextBoards);
        setInputName('');
        setInputTitle('');
        setInputContent('');
    }

    const boardList = boards.map (board =>
        <div key={board.id}>
            <div>name : {board.name}</div>
            <div>title : {board.title}</div>
            <div>content : {board.content}</div>
            <hr></hr>
        </div>
    );

    return (
        <>
        <input value={inputName} onChange={onChangeName} />
        <input value={inputTitle} onChange={onChangeTitle} />
        <input value={inputContent} onChange={onChangeContent} />
        <button onClick={onClick}>추가</button>
        <div>{boardList}</div>
        </>
    )
}

export default BoardItemList;