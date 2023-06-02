import React from "react";
import styled from "styled-components";

export const menuIsActive = () => {
  const burgerButton = document.getElementById("burger-button");
  const burgerMenu = document.getElementById("burger-menu");
  const modalWindow = document.getElementById("modal");
  
  if (!burgerButton || !burgerMenu || !modalWindow) {
    return null;
  }

  if (burgerButton.classList.contains("button-active")) {
    burgerButton.classList.remove("button-active");
    burgerMenu.classList.remove("menu-active");
    modalWindow.classList.remove("modal-active");
  } else {
    burgerButton.classList.add("button-active");
    burgerMenu.classList.add("menu-active");
    modalWindow.classList.add("modal-active");
  }
};

export const HeaderButton = () => {
  return (
    <StyledHeaderButton onClick={menuIsActive} id="burger-button">
      <HeaderButtonLine />
      <HeaderButtonLine />
      <HeaderButtonLine />
    </StyledHeaderButton>
  );
};

const StyledHeaderButton = styled.div`
  width: 30px;
  background: none;
  border: none;
  transition: all 1s;
  @media (max-width: 550px) {
    display: block;
    z-index: 6;
  }
`;

const HeaderButtonLine = styled.p`
  height: 2px;
  width: 30px;
  background-color: rgb(51, 122, 183);
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
