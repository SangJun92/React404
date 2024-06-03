import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function PostEditPage({ posts, editPost }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = posts.find((item) => item.id === parseInt(postId));

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const handleSubmit = () => {
    editPost(post.id, title, content);
    navigate(`/post/${post.id}`);
  };

  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <Wrapper>
      <Container>
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
        <Button title="수정하기" onClick={handleSubmit} />
      </Container>
    </Wrapper>
  );
}

export default PostEditPage;
