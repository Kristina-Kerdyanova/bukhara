import {
  BukharaGuideCardContainer,
  BukharaGuideCardImage,
  BukharaGuideCardLink,
  BukharaGuideCardText,
  BukharaGuideCardTitle,
  StyledBukharaGuideCard,
} from "./style";
import articleData from "../../article.json";
import { IArticle } from "../../types";

export const BukharaGuideCard = ({ ident }: Pick<IArticle, "ident">) => {
  const details = articleData.find((articles) => articles.ident === ident);
  if (!details) {
    return null;
  }

  return (
    <StyledBukharaGuideCard>
      <BukharaGuideCardLink to={details.link}>
        <BukharaGuideCardImage src={details.img} alt={details.name} />
        <BukharaGuideCardContainer>
          <BukharaGuideCardTitle>{details.short_name}</BukharaGuideCardTitle>
          <BukharaGuideCardText>Read</BukharaGuideCardText>
        </BukharaGuideCardContainer>
      </BukharaGuideCardLink>
    </StyledBukharaGuideCard>
  );
};
