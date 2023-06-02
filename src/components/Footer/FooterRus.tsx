import React from "react";
import {
  FooterBlock,
  FooterContainer,
  FooterItem,
  FooterLink,
  FooterList,
  FooterText,
  FooterTitle,
  StyledFooter,
} from "./style";
import { Line } from "../Line/Line";

export const FooterRus = () => {
  return (
    <StyledFooter>
      <Line />
      <FooterContainer>
        <FooterBlock>
          <FooterTitle>Bukhara Hotels</FooterTitle>
          <FooterText>T: +998 78 1503020</FooterText>
          <FooterText>Email: tashkent@advantour.com</FooterText>
        </FooterBlock>
        <FooterBlock>
          <FooterText>Find us:</FooterText>
          <FooterList>
            <FooterList>
              <FooterLink></FooterLink>
            </FooterList>
          </FooterList>
        </FooterBlock>
      </FooterContainer>
    </StyledFooter>
  );
};
