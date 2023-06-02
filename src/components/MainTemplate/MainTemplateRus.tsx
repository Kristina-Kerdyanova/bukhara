import React from "react";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { StyledMainTemplate, Container, ContainerContent } from "./style";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderRus } from "../Header/HeaderRus";
import { BukharaGuideRus } from "../BukharaGuide/BukharaGuideRus";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const MainTemplateRus = () => {
  ScrollToTop();
  return (
    <StyledMainTemplate>
      <HeaderRus />
      <Container>
        <ButtonBack />
        <ContainerContent>
          <Outlet />
          <BukharaGuideRus />
        </ContainerContent>
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};