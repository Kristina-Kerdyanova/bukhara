import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { StyledApp } from "./style";
import { GlobalStyle } from "./ui/GlobalStyle";
import { Styles } from "./ui/Styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Styles/>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
