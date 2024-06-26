import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8082/user/${id}`);
    setUser(result.data);
  };
  const { name, username, email } = user;
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저정보</h2>
          <div className="card">
            <div className="card-header">
              유저ID : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>이름: {name} </b>
                </li>
                <li className="list-group-item">
                  <b>유저네임: {username} </b>
                </li>
                <li className="list-group-item">
                  <b>이메일: {email} </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btnbtn-primary my-2" to={"/"}>
            돌아기기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
