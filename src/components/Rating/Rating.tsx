import styled from "styled-components";
// import { BlackStar } from "../../images";
import hotelsData from "../../hotels.json";
import { useParams } from "react-router-dom";

export const Rating: any = (stars: string) => {
  const { ident = "" } = useParams();
  const detail = hotelsData.find((hotel) => hotel.ident === ident);
  if (!detail) {
    return null;
  }

  if (detail.stars === "1") {
    return (
      <StyledRating>
        <RatingImage src="../images/star_yellow.png" alt="" />
      </StyledRating>
    );
  } else if (detail.stars === "2") {
    return (
      <StyledRating>
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
      </StyledRating>
    );
  } else if (detail.stars === "3") {
    return (
      <StyledRating>
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
      </StyledRating>
    );
  } else if (detail.stars === "4") {
    return (
      <StyledRating>
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
      </StyledRating>
    );
  } else if (detail.stars === "5") {
    return (
      <StyledRating>
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
        <RatingImage src="../images/star_yellow.png" alt="" />
      </StyledRating>
    );
  } else {
    console.log(stars);
  }
};

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 15px auto 0;
  }
`;

export const RatingImage = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;