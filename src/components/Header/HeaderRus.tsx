import React from "react";
import {
  HeaderBurger,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderItem,
  HeaderList,
  HeaderNavigation,
  HeaderNavigationContainer,
  HeaderSubtitle,
  HeaderSubtitleNav,
  HeaderText,
  StyledHeader,
} from "./style";
import { NavLink } from "react-router-dom";
import { routers } from "../../router/routers";
import { HeaderButton } from "../HeaderButton/HeaderButton";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { menuIsInactive } from "./Header";

export const HeaderRus = () => {
  return (
    <>
      <ModalWindow />
      <StyledHeader>
        <HeaderButtonContainer>
          <HeaderButton />
        </HeaderButtonContainer>
        <HeaderBurger onClick={menuIsInactive} id="burger-menu">
          <HeaderNavigation>
            <HeaderNavigationContainer>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? "inactive-link" : "inactive-link"
                }
                to="/rus"
              >
                RU
              </NavLink>
              <HeaderText>/</HeaderText>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? "inactive-link" : "inactive-link"
                }
                to="/"
              >
                EN
              </NavLink>
            </HeaderNavigationContainer>
          </HeaderNavigation>
          <HeaderContainer>
            {/* <HeaderTitle>Bukhara Hotels</HeaderTitle> */}
            <HeaderSubtitle>
              Гостиницы и достопримечательности Бухары
            </HeaderSubtitle>
            <HeaderList>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.MAIN_RUS}
                >
                  Главная
                </NavLink>
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.BUKHARA_RUS}
                >
                  Бухара
                </NavLink>
                {/* <ListNav /> */}
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.HOTELS_RUS}
                >
                  Гостиницы
                </NavLink>
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.CONTACTS_RUS}
                >
                  Контакты
                </NavLink>
              </HeaderItem>
            </HeaderList>
          </HeaderContainer>
        </HeaderBurger>
        {/* <Line/> */}
      </StyledHeader>
    </>
  );
};
