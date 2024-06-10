import React from "react";
import styled from "styled-components";
import NewsItem from "./NesItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/106",
// };

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          // "https://newsapi.org/v2/top-headlines?country"
          // "https://newsapi.org/v2/everything?country=kr&q=tesla&from=2024-05-10&sortBy=publishedAt&apiKey=4c49a11e1bae445ba44fce8985736539?country"
          // "https://newsapi.org/v2/top-headlines?country=kr&sources=techcrunch&apiKey=4c49a11e1bae445ba44fce8985736539"
          // "https://newsapi.org/v2/top-headlines?country=Kr&category=business&apiKey=3689ab959f5f4db9b9efb83b051822f5"
          // "https://newsapi.org/v2/everything?country=Kr&domains=wsj.com&apiKey=4c49a11e1bae445ba44fce8985736539"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
