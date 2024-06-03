import React, {useState} from "react";

function EventPractice(props) {
    const [form, setForm] = useState({
        username:'',
        message:'',
    });

    const [outUsername, setOutUsername] = useState('');
    const [outMessage, setOutMessage] = useState('');

    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm)
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setOutUsername(username);
        setOutMessage(message);
        setForm({username : '', message : ''});
    }

    return (
        <div>
            <h1>이벤트 실습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명을 입력하세요"
                onChange={onChange}
                value={username} />

            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                onChange={onChange}
                value={message}/>

            <button onClick={onClick}>확인</button>

            <h1>사용자명 : {outUsername}</h1>
            <h1>메세지 : {outMessage}</h1>
        </div>
    )
}

export default EventPractice;