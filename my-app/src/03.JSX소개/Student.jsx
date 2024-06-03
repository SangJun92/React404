import React from "react";

function Student(props) {
    return (
        <div>
            <h5>{`학번은 ${props.sno}이고, 이름은 ${props.name}이며, ${props.major} 전공입니다.`}</h5>
        </div>
    )
}

export default Student;