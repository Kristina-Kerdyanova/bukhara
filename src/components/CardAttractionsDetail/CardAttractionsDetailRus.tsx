import React from "react";
import { IAttraction } from "../../types";
import { TextList } from "../TextList/TextList";
import { StyledCardAttractionsDetail, CardAttractionsDetailTitleRus, CardAttractionsDetailAddress, CardAttractionsDetailContent, CardAttractionsDetailImageContainer } from "./style";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const CardAttractionsDetailRus = ({
  name,
  address,
  text,
  images,
  name_rus,
  address_rus,
  text_rus
}: IAttraction) => {
  if (!text_rus) {
    return null;
  }
  if (!images) {
    return null;
  }

  const texts = text_rus.split("\n");
  return (
    <StyledCardAttractionsDetail>
      <CardAttractionsDetailTitleRus>{name_rus}</CardAttractionsDetailTitleRus>
      <CardAttractionsDetailAddress>{address_rus}</CardAttractionsDetailAddress>
      <CardAttractionsDetailContent>
        <CardAttractionsDetailImageContainer>
          <ImageGallery autoPlay={true} items={images} />
        </CardAttractionsDetailImageContainer>
      </CardAttractionsDetailContent>
      <TextList details={texts} />
    </StyledCardAttractionsDetail>
  );
};

