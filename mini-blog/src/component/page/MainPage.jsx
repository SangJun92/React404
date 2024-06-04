import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import PostList from '../list/PostList';
import { useNavigate } from 'react-router-dom';

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

function MainPage({ posts }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button title="글 작성하기" onClick={() => navigate('/post-write')} />
        <PostList
          posts={posts}
          // 게시글 클릭 시 이벤트 핸들러
          onClickItem={(item) => navigate(`/post/${item.id}`)}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
