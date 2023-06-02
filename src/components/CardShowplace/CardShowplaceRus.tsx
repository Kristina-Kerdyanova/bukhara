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

export const CardShowplaceRus = ({ ident }: Pick<IAttraction, "ident">) => {
  const details = attractionsData.find((attraction) => attraction.ident === ident);
  if (!details) {
    return null;
  }
  
  return (
    <StyledCardShowplace>
      <CardShowplaceLink className="CardShowplace-link" to={`/rus/sights/${ident}.htm`}>
        <CardShowplaceImage src={details.img} alt={details.name_rus} />
        <CardShowplaceContent>
          <CardShowplaceTitle>{details.name_rus}</CardShowplaceTitle>
          <CardShowplaceLinkContainer>
            <CardShowplaceText>
              Читать
            </CardShowplaceText>
          </CardShowplaceLinkContainer>
        </CardShowplaceContent>
      </CardShowplaceLink>
    </StyledCardShowplace>
  );
};