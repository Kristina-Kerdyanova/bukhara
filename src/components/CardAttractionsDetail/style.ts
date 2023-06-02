import styled from "styled-components";
import { typography } from "../../ui/typography";

const CardAttractionsDetailContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCardAttractionsDetail = styled.div`
  @media (max-width: 1070px) {
    margin: 0 20px;
  }
`;

const CardAttractionsDetailTitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
  margin-top: 0;
`;

const CardAttractionsDetailImageContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto 20px;
`;

const CardAttractionsDetailAddress = styled.p`
  font-size: 23px;
  margin: 0 0 45px;
  color: #747272;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


const CardAttractionsDetailTitle = styled.h1`
  ${typography.H1}
  margin-top: 0;
  letter-spacing: 0;
`;


export {
  CardAttractionsDetailContent,
  StyledCardAttractionsDetail,
  CardAttractionsDetailTitleRus,
  CardAttractionsDetailImageContainer,
  CardAttractionsDetailAddress,
  CardAttractionsDetailTitle
};
