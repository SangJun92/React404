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
  const [originalContent, setOriginalContent] = useState('');

  const handleEdit = () => {
    setOriginalContent(editedContent);
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditComment(comment.id, editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(originalContent);
    setIsEditing(false);
  };

  return (
    <Wrapper>
      {isEditing ? (
        <>
          <EditInput
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <ContentText>{editedContent}</ContentText>
          <button onClick={handleEdit}>수정</button>
        </>
      )}
    </Wrapper>
  );
}

export default CommentListItem;
