import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Link } from "react-router-dom";

const StyledCardHotelDetails = styled.section`
  max-width: 1070px;
  width: 100%;
  margin: auto;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

const CardHotelDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`;

const CardHotelDetailsTitle = styled.h1`
  ${typography.H1}
  margin-bottom: 0;
`;

const CardHotelDetailsTitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
  margin-bottom: 0;
`;

const CardHotelDetailsAdress = styled.p`
  font-size: 23px;
  margin: 25px 0 45px;
  color: rgb(115, 113, 153);
  text-align: center;

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 20px;
  }

`;

const CardHotelDetailsImage = styled.img`
  max-width: 580px;
  width: 100%;
  margin-bottom: 35px;
`;

const CardHotelDetailsText = styled.p`
  ${typography.p} 
  max-width: 580px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 auto 25px;
  }
`;

const CardHotelDetailsContent = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 96%;
  }
`;

const CardHotelDetailsLink = styled.a`
  text-decoration: none;
`;

const CardHotelDetailsBlock = styled.div`
  max-width: 580px;
  width: 100%;
`;

const BlockDetailsHotel = styled.div`
  max-width: 580px;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin: 0 auto 40px;
  }
`;

const BlockDetailHotelTitle = styled.h2`
  font-size: 23px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

const BlockDetailHotelText = styled.p`
  font-size: 20px;
  margin: 5px 0;
`;

const BlockDetailHotelRoom = styled.div`
  max-width: 417px;
  width: 100%;
  padding: 10px 0;
  border-radius: 3px;
`;

const BlockDetailHotelContent = styled.div`
  display: flex;
  padding: 0 10px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 5px 13px;
  border: 2px solid rgb(179, 212, 252);
  margin-bottom: 5px;
`;

const CardHotelDetailsImages = styled.div`
  max-width: 550px;
  margin: auto;
  margin-bottom: 30px;
`;

const CardHotelDetailsTitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;

const HotelDetailsLink = styled(Link)`
color: #337ab7;
font-weight: 600;
text-decoration: none;
`;



export {
  HotelDetailsLink,
  CardHotelDetailsTitleContainer,
  CardHotelDetailsImages,
  StyledCardHotelDetails,
  BlockDetailHotelRoom,
  CardHotelDetailsContainer,
  CardHotelDetailsTitle,
  CardHotelDetailsAdress,
  CardHotelDetailsImage,
  CardHotelDetailsText,
  CardHotelDetailsContent,
  CardHotelDetailsLink,
  CardHotelDetailsBlock,
  BlockDetailsHotel,
  BlockDetailHotelTitle,
  BlockDetailHotelText,
  BlockDetailHotelContent,
  CardHotelDetailsTitleRus
};
