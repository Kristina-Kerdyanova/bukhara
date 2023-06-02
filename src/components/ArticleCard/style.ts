import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledArticleCard = styled.section`
  max-width: 750px;
  margin: 0 20px;
`;

const ArticleTitle = styled.h1`
  ${typography.H1}
  letter-spacing: 0;
`;

const ArticleTitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
  font-size: 46px;
  line-height: 51px;
`;

const ArticleImage = styled.img`
  max-width: 600px;
  width: 100%;
  margin: auto auto 30px;
  border-radius: 5px;
`;

const ArticleImageContainer = styled.div`
  text-align: center;
`;

export { StyledArticleCard, ArticleImage, ArticleImageContainer, ArticleTitle, ArticleTitleRus };
