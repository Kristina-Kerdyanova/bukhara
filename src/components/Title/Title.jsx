import React from "react";
import styled from "styled-components";
import { typography } from "../../ui/typography";

 
export const Title = (title) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  ${typography.H1}
`;
