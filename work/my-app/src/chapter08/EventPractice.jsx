import React, { useState } from "react";

function EventPractice(props) {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const [outUsername, setOutUsername] = useState("");
  const [outMessage, setOutMessage] = useState("");

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  // const [message, setMessage]=useState('');
  // const [username, setUsername]=useState('');
  // const onChangeMessage = e => setMessage(e.target.value);
  // const onChangsetUsername = e => setUsername(e.target.value);

  // const onClick = () => {
  //     alert(message);
  //     setMessage('');
  //     setUsername('');
  // }

  const onClick = () => {
    alert(username + " : " + message);
    // setOut~~ : 확인 누르면 결과가 남음
    setOutMessage(message);
    setOutUsername(username);
    setForm({ username: "", message: "" });
  };

  return (
    <div>
      <h1> 이벤트 실습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명을 입력하세요"
        onChange={onChange}
        value={username}
      />

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요2"
        onChange={onChange}
        value={message}
      />
      <h1>사용자명 : {outUsername} </h1>
      <h1>메시지 : {outMessage} </h1>
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice;
