import styled from "styled-components";
import { Link } from "react-router-dom";
import { typography } from "../../ui/typography";

const StyledCardShowplace = styled.div`
  width: 263px;
  box-shadow: rgba(179, 212, 252, 0.72) 0px 5px 10px 2px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const CardShowplaceImage = styled.img`
  max-width: 243px;
  max-height: 210px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid rgba(230, 201, 154, 0.5);
`;

const CardShowplaceContent = styled.div`
  max-width: 300px;
  width: 100%;
  margin: auto;
`;

const CardShowplaceAdress = styled.p`
  font-size: 12px;
  letter-spacing: 5%;
  margin: 0 0 15px;
  color: #747272;
`;

const CardShowplaceTitle = styled.h3`
  ${typography.H3};
  font-size: 18px;
`;

const CardShowplaceText = styled.p`
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

const CardShowplaceLinkContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
`;

const CardShowplaceLink = styled(Link)`
  text-decoration: none;
`;

export {
  StyledCardShowplace,
  CardShowplaceImage,
  CardShowplaceTitle,
  CardShowplaceText,
  CardShowplaceContent,
  CardShowplaceLinkContainer,
  CardShowplaceLink,
  CardShowplaceAdress,
};
