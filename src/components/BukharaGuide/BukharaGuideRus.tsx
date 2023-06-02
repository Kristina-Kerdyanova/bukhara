import React from "react";
import BukharaGuideData from "../../bukharaGuide.json";
import {
  StyledBukharaGuide,
  BukharaGuideTitle,
  BukharaGuideList,
} from "./style";
import { BukharaGuideCardRus } from "./BukharaGuideCardRus";

export const BukharaGuideRus = () => {
  return (
    <StyledBukharaGuide>
      <BukharaGuideTitle>Гайд по Бухаре</BukharaGuideTitle>
      <BukharaGuideList>
        {BukharaGuideData.map(({ ident }) => (
          <BukharaGuideCardRus ident={ident} />
        ))}
      </BukharaGuideList>
    </StyledBukharaGuide>
  );
};
