import React from "react";
import Student from "./Student";

function StudentList(props) {
    return (
        <div>
            <Student sno={1} name = "홍길동" major = "컴퓨터공학과"/>
            <Student sno={2} name = "김서현" major = "경영학과"/>
            <Student sno={3} name = "유다인" major = "멀티미디어"/>
        </div>
    )
}

export default StudentList;