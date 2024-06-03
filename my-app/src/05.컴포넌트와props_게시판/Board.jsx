import React from "react";
import UserInfo from "./UserInfo";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },



    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },

    imageContainer: {
        justifyContent: "center"
    },

    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },



    commentText: {
        color: "black",
        fontSize: 16,
    },

    dateText: {
        color: "black",
        fontSize: 16,
    },
}


function Board(props) {
    return (
        <div style={styles.wrapper}>
            <UserInfo src={props.imgUrl} name={props.name} />
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.title}</span>
                <span style={styles.commentText}>{props.comment}</span>
                <span style={styles.dateText}>{props.regDate}</span>
            </div>
        </div>
    )
}

export default Board;