import React from "react";
import recomendedAttractionData from "../../recomendedAttraction.json";
import { ListCardAttractionContainer, ListCardAttractionLink, StyledListCardAttraction } from "./style";
import { CardShowplaceRus } from "../CardShowplace/CardShowplaceRus";
import { routers } from "../../router/routers";


export const ListCardAttractionRus = () => {
  return (
    <StyledListCardAttraction>
      <ListCardAttractionLink to={routers.ATTRACTIONS_RUS}>Достопримечательности Бухары</ListCardAttractionLink>
      <ListCardAttractionContainer>
        {recomendedAttractionData.map(({ident}) => (
          <CardShowplaceRus ident={ident}  />
        ))}
      </ListCardAttractionContainer>
    </StyledListCardAttraction>
  );
};