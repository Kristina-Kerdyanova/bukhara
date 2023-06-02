import styled from "styled-components";

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const StyledButton = styled.a`
  color: rgb(45, 106, 160);
  font-size: 45px;
  text-decoration: none;
  text-transform: uppercase;
  margin: auto;
  border: none;
  transition: all 0.5s ease 0s;
  &:hover {
    cursor: pointer;
    color: rgb(116, 114, 114);
  }
`;

export { ButtonContainer, StyledButton };
