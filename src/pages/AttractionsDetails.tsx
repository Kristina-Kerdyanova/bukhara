import { useParams } from "react-router-dom";
import attractionsData from "../attractions.json";
import { CardAttractionsDetail } from "../components/CardAttractionsDetail/CardAttractionsDetail";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const AttractionsDetails = () => {
  const { ident = "" } = useParams();
  const detail = attractionsData.find(
    (attractions) => attractions.ident === ident
  );

  if (!detail) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{detail.title}</title>
        <meta
          name="description"
          content={detail.description}
        />
        <meta
          name="keywords"
          content={detail.keywords}
        />
      </Helmet>
      <StyledCardAttractionsDetail>
        <CardAttractionsDetail {...detail} />
      </StyledCardAttractionsDetail>
    </>
  );
};

const StyledCardAttractionsDetail = styled.section`
  max-width: 750px;
`;
