import React from "react";
import BukharaGuideData from "../../bukharaGuide.json";
import {
  StyledBukharaGuide,
  BukharaGuideTitle,
  BukharaGuideList,
} from "./style";
import { BukharaGuideCard } from "./BukharaGuideCard";

export const BukharaGuide = () => {
  return (
    <StyledBukharaGuide>
      <BukharaGuideTitle>BUKHARA GUIDE</BukharaGuideTitle>
      <BukharaGuideList>
        {BukharaGuideData.map(({ ident }) => (
          <BukharaGuideCard ident={ident} />
        ))}
      </BukharaGuideList>
    </StyledBukharaGuide>
  );
};
