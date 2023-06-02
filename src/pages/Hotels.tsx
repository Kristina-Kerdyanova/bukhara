import React from "react";
import hotelsData from "../hotels.json";
import {
  CardTextContainer,
  ListCardHotelTitle,
} from "../components/CardHotel/style";
import { IHotel, IHotelList } from "../types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Rating } from "../components/Rating/Rating";
import { Helmet } from "react-helmet";


export const Hotels = () => {
  const hotels: IHotel[] = hotelsData.map((hotel) => ({
    id: hotel.id,
    name: hotel.name,
    address: hotel.address,
    stars: hotel.stars,
    img: hotel.img,
    text: hotel.text,
    ident: hotel.ident,
    short: hotel.short,
  }));

  return (
    <>
      <Helmet>
        <title>All hotels in Bukhara - Details and Online Booking</title>
        <meta
          name="description"
          content="Review featured hotels in Bukhara and make online reservation.  Provides description and photos of Bukhara Hotels."
        />
        <meta
          name="keywords"
          content="bukhara hotels, hotels in bukhara, accommodation in bukhara, bukhara accommodation"
        />
      </Helmet>
      <StyledHotels>
        <ListCardHotelTitle>HOTELS IN BUKHARA</ListCardHotelTitle>
        <AllListHotels hotels={hotels} />
      </StyledHotels>
    </>
  );
};

const AllListHotels = ({ hotels }: IHotelList) => {
  return (
    <StyledAllListHotels>
      {hotels.map((hotel) => (
        <HotelItem {...hotel} />
      ))}
    </StyledAllListHotels>
  );
};

const HotelItem = ({ name, img, ident, address, short }: IHotel) => {
  return (
    <StyledHotelItem>
      <HotelLink className="card-link" to={`/${ident}.htm`}>
        <HotelItemImageContainer>
          <HotelItemImage src={img} alt={ident} />
        </HotelItemImageContainer>
        <HotelItemContent>
          <HotelItemContentContainer>
            <HotelItemTitle>{name}</HotelItemTitle>
            <Rating />
            <HotelItemAddress>{address}</HotelItemAddress>
          </HotelItemContentContainer>
          <HotelItemText>{short}</HotelItemText>
          <CardTextContainer>
            <HotelText>details & booking</HotelText>
          </CardTextContainer>
        </HotelItemContent>
      </HotelLink>
    </StyledHotelItem>
  );
};


const HotelItemImageContainer = styled.div`
  margin: auto;
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`;

const StyledHotels = styled.div`
  max-width: 1070px;
  margin: 0 20px;
`;

const HotelItemText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
`;

const HotelItemImage = styled.img`
  max-width: 370px;
  margin-right: 20px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledAllListHotels = styled.ul`
  max-width: 750px;
  width: 100%;
`;

const StyledHotelItem = styled.li`
  max-width: 750px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: rgba(179, 212, 252, 0.72) 0px 5px 10px 2px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  transition: all 0.5s ease 0s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
  }
`;

const HotelItemAddress = styled.p`
  text-align: center;
  color: rgb(116, 114, 114);
  margin: 10px auto;
  font-size: 17px;
  width: 100%;
  max-width: 250px;
`;

export const HotelItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const HotelItemContentContainer = styled.div``;

const HotelLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin: auto;
  color: #000000;

  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

const HotelText = styled.p`
  color: rgb(0, 0, 0);
  line-height: 25px;
  font-size: 17px;
  text-decoration: none;
  text-transform: uppercase;
  margin: auto;
  border: 2px solid rgb(179 212 252);
  background-color: rgb(179 212 252 / 30%);
  border-radius: 5px;
  padding: 3px 15px;
  transition: all 0.5s ease 0s;

  &:hover {
    /* color: #736C60; */
  }
`;

const HotelItemTitle = styled.h3`
  font-size: 23px;
  line-height: 100%;
  color: rgb(45, 42, 42);
  margin: 0px 0px 10px;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 3px;
`;
