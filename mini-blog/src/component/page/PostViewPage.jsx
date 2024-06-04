import React, { useState } from 'react';
import styled from 'styled-components';
import CommentList from '../list/Comment'; // 댓글 목록을 표시하는 컴포넌트
import TextInput from '../ui/TextInput'; // 텍스트 입력을 위한 컴포넌트
import Button from '../ui/Button'; // 버튼 컴포넌트
import { useNavigate, useParams } from 'react-router-dom'; // 라우팅을 위한 훅

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const CommentInputWrapper = styled.div`
  margin-top: 16px;
`;

function PostViewPage({ posts, deletePost, editPost }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  // URL의 postId에 해당하는 글을 찾음
  const post = posts.find((item) => item.id === parseInt(postId));

  const [isEditing, setIsEditing] = useState(false); // 글 수정 상태 여부를 관리
  const [title, setTitle] = useState(post ? post.title : ''); // 제목 상태를 관리
  const [content, setContent] = useState(post ? post.content : ''); // 내용 상태를 관리
  const [comment, setComment] = useState(''); // 댓글 입력 상태를 관리

  // 수정 완료 시 처리하는 함수
  const handleEditSubmit = () => {
    editPost(post.id, title, content); // 수정된 글 내용을 적용
    setIsEditing(false); // 수정 상태 해제
  };

  // 수정 취소 시 처리하는 함수
  const handleCancelEdit = () => {
    setTitle(post.title); // 기존 제목으로 되돌림
    setContent(post.content); // 기존 내용으로 되돌림
    setIsEditing(false); // 수정 상태 해제
  };

  // 댓글 작성 완료 시 처리하는 함수
  const handleCommentSubmit = () => {
    // 여기에 댓글 작성 로직을 추가
    // 예를 들어, 댓글을 서버에 저장하고 댓글 목록을 갱신하는 등의 작업을 수행
    console.log('댓글 작성 완료:', comment);
    // 입력된 댓글 초기화
    setComment('');
  };

  // 해당하는 글이 없을 경우
  if (!post) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navigate('/')} />
        <PostContainer>
          {isEditing ? ( // 수정 중일 때
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
              <ButtonContainer>
                <Button title="수정 완료" onClick={handleEditSubmit} />
                <Button title="취소" onClick={handleCancelEdit} />
              </ButtonContainer>
            </>
          ) : (
            // 수정 중이 아닐 때
            <>
              <TitleText>{post.title}</TitleText>
              <ContentText>{post.content}</ContentText>
              <ButtonContainer>
                <Button title="수정" onClick={() => setIsEditing(true)} />
                <Button
                  title="삭제"
                  onClick={() => {
                    deletePost(post.id);
                    navigate('/');
                  }}
                />
              </ButtonContainer>
            </>
          )}
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
        <CommentInputWrapper>
          <TextInput // 댓글 입력란
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="댓글을 작성해주세요."
          />
          <Button title="댓글 작성" onClick={handleCommentSubmit} />
        </CommentInputWrapper>
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
