import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

// props로 받은 title을 버튼에 표시하고, onClick 이벤트를 처리
function Button(props) {
  const { title, onClick } = props;
  return <StyleButton onClick={onClick}>{title || 'button'}</StyleButton>;
}

export default Button;
