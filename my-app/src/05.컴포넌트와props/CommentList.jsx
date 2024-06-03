import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "A",
        comment : "hi",
    },
    {
        name : "B",
        comment : "nice to meet you",
    },
    {
        name : "c",
        comment : "have a good time",
    },
]


function CommentList(props){
    return (
        <div>
            {comments.map((comment) =>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;