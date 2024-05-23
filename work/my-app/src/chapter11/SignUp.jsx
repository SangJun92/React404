import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handelChangeName = (event) => {
    setName(event.target.value);
  };
  const handelChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handelChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handelChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별 : ${gender}, 주소 : ${address}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <b>이름: </b>
        <input type="text" value={name} onChange={handelChangeName} />
      </label>
      <br></br>
      <label>
        성별:
        <select value={gender} onChange={handelChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <br></br>
      <label>
        주소:
        <input type="text" value={address} onChange={handelChangeAddress} />
      </label>
      <br></br>
      <label>
        연락처:
        <input type="text" value={phone} onChange={handelChangePhone} />
      </label>
      <br></br>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
