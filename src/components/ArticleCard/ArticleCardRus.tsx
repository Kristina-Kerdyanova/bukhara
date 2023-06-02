import { IArticleRus } from "../../types";
import { TextList } from "../TextList/TextList";
import {
  StyledArticleCard,
  ArticleImageContainer,
  ArticleImage,
  ArticleTitleRus,
} from "./style";
import { Helmet } from "react-helmet";

export const ArticleCardRus = ({ name_rus, img, text_rus, title_rus, description_rus, keywords_rus, ident }: IArticleRus) => {
  const texts = text_rus.split("\n");

  return (
    <>
      <Helmet>
        <title>{title_rus}</title>
        <meta name="description" content={description_rus} />
        <meta name="keywords" content={keywords_rus} />
      </Helmet>
      <StyledArticleCard>
        <ArticleTitleRus>{name_rus}</ArticleTitleRus>
        <ArticleImageContainer>
          <ArticleImage src={`../${img}`} alt={name_rus} />
        </ArticleImageContainer>
        <TextList details={texts} />
      </StyledArticleCard>
    </>
  );
};