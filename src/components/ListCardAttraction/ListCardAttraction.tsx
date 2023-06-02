import React from "react";
import recomendedAttractionData from "../../recomendedAttraction.json";
import { ListCardAttractionContainer, ListCardAttractionLink, StyledListCardAttraction } from "./style";
import { CardShowplace } from "../CardShowplace/CardShowplace";
import { routers } from "../../router/routers";


export const ListCardAttraction = () => {
  return (
    <StyledListCardAttraction>
      <ListCardAttractionLink to={routers.ATTRACTIONS}>Attractions in Bukhara</ListCardAttractionLink>
      <ListCardAttractionContainer>
        {recomendedAttractionData.map(({ident}) => (
          <CardShowplace ident={ident}  />
        ))}
      </ListCardAttractionContainer>
    </StyledListCardAttraction>
  );
};