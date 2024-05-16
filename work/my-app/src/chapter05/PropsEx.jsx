import React from "react";

function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

function Board(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <h3>{props.text}</h3>
    </div>
  );
}

function PropsEx(props) {
  return (
    <div>
      <div>
        <Welcome name="소플" />
        <Welcome name="개플" />
        <Welcome name="닭플" />
        <Welcome name="용플" />
      </div>
      <div>
        <Board title="title1" author="홍길동" text="내용1" />
        <Board title="title2" author="홍길몬" text="내용2" />
      </div>
    </div>
  );
}

export default PropsEx;

// calss ClassWelcome extends React.Component (props) {
//     render(){
//     return <h1>안녕, {this.props.name}</h1>;
//     }
// }

// class ClassWelcome extends React.Component {
//   render() {
//     return <h1>안녕, {this.props.name}</h1>;
//   }
// }
