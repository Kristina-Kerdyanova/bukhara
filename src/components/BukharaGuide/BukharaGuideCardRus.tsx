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

export const BukharaGuideCardRus = ({ ident }: Pick<IArticle, "ident">) => {
  const details = articleData.find((articles) => articles.ident === ident);
  if (!details) {
    return null;
  }

  return (
    <StyledBukharaGuideCard>
      <BukharaGuideCardLink to={details.link_rus}>
        <BukharaGuideCardImage src={details.img} alt={details.name_rus} />
        <BukharaGuideCardContainer>
          <BukharaGuideCardTitle>{details.short_name_rus}</BukharaGuideCardTitle>
          <BukharaGuideCardText>Читать</BukharaGuideCardText>
        </BukharaGuideCardContainer>
      </BukharaGuideCardLink>
    </StyledBukharaGuideCard>
  );
};
