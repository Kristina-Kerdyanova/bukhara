import React from "react";
import styled from "styled-components";
import { menuIsActive } from "../HeaderButton/HeaderButton";

export const ModalWindow = () => {
  return <StyledModalWindow id="modal" onClick={menuIsActive}/>;
};

const StyledModalWindow = styled.div`
  display: none;
  background-color: #1a1a1a;
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: fixed;
  z-index: 4;
`;

// .modal_wrap {
//   display: none;
//   background-color: #1a1a1a;
//   height: 100%;
//   width: 100%;
//   opacity: 0.6;
//   position: fixed;
//   z-index: 4;
// }

// .modal_wrap-active {
//   overflow: hidden;
// }
