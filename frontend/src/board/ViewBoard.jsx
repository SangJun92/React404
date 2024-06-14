import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewBoard() {
  const { bno } = useParams();
  const [board, setBoard] = useState({
    name: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8082/board/${bno}`);
    setBoard(result.data);
  };
  const { title, content, writer, hit, createTime } = board;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">글보기</h2>
          <div className="card">
            <div className="card-header">
              유저ID : {bno}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>제목: {title} </b>
                </li>
                <li className="list-group-item">
                  <b>내용: {content} </b>
                </li>
                <li className="list-group-item">
                  <b>작성자: {writer} </b>
                </li>
                <li className="list-group-item">
                  <b>작성일: {createTime} </b>
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

export default ViewBoard;
