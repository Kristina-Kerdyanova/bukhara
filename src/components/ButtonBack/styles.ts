import styled from "styled-components";

const StyledButtonBack = styled.button`
  padding: 0px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 40px;
  border-radius: 5px;
  border: none;
  background-color: rgba(179, 212, 252, 0.5);
  padding: 5px;
  position: fixed;
  z-index: 2;

  @media (max-width: 550px) {
    width: 30px;
    top: 55px;
    margin: 3px;
  }
`;

const ButtonBackImage = styled.img`
  width: 100%;
`;

export { StyledButtonBack, ButtonBackImage };
