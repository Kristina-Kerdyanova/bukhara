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
  HeaderText,
  StyledHeader,
} from "./style";
import { NavLink } from "react-router-dom";
import { routers } from "../../router/routers";
import { HeaderButton} from "../HeaderButton/HeaderButton";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const menuIsInactive = () => {
  const burgerButton = document.getElementById("burger-button");
  const burgerMenu = document.getElementById("burger-menu");
  const modalWindow = document.getElementById("modal");
  
  if (!burgerButton || !burgerMenu || !modalWindow) {
    return null;
  }

  if (burgerMenu.classList.contains("menu-active")) {
    burgerButton.classList.remove("button-active");
    burgerMenu.classList.remove("menu-active");
    modalWindow.classList.remove("modal-active");
  }
};


export const Header = () => {
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
                to={routers.MAIN_RUS}
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
              Welcome to Bukhara hotels and Attractions
            </HeaderSubtitle>
            <HeaderList>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.MAIN}
                >
                  Home
                </NavLink>
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.BUKHARA}
                >
                  About Bukhara
                </NavLink>
                {/* <ListNav /> */}
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.HOTELS}
                >
                  Hotels
                </NavLink>
              </HeaderItem>
              <HeaderItem>
                <NavLink
                  className={(navLink) =>
                    navLink.isActive ? "inactive-link" : "inactive-link"
                  }
                  to={routers.CONTACTS}
                >
                  Contacts
                </NavLink>
              </HeaderItem>
            </HeaderList>
          </HeaderContainer>
        </HeaderBurger>
        {/* <Line/> */}
        {/* <HeaderSubtitleNav>
            Bukhara hotels  & Attractions
          </HeaderSubtitleNav> */}
      </StyledHeader>
    </>
  );
};

// export const ListNav = () => {
//   const [isHidden, setIsHidden] = useState(true);

//   const handleMouseEnter = () => {
//     setIsHidden(false);
//   };

//   const handleMouseLeave = () => {
//     setIsHidden(true);
//   };

//   return (
//     <>
//       <NavLink
//         to={routers.BUKHARA}
//         className={(navLink) =>
//           navLink.isActive ? "inactive-link" : "inactive-link"
//         }
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         about bukhara
//       </NavLink>
//       <HeaderItemList
//         className="list"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         hidden={isHidden}
//       >
//         {/* <HeaderItem>
//           <HeaderLink to="bukhara">bukhara</HeaderLink>
//         </HeaderItem> */}
//         <HeaderItem>
//           <NavLink
//             to={routers.HISTORY}
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//           >
//             history
//           </NavLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavLink
//             to={routers.RELIGION}
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//           >
//             religion
//           </NavLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavLink
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//             to={routers.ATTRACTIONS}
//           >
//             Attractions
//           </NavLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavLink
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//             to={routers.TOURS}
//           >
//             Tours
//           </NavLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavLink
//             to={routers.MUSEUMS}
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//           >
//             museums
//           </NavLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavLink
//             to={routers.AIRPORT}
//             className={(navLink) =>
//               navLink.isActive ? "inactive-link" : "inactive-link"
//             }
//           >
//             airport
//           </NavLink>
//         </HeaderItem>
//       </HeaderItemList>
//     </>
//   );
// };
