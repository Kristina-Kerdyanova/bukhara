import React from "react";
import styled from "styled-components";
import { IValue } from "../../types";

export const MainText = ({id, value}:IValue) => {
  return (
    <StyledMainText id={id}>
      <MainTextContent>
       {value}
      </MainTextContent>
    </StyledMainText>
  );
};

const StyledMainText = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 100px;
`;

const MainTextContent = styled.p`
  font-size: 25px;
  line-height: 35px;
  text-align: justify;
  color: #000000;
`;
