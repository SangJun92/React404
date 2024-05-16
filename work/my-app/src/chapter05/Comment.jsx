import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    // justifyContent: "center",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
  commponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <div>
          <img
            // src="https://media.bunjang.co.kr/product/243840406_1_1702417485_w360.jpg"
            src={props.imgsrc}
            style={styles.image}
          />
          <span style={styles.nameText}>{props.name}</span>
        </div>
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.commponentTitle}>{props.title}</span>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
        <span style={styles.nametoday}>{props.today}</span>
      </div>
    </div>
  );
}

export default Comment;
