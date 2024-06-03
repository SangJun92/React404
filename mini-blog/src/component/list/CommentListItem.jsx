import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

const EditInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
`;

function CommentListItem({ comment, onEditComment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setEditedContent((prevContent) => {
      onEditComment(comment.id, prevContent);
      return prevContent;
    });
    setIsEditing(false);
  };

  return (
    <Wrapper>
      {isEditing ? (
        <EditInput
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <ContentText>{editedContent}</ContentText> // 수정된 내용 반영
      )}
      {isEditing ? (
        <button onClick={handleSave}>저장</button>
      ) : (
        <button onClick={handleEdit}>수정</button>
      )}
    </Wrapper>
  );
}

export default CommentListItem;
