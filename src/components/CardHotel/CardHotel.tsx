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

export const CardHotel = ({ ident }: Pick<IHotel, "ident">) => {
  const details = HotelsData.find((hotels) => hotels.ident === ident);

  if (!details) {
    return null;
  }

  return (
    <StyledCard id={ident}>
      <CardLink className="card-link" to={`/${ident}.htm`}>
        <CardImage src={details.img} alt={ident} />
        <CardContent>
          <CardTitle>{details.name}</CardTitle>
          <Rating />
          <CardAdress>{details.address}</CardAdress>
          <CardTextContainer>
            <CardText>details & booking</CardText>
          </CardTextContainer>
        </CardContent>
      </CardLink>
    </StyledCard>
  );
};