import { CardHotelDetails } from "../components/CardHotelDetails/CardHotelDetails";
import { useParams } from "react-router-dom";
import hotelsData from "../hotels.json";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const DetailsHotel = () => {
  ScrollToTop();
  const { ident = "" } = useParams();
  const detail = hotelsData.find((hotel) => hotel.ident === ident);
  if (!detail) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{detail.title}</title>
        <meta name="description" content={detail.description} />
        <meta name="keywords" content={detail.keywords} />
      </Helmet>
      <StyledDetaislHotel>
        <Header />
        <DetailsHotelContainer>
          <ButtonBack />
          <CardHotelDetails {...detail} />
        </DetailsHotelContainer>
        <Footer />
      </StyledDetaislHotel>
    </>
  );
};

const StyledDetaislHotel = styled.div``;

const DetailsHotelContainer = styled.div`
  max-width: 1200px;
  margin: 25px auto 0;
  /* padding: 0 20px; */
`;
