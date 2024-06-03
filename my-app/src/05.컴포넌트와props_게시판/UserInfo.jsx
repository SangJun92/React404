import React from "react";

const styles = {
    imageContainer: {},

    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },
}

function UserInfo(props) {
    return (
        <div style={styles.imageContainer}>
            <img src={props.src} style={styles.image} />
            <th ></th>
            <span style={styles.nameText}>{props.name}</span>

        </div>
    );
}


export default UserInfo;