import React from "react";
import styled from "styled-components";
import articleData from "../../article.json";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { ArticleTitle } from "../ArticleCard/style";

export const PageArticle = (ident:string) => {
  // const { ident = "tours" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if(!detail) {
    return null;
  }

  return (
    <StyledPageArticle>
      <PageArticleContainer>
        <ArticleTitle>{detail.name}</ArticleTitle>
        <PageArticleContent>
          <ArticleCard {...detail} />
        </PageArticleContent>
      </PageArticleContainer>
    </StyledPageArticle>
  );
};

export const StyledPageArticle = styled.div``;

export const PageArticleContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const PageArticleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;