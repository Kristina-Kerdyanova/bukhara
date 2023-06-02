import styled from "styled-components";
import { Link } from "react-router-dom";
import { typography } from "../../ui/typography";

const StyledListCard = styled.ul`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 25px;
  margin: auto;
`;

const StyledCard = styled.div`
  width: 263px;
  box-shadow: rgb(179 212 252 / 72%) 0px 5px 10px 2px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  max-width: 243px;
  max-height: 210px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(230, 201, 154, 0.5);
`;

const CardContent = styled.div`
  width: 100%;
  margin: auto;
`;

const CardDescription = styled.p`
  min-height: 160px;
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
`;

const CardAdress = styled.p`
  font-size: 15px;
  letter-spacing: 5%;
  margin: 0 0 20px;
  color: #747272;
  text-align: center;
`;

const CardTitle = styled.h3`
  ${typography.H3};
  font-size: 18px;
`;

const CardText = styled.p`
  color: rgb(0, 0, 0);
  line-height: 25px;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  margin: auto;
  border: 2px solid rgb(179 212 252);
  background-color: rgb(179 212 252 / 30%);
  border-radius: 5px;
  padding: 3px 15px;
  transition: all 0.5s;

  &:hover {
    /* background-color: rgb(230 201 154 / 50%); */
  }
`;

const CardTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const CardLine = styled.span`
  display: block;
  width: 200px;
  height: 1px;
  background-color: #2D2A2A;
  margin-right: 15px;
`;


const StyledListCardHotel = styled.section`
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 1070px) {
    margin: 0 20px 50px;
  }
`;

const ListCardHotelTitle = styled.h1`
  ${typography.H1}
`;

const ListCardHotelTitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
`;

const ListCardHotelSubtitle = styled.h2`
  ${typography.H2}
`;

const ListCardHotelContainer = styled.ul`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 25px;
  margin: auto;

  @media (max-width: 768px) {
    row-gap: 20px;
  }
`;

export {
  StyledListCardHotel,
  ListCardHotelTitle,
  ListCardHotelContainer,
  StyledCard,
  CardImage,
  CardTitle,
  CardText,
  CardContent,
  CardTextContainer,
  CardLink,
  CardLine,
  CardAdress,
  StyledListCard, 
  CardDescription,
  ListCardHotelSubtitle,
  ListCardHotelTitleRus
};