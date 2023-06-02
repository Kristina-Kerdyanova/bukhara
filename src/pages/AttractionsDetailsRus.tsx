import { useParams } from "react-router-dom";
import attractionsData from "../attractions.json";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { CardAttractionsDetailRus } from "../components/CardAttractionsDetail/CardAttractionsDetailRus";

export const AttractionsDetailsRus = () => {
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
        <title>{detail.title_rus}</title>
        <meta
          name="description"
          content={detail.description_rus}
        />
        <meta
          name="keywords"
          content={detail.keywords_rus}
        />
      </Helmet>
      <StyledCardAttractionsDetail>
        <CardAttractionsDetailRus {...detail} />
      </StyledCardAttractionsDetail>
    </>
  );
};

const StyledCardAttractionsDetail = styled.section`
  max-width: 750px;
`;
