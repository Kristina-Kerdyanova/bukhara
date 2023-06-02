import React from "react";
import {
  StyledCardHotelDetails,
  CardHotelDetailsAdress,
  CardHotelDetailsText,
  CardHotelDetailsContent,
  CardHotelDetailsContainer,
  BlockDetailHotelTitle,
  BlockDetailsHotel,
  BlockDetailHotelRoom,
  CardHotelDetailsImages,
  BlockDetailHotelContent,
  BlockDetailHotelText,
  CardHotelDetailsTitleContainer,
  HotelDetailsLink,
  CardHotelDetailsTitleRus,
} from "./style";

import { IDetails, IHotelDetailsApi } from "../../types";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { Rating } from "../Rating/Rating";



export const CardHotelDetailsRus = ({
  images,
  name_rus,
  address_rus, 
  feature_rus,
  facilities_rus,
  services_rus,
  text_rus
}: IHotelDetailsApi) => {
  const features = feature_rus.split(",");
  const facilitie = facilities_rus.split(",");
  const service = services_rus.split(",");

  return (
    <StyledCardHotelDetails>
      <CardHotelDetailsTitleContainer>
        <CardHotelDetailsTitleRus>{name_rus}</CardHotelDetailsTitleRus>
        <Rating />
      </CardHotelDetailsTitleContainer>
      <CardHotelDetailsAdress>{address_rus}</CardHotelDetailsAdress>
      <CardHotelDetailsContainer>
        <CardHotelDetailsContent>
          <CardHotelDetailsImages>
            <ImageGallery autoPlay={true} items={images} />
          </CardHotelDetailsImages>
          {/* <CardHotelDetailsImage src={img} alt={ident} /> */}
          <CardHotelDetailsText>{text_rus}</CardHotelDetailsText>
        </CardHotelDetailsContent>
        <CardHotelDetailsContent>
          <BlockDetailsHotel>
            <BlockDetailsHotel>
              <BlockDetailHotelTitle>Типы комнат и стоимость</BlockDetailHotelTitle>
              <BlockDetailHotelRoom>
                <BlockDetailHotelContent>
                  <BlockDetailHotelText>Узнать стоимость и забронировать номер: <HotelDetailsLink to="https://www.advantour.com/">Advantour</HotelDetailsLink>.</BlockDetailHotelText>
                  {/* <BlockDetailHotelText>O/R</BlockDetailHotelText> */}
                </BlockDetailHotelContent>
                {/* <BlockDetailHotelContent>
                  <BlockDetailHotelText>Double room</BlockDetailHotelText>
                  <BlockDetailHotelText>O/R</BlockDetailHotelText>
                </BlockDetailHotelContent>
                <BlockDetailHotelContent>
                  <BlockDetailHotelText>Deluxe</BlockDetailHotelText>
                  <BlockDetailHotelText>O/R</BlockDetailHotelText>
                </BlockDetailHotelContent>
                <BlockDetailHotelContent>
                  <BlockDetailHotelText>Triple</BlockDetailHotelText>
                  <BlockDetailHotelText>O/R</BlockDetailHotelText>
                </BlockDetailHotelContent> */}
              </BlockDetailHotelRoom>
            </BlockDetailsHotel>
            <BlockDetailsHotel>
              <BlockDetailHotelTitle>Оборудование гостиничных номеров</BlockDetailHotelTitle>
              <List details={features} />
            </BlockDetailsHotel>
            <BlockDetailsHotel>
              <BlockDetailHotelTitle>Оснащенность отеля</BlockDetailHotelTitle>
              <List details={facilitie} />
            </BlockDetailsHotel>
            <BlockDetailsHotel>
              <BlockDetailHotelTitle>Услуги отеля</BlockDetailHotelTitle>
              <List details={service} />
            </BlockDetailsHotel>
          </BlockDetailsHotel>
        </CardHotelDetailsContent>
      </CardHotelDetailsContainer>
    </StyledCardHotelDetails>
  );
};

const List = ({ details }: IDetails) => {
  return (
    <StyledList>
      {details.map((detail: string) => (
        <ListItem>{detail.toLowerCase()}</ListItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
  margin: auto;
`;

const ListItem = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgb(217, 233, 253);
  border-radius: 5px;
  padding: 3px 10px;
  font-size: 18px;
  line-height: 26px;
`;

// export const CardHotelDetails = ({ hotel }: IHotelDetails) => {
//   return (
//     <StyledCardHotelDetails id={hotel.id}>
//       <CardHotelDetailsContent>
//         <CardHotelDetailsBlock>
//           <CardHotelDetailsImage src={hotel.img} alt={hotel.ident} />
//           <CardHotelDetailsTitle>
//             {hotel.name} {hotel.stars}
//           </CardHotelDetailsTitle>
//           <CardHotelDetailsAdress>{hotel.address}</CardHotelDetailsAdress>
//           <CardHotelDetailsLink href="#">Фотографии отеля</CardHotelDetailsLink>
//           <CardHotelDetailsText>{hotel.text}</CardHotelDetailsText>
//         </CardHotelDetailsBlock>
//       </CardHotelDetailsContent>
//       <CardHotelDetailsContent>
//         <BlockDetailsHotel />
//         <BlockHotelRoom />
//       </CardHotelDetailsContent>
//     </StyledCardHotelDetails>
//   );
// };

// export const CardDetails = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hotel, setHotel] = useState([]);

//   useEffect(() => {
//     const apiURL = "https://www.bukhara-hotels.com/api/hotel/asia-bukhara";
//     fetch(apiURL)
//       .then((response) => response.json())
//       .then(
//         (hotel) => {
//           setIsLoaded(true);
//           setHotel(hotel.records[0]);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Ошибка</div>;
//   } else if (!isLoaded) {
//     return <div>Загрузка</div>;
//   } else {
//     return (
//       <div>
//         <CardHotelDetails hotel={hotel} />
//       </div>
//     );
//   }
// };
