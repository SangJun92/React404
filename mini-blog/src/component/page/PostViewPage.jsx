import React, { useState } from "react";
import styled from "styled-components";
import CommentList from "../list/Comment";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage({ posts, deletePost, editPost }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = posts.find((item) => item.id === parseInt(postId));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const handleEditSubmit = () => {
    editPost(post.id, title, content);
    setIsEditing(false);
  };

  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navigate("/")} />
        <PostContainer>
          {isEditing ? (
            <>
              <TextInput
                height={20}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <TextInput
                height={240}
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
              <Button title="수정 완료" onClick={handleEditSubmit} />
            </>
          ) : (
            <>
              <TitleText>{post.title}</TitleText>
              <ContentText>{post.content}</ContentText>
              <Button title="수정" onClick={() => setIsEditing(true)} />
            </>
          )}
          <Button title="삭제" onClick={() => {
            deletePost(post.id);
            navigate("/");
          }} />
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;