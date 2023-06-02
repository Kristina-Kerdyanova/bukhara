import React from "react";
import {
  StyledCardShowplace,
  CardShowplaceImage,
  CardShowplaceTitle,
  CardShowplaceLink,
  CardShowplaceContent,
  CardShowplaceLinkContainer,
  CardShowplaceText,
} from "./style";
import { IAttraction } from "../../types";
import attractionsData from "../../attractions.json";

export const CardShowplace = ({ ident }: Pick<IAttraction, "ident">) => {
  const details = attractionsData.find((attraction) => attraction.ident === ident);
  if (!details) {
    return null;
  }
  
  return (
    <StyledCardShowplace>
      <CardShowplaceLink className="CardShowplace-link" to={`/sights/${ident}.htm`}>
        <CardShowplaceImage src={details.img} alt={ident} />
        <CardShowplaceContent>
          <CardShowplaceTitle>{details.name}</CardShowplaceTitle>
          <CardShowplaceLinkContainer>
            <CardShowplaceText>
              Read
            </CardShowplaceText>
          </CardShowplaceLinkContainer>
        </CardShowplaceContent>
      </CardShowplaceLink>
    </StyledCardShowplace>
  );
};