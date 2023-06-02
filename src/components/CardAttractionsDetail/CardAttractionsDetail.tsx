import React from "react";
import { IAttraction } from "../../types";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { TextList } from "../TextList/TextList";
import { StyledCardAttractionsDetail, CardAttractionsDetailTitle, CardAttractionsDetailAddress, CardAttractionsDetailContent, CardAttractionsDetailImageContainer } from "./style";

export const CardAttractionsDetail = ({
  name,
  address,
  text,
  images,
}: IAttraction) => {
  const texts = text.split("\n");
  if (!images) {
    return null;
  }
  
  return (
    <StyledCardAttractionsDetail>
      <CardAttractionsDetailTitle>{name}</CardAttractionsDetailTitle>
      <CardAttractionsDetailAddress>{address}</CardAttractionsDetailAddress>
      <CardAttractionsDetailContent>
        <CardAttractionsDetailImageContainer>
          <ImageGallery autoPlay={true} items={images} />
        </CardAttractionsDetailImageContainer>
      </CardAttractionsDetailContent>
      <TextList details={texts} />
    </StyledCardAttractionsDetail>
  );
};

