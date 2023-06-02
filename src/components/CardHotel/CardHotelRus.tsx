import React from "react";
import {
  StyledCard,
  CardImage,
  CardTitle,
  CardLink,
  CardContent,
  CardAdress,
  CardTextContainer,
  CardText,
} from "./style";
import { IHotel } from "../../types";
import { Rating } from "../Rating/Rating";
import HotelsData from "../../hotels.json"

export const CardHotelRus = ({ ident }: Pick<IHotel, "ident">) => {
  const details = HotelsData.find((hotels) => hotels.ident === ident);

  if (!details) {
    return null;
  }

  return (
    <StyledCard id={ident}>
      <CardLink className="card-link" to={`/rus/${ident}.htm`}>
        <CardImage src={details.img} alt={details.name_rus} />
        <CardContent>
          <CardTitle>{details.name_rus}</CardTitle>
          <Rating />
          <CardAdress>{details.address_rus}</CardAdress>
          <CardTextContainer>
            <CardText>Детали</CardText>
          </CardTextContainer>
        </CardContent>
      </CardLink>
    </StyledCard>
  );
};