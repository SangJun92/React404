import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
  padding: 1px;
  width: calc(100%-32px);
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

// const styles = StyleSheet.create({
//   back: {
//     alignItems: 'center',
//   },
// });

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <TextInput
          height={240}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button title="글 작성하기" onClick={() => navigate('/')} />
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate('/');
          }}
        />
        {/* <View style={styles.back}>
          <Button title="뒤로가기" onClick={() => navigate('/')} />
        </View> */}
      </Container>
    </Wrapper>
  );
}
export default PostWritePage;
