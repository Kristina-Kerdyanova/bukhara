import React from "react";
import {
  FooterBlock,
  FooterContainer,
  FooterImage,
  FooterLink,
  FooterList,
  FooterNavigation,
  FooterText,
  FooterTitle,
  StyledFooter,
} from "./style";
import { Line } from "../Line/Line";

export const Footer = () => {
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
          {/* <FooterText>Find us:</FooterText> */}
          <FooterNavigation>
            <FooterList>
              <FooterLink
                href="https://www.facebook.com/advantour/"
                target="_blank"
              >
                <FooterImage src="../icons/facebook.svg" alt="facebook" />
              </FooterLink>
              <FooterLink
                href="https://www.instagram.com/advantourcom/"
                target="_blank"
              >
                <FooterImage src="../icons/instagram.svg" alt="instagram" />
              </FooterLink>
              <FooterLink href="https://twitter.com/advantour" target="_blank">
                <FooterImage src="../icons/twitter.svg" alt="twitter" />
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/user/advantourcom"
                target="_blank"
              >
                <FooterImage src="../icons/youtube.svg" alt="youtube" />
              </FooterLink>
            </FooterList>
          </FooterNavigation>
        </FooterBlock>
      </FooterContainer>
    </StyledFooter>
  );
};
