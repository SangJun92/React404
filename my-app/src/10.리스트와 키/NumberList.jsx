import React from "react";

function NumberList(props) {
    const numbers = [1,2,3,4,5];

    const listItem = numbers.map((number) =>
    <li key = {number.toString()}>{number}</li>
    );

    return (
        <ul>{listItem}</ul>
    )
}

export default NumberList;