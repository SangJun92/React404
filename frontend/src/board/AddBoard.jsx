import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddBoard() {
  let navigate = useNavigate();
  const [board, setBoard] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const { title, content, writer } = board;
  const onInputChange = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
    console.log(board);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(board);
    await axios.post("http://localhost:8082/board", board);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">글쓰기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                제목
              </label>
              <input
                onChange={onInputChange}
                type="text"
                id="title"
                className="form-control"
                placeholder="글제목 입력"
                name="title"
              />
              <label htmlFor="name" className="form-label">
                내용
              </label>
              <input
                onChange={onInputChange}
                type="text"
                id="content"
                className="form-control"
                placeholder="글내용 입력"
                name="content"
              />
              <label htmlFor="name" className="form-label">
                작성자
              </label>
              <input
                onChange={onInputChange}
                type="text"
                id="writer"
                className="form-control"
                placeholder="이름 입력"
                name="writer"
              />
            </div>
            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                저장
              </button>
              <Link
                to="/"
                type="submit"
                className="btn btn-outline-danger px-3 mx-2"
              >
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBoard;
