import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { BukharaGuide } from "../BukharaGuide/BukharaGuide";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { StyledMainTemplate, Container, ContainerContent } from "./style";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const MainTemplate = () => {
  ScrollToTop();
  return (
    <StyledMainTemplate>
      <Header />
      <Container>
        <ButtonBack />
        <ContainerContent>
          <Outlet />
          <BukharaGuide />
        </ContainerContent>
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};