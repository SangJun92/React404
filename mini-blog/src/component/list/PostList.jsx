import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const ListWrapper = styled.div`
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <ListWrapper>
      {posts.map((post) => (
        <Item key={post.id}>
          <div onClick={() => onClickItem(post)}>{post.title}</div>
        </Item>
      ))}
    </ListWrapper>
  );
};

export default PostList;