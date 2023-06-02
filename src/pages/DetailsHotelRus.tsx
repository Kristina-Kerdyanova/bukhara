import { useParams } from "react-router-dom";
import hotelsData from "../hotels.json";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import styled from "styled-components";
import { Footer } from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { HeaderRus } from "../components/Header/HeaderRus";
import { CardHotelDetailsRus } from "../components/CardHotelDetails/CardHotelDetailsRus";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const DetailsHotelRus = () => {
  ScrollToTop();
  const { ident = "" } = useParams();
  const detail = hotelsData.find((hotel) => hotel.ident === ident);
  if (!detail) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{detail.title_rus}</title>
        <meta name="description" content={detail.description_rus} />
        <meta name="keywords" content={detail.keywords_rus} />
      </Helmet>
      <StyledDetaislHotel>
        <HeaderRus />
        <DetailsHotelContainer>
          <ButtonBack />
          <CardHotelDetailsRus {...detail} />
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
