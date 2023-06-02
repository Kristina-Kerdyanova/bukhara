import React from "react";
import attractionsData from "../attractions.json";
import articleData from "../article.json";
import { IAttraction, IAttractionList } from "../types";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { typography } from "../ui/typography";

export const Attractions = () => {
  const attractions: IAttraction[] = attractionsData.map((attraction) => ({
    id: attraction.id,
    name: attraction.name,
    address: attraction.address,
    img: attraction.img,
    text: attraction.text,
    ident: attraction.ident,
  }));

  const { ident = "sights" } = useParams();
  const detail = articleData.find((articles) => articles.ident === ident);

  const texts = detail?.text.split("\n");

  if (!detail || !texts) {
    return null;
  }

  return (
    <StyledListAttraction>
      <AttractionContainer>
        <ArticleCard {...detail} />
        <AttractionListContainer>
          <AllListAttractionsTitle>
            Must See Attractions
          </AllListAttractionsTitle>
          <AllListAttractions attractions={attractions} />
        </AttractionListContainer>
      </AttractionContainer>
    </StyledListAttraction>
  );
};

const AttractionListContainer = styled.div`
  margin: 0 20px;
`;

export const StyledListAttraction = styled.div``;

export const AttractionlTitle = styled.h2`
  text-align: center;
  margin: 65px auto 30px;
  font-size: 25px;
  text-transform: uppercase;
`;

export const AttractionsText = styled.p``;

export const AttractionContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const StyledAttractionItem = styled.div`
  max-width: 155px;
  width: 100%;
  text-align: center;
  box-shadow: rgb(179, 212, 252) 0px 5px 10px 2px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s ease 0s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const AttractionItemImage = styled.img`
  max-width: 135px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const AttractionItemAddress = styled.p`
  text-align: center;
  color: #747272;
`;

export const StyledAllListCard = styled.ul`
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 40px;
  column-gap: 30px;
  margin: auto;
  /* margin-bottom: 50px; */

  @media (max-width: 768px) {
    row-gap: 20px;
  }
`;

export const AttractionItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 5px 0px;
`;

export const AttractionItemTitle = styled.h3`
  font-size: 14px;
  line-height: 100%;
  color: rgb(66 76 85);
  text-align: center;
  text-transform: uppercase;
`;

export const AllListAttractions = ({ attractions }: IAttractionList) => {
  return (
    <StyledAllListCard>
      {attractions.map((attraction) => (
        <AttractionItem {...attraction} />
      ))}
    </StyledAllListCard>
  );
};

export const AttractionItem = ({ name, img, ident, address }: IAttraction) => {
  return (
    <>
      <StyledAttractionItem>
        <AttractionLink className="card-link" to={`/sights/${ident}`}>
          <AttractionItemImage src={img} alt={ident} />
          <AttractionItemTitle>{name}</AttractionItemTitle>
        </AttractionLink>
      </StyledAttractionItem>
    </>
  );
};

const AllListAttractionsTitle = styled.h2`
  ${typography.H2}
  margin: 30px auto;
`;

const AttractionLink = styled(Link)`
  margin: auto;
  text-decoration: none;
`;
