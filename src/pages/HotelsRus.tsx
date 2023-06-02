import React from "react";
import hotelsData from "../hotels.json";
import {
  CardTextContainer,
  ListCardHotelTitle,
  ListCardHotelTitleRus,
} from "../components/CardHotel/style";
import { IHotel, IHotelList } from "../types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Rating } from "../components/Rating/Rating";
import { Helmet } from "react-helmet";


export const HotelsRus = () => {
  const hotels: IHotel[] = hotelsData.map((hotel) => ({
    id: hotel.id,
    name: hotel.name,
    address: hotel.address,
    stars: hotel.stars,
    img: hotel.img,
    text: hotel.text,
    ident: hotel.ident,
    short: hotel.short,
    name_rus: hotel.name_rus,
    address_rus: hotel.address_rus,
    short_rus: hotel.short_rus
  }));

  return (
    <>
      <Helmet>
        <title>Все Гостиницы Бухары - Описание и Онлайн бронирование</title>
        <meta
          name="description"
          content="Бухара - отели и гостиницы Бухары - информация о гостиницах и бронирование через интернет."
        />
        <meta
          name="keywords"
          content="Бухара, гостиницы бухары, гостиницы в бухаре, отели бухары, отели в бухаре"
        />
      </Helmet>
      <StyledHotels>
        <ListCardHotelTitleRus>Гостиницы Бухары</ListCardHotelTitleRus>
        <AllListHotelsRus hotels={hotels} />
      </StyledHotels>
    </>
  );
};

const AllListHotelsRus = ({ hotels }: IHotelList) => {
  return (
    <StyledAllListHotels>
      {hotels.map((hotel) => (
        <HotelItemRus {...hotel} />
      ))}
    </StyledAllListHotels>
  );
};

const HotelItemRus = ({ name_rus, img, ident, address_rus, short_rus }: IHotel) => {
  return (
    <StyledHotelItem>
      <HotelLink className="card-link" to={`/rus/${ident}.htm`}>
        <HotelItemImageContainer>
          <HotelItemImage src={img} alt={name_rus} />
        </HotelItemImageContainer>
        <HotelItemContent>
          <HotelItemContentContainer>
            <HotelItemTitle>{name_rus}</HotelItemTitle>
            <Rating />
            <HotelItemAddress>{address_rus}</HotelItemAddress>
          </HotelItemContentContainer>
          <HotelItemText>{short_rus}</HotelItemText>
          <CardTextContainer>
            <HotelText>Детали</HotelText>
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
