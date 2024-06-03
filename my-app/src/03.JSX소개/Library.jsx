import React from "react";
import Book from "./Book";
import Book1 from "./Book";

    // jsx 사용
// function Library(props) {
//     return (
//         <div>
//             <Book name="처음 만난 파이썬" numOfPage = {300}/>
//             <Book name="처음 만난 AWS" numOfPage = {400}/>
//             <Book name="처음 만난 리액트" numOfPage = {500}/>
//         </div>
//     )
// }

    // jsx 미사용
function Library(props) {
    return (
        <div>
            <Book1 name="처음 만난 파이썬" numOfPage = {300}/>
            <Book1 name="처음 만난 AWS" numOfPage = {400}/>
            <Book1 name="처음 만난 리액트" numOfPage = {500}/>
        </div>
    )
}

export default Library;