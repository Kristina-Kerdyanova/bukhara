import React from "react";
import { ListCardHotel } from "../components/CardHotel/ListCardHotel";
import styled from "styled-components";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
// import bukharaMain from "../images/bukhara-main2.jpg";
import { ListCardAttraction } from "../components/ListCardAttraction/ListCardAttraction";
import { typography } from "../ui/typography";
import { Helmet } from "react-helmet";
import { MainText } from "../components/MainText/MainText";

export const Main = () => {
  const title = "Bukhara Hotels";
  const text =
    "In Bukhara you will find a lot of private hotels. Most of them are located in the old part of Bukhara close to the main historical ensemble Lyabi Khauz. Private Bukhara hotels are situated in Bukhara houses of one or two stores with typical four-corner yards. Usually such private hotels number 10-20 rooms. Travelers will please the oriental design typical for each boutique Bukhara hotel. These are B&B hotels, where breakfast is included and lunch and dinner can be cooked for guests on request. Also there are business hotels, located in the center of Bukhara. They are built in modern style and offer a wide range of amenities and services.";
  return (
    <>
      <Helmet>
        <title>Bukhara Hotels - Details and Online Booking</title>
        <meta
          name="description"
          content="Review featured hotels in Bukhara and make online reservation.  Provides description and photos of Bukhara Hotels."
        />
        <meta
          name="keywords"
          content="bukhara hotels, hotels in bukhara, accommodation in bukhara, bukhara accommodation"
        />
      </Helmet>
      <StyledMain>
        <Header />
        <Title>{title}</Title>
        <ContainerBackground />
        <Subtitle>About Bukhara Hotels</Subtitle>
        <MainText id="main-text" value={text} />
        <ListCardHotel />
        <ListCardAttraction />
        <Footer />
      </StyledMain>
    </>
  );
};

const Title = styled.h1`
  ${typography.H1}
  letter-spacing: 0.2em;
  margin: 20px 0 25px;

  @media (max-width: 768px) {
    letter-spacing: 0.2em;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  color: rgb(45, 106, 160);
  font-size: 45px;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  transition: all 0.5s ease 0s;
`;

const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 70vh;
  background-image: url("../images/bukhara-main21.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    height: 50vh;
    margin-bottom: 50px;
    background-image: url("../images/bukhara-main21mob.webp");
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const StyledMain = styled.div`
  margin: auto;
`;
