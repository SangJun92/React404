import React from 'react';
import styled from 'styled-components';

const StyleTextArea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
        height : ${props.height}px;
    `}
  padding : 16px;
  font-size: 16px;
  line-height: 20px;
`;

// text input 컴포넌트 : 사용자로부터 내용을 입력받는 컴포넌트, 블로그의 글이나 댓글을 작성하기 위해서 사용하게 된다

// 텍스트인풋이라는 함수 컴포넌트를 만든다.
// 텍스트인풋의 프롭스로는 높이 설정을 위한 height, 입력된 값을 표시하기 위한 value, 변경된 값을 상위 컴포넌트로 전달하기 위한 onChange가 있다.
// 텍스트에어리어에 스타일을 입힌 스타일드텍스트에어리어를 만듬

function TextInput(props) {
  const { height, value, onChange } = props;
  return <StyleTextArea height={height} value={value} onChange={onChange} />;
}
export default TextInput;
