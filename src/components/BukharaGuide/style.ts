import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBukharaGuide = styled.nav`
  @media (max-width: 768px) {
    /* margin: 30px 0 0; */
  }
`;

const BukharaGuideCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const StyledBukharaGuideCard = styled.li`
  display: flex;
  justify-content: space-evenly;
  max-width: 265px;
  min-height: 100px;
  width: 100%;
  box-shadow: rgba(179, 212, 252, 0.72) 0px 5px 10px 2px;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const BukharaGuideCardTitle = styled.h3`
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  width: 125px;
  overflow-wrap: anywhere;
`;

const BukharaGuideCardImage = styled.img`
  width: 115px;
  border-radius: 5px;
  margin-right: 15px;
`;

const BukharaGuideCardLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000000;
`;

const BukharaGuideCardText = styled.p`
  color: rgb(45, 42, 42);
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 5px auto 0px;
  padding: 0px 10px;
  border-radius: 5px;
  border: 2px solid rgb(179 212 252);
  background-color: rgb(179 212 252 / 30%);
`;

const BukharaGuideTitle = styled.h2`
  font-size: 22px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 35px;
  text-transform: uppercase;
  border-radius: 3px;
  box-shadow: rgba(179, 212, 252, 0.72) 0px 5px 10px 2px;

  @media (max-width: 768px) {
    max-width: 265px;
    margin: 35px auto;
  }
`;

const BukharaGuideList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
  max-width: 265px;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export {
  BukharaGuideList,
  StyledBukharaGuide,
  BukharaGuideCardContainer,
  BukharaGuideCardImage,
  BukharaGuideCardLink,
  BukharaGuideCardTitle,
  StyledBukharaGuideCard,
  BukharaGuideTitle,
  BukharaGuideCardText,
};
