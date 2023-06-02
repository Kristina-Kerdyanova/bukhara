import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Link } from "react-router-dom";

const StyledListCardAttraction = styled.section`
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 1070px) {
    margin: 0 20px 50px;
  }
`;

const ListCardAttractionLink= styled(Link)`
  ${typography.H2}
  text-decoration: none;
  text-align: center;
  display: block;
  transition: 1s;

  &:hover {
    cursor: pointer;
    color: rgb(116, 114, 114);;
  }

  @media (max-width: 400px) {
    overflow-wrap: anywhere;
  }
`;


const ListCardAttractionContainer = styled.ul`
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


export { ListCardAttractionLink, StyledListCardAttraction, ListCardAttractionContainer };
