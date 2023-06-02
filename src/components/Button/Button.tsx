import React from 'react'
import { IValue } from '../../types';
import { ButtonContainer, StyledButton } from './style';

export const textIsActive = () => {
  const mainTextBtn = document.getElementById("main-text_btn");
  const mainText = document.getElementById("main-text");
  
  if (!mainTextBtn || !mainText) {
    return null;
  }

  if (mainTextBtn.classList.contains("active")) {
    mainText.style.display = "none";
    mainTextBtn.classList.remove("active");
  } else {
    mainText.style.display = "block";
    mainTextBtn.classList.add("active");
  }
};


export const Button = ({value, id }:IValue) => {
  return (
    <ButtonContainer onClick={textIsActive}>
      <StyledButton id={id}>{value}</StyledButton>
    </ButtonContainer>
  );
};