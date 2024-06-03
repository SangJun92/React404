import React from "react";

const students = [
    {
        id:1,
        name: "김서현"
    },
    {
        id:2,
        name: "박성언"
    },
    {
        id:3,
        name: "스상준"
    },
    {
        id:4,
        name: "신효은"
    }
];

function StudentList(props) {
    return(
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
                // return <li key={index}>{student.name}</li>
                // -> key가 없으면 index 사용
            })}
        </ul>
    )
}

export default StudentList;