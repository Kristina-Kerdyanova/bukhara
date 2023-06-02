import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledHeader = styled.header`
  @media (max-width: 550px) {
  }
`;

const HeaderContainer = styled.div`
  min-height: 125px;
  padding: 20px 0;

  @media (max-width: 550px) {
  }
`;

const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  background-color: #d9e9fd;

  @media (max-width: 550px) {
    order: 3;
    margin: auto;
    background: none;
  }
`;

const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  width: 100%;
  margin: auto;
  padding: 0 10px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.li`
  text-transform: uppercase;
  font-size: 17px;
  text-align: center;
  padding: 0 0 4px;

  @media (max-width: 550px) {
    margin-bottom: 15px;
    font-size: 20px;
  }
`;

const HeaderItemNav = styled.li`
  border: 1px solid rgb(9, 156, 174);
  text-transform: uppercase;
  font-size: 18px;
  margin-right: 20px;
  padding: 5px;
  border-radius: 5px;
`;

const HeaderLink = styled(Link)`
  color: #337ab7;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: all 1s;

  &:hover {
    cursor: pointer;
    color: rgb(155 165 173);
  }
`;

const HeaderTitle = styled.h1`
  ${typography.H1}
  font-weight: 600;
  color: rgb(45 106 160);
`;

const HeaderSubtitle = styled.h2`
  margin: 0 20px 45px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #337ab7;

  @media (max-width: 550px) {
    /* margin-bottom: 40px;
    font-size: 15px; */
    display: none;
  }
`;

const HeaderSubtitleNav = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #337ab7;
  font-size: 12px;
  padding: 5px;
  line-height: 15px;
  border: solid 2px rgb(51, 122, 183);
  border-radius: 5px;
  display: none;
  @media (max-width: 550px) {
    display: block;
    margin: auto 0;
  }
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  max-width: 70px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px rgb(45 106 160);
  margin: 5px;

  @media (max-width: 550px) {
    max-width: 100%;
    padding: 3px;
  }
`;

const HeaderBurger = styled.div`
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -100%;
    position: fixed;
    z-index: 5;
    padding: 45px 20px 30px;
    background-color: rgb(217, 233, 253);
    transition: 1s all;
  }
`;

const HeaderItemText = styled.p`
  transition: all 0.5s ease 0s;
  font-weight: 600;
  color: rgb(51, 122, 183);
  padding: 0 0 5px;

  &:hover {
    color: rgb(155 165 173);
    cursor: pointer;
  }
`;

const HeaderItemList = styled.ul`
  transition: all 0.5s;
  background-color: #fcfcfc;
  padding: 5px 0;
`;

const HeaderText = styled.span`
  color: #337ab7;
  text-decoration: none;
  font-weight: 600;
  transition: all 1s;
`;

const HeaderButtonContainer = styled.div`
  display: none;
  background-color: rgb(217, 233, 253);
  padding: 15px;
  @media (max-width: 550px) {
    display: flex;
    justify-content: end;
  }
`;

export {
  StyledHeader,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderTitle,
  HeaderSubtitle,
  HeaderNavigation,
  HeaderContainer,
  HeaderItemNav,
  HeaderNavigationContainer,
  HeaderBurger,
  HeaderText,
  HeaderItemList,
  HeaderItemText,
  HeaderButtonContainer,
  HeaderSubtitleNav,
};
