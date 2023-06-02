import { IArticle } from "../../types";
import { TextList } from "../TextList/TextList";
import {
  StyledArticleCard,
  ArticleImageContainer,
  ArticleImage,
  ArticleTitle,
} from "./style";
import { Helmet } from "react-helmet";

export const ArticleCard = ({ name, img, text, ident, title, description, keywords }: IArticle) => {
  const texts = text.split("\n");
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <StyledArticleCard>
        <ArticleTitle>{name}</ArticleTitle>
        <ArticleImageContainer>
          <ArticleImage src={img} alt={name} />
        </ArticleImageContainer>
        <TextList details={texts} />
      </StyledArticleCard>
    </>
  );
};