import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [boards, setBoadrs] = useState([]);

  //   // 수정하기
  //   const loadUsers = async () => {
  //     const result = await axios.get("http://localhost:8082/users");
  //     setUsers(result.data);
  //     // console.log(result);
  //   };

  //   useEffect(() => {
  //     loadUsers();
  //   }, []);

  //   // 삭제하기
  //   const deleteUser = async (id) => {
  //     if (window.confirm(`${id}번 게시물을 삭제하시겠습니까?`)) {
  //       await axios.delete(`http://localhost:8082/user/${id}`);
  //       loadUsers();
  //     }
  //   };

  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
            <th scope="col">작성자</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        {boards.map((board, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <th>{board.title}</th>
            <th>{board.content}</th>
            <th>{board.write}</th>
            <th>{board.hit}</th>
            <th>{board.create_time}</th>
            {/* <th>
              <Link
                to={`viewuser/${user.id}`}
                className="btn btn-outline-secondary mx-2"
              >
                보기
              </Link>
              <Link
                to={`edituser/${user.id}`}
                className="btn btn-outline-warning mx-2"
              >
                수정
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-outline-danger mx-2"
              >
                삭제
              </button>
            </th> */}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Main;
