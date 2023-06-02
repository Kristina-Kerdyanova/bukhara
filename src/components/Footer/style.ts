import styled from "styled-components";


const StyledFooter = styled.footer`
  margin-top: 100px;

  @media (max-width: 550px) {
    margin-top: 50px;
  }
`;


const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

const FooterItem = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: solid black 1px;
`;

const FooterLink = styled.a`
  margin-right: 10px;
  padding: 5px;
  border: solid 2px #ffffff;
  border-radius: 25px;
  transition: 1s;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: solid 2px rgb(45, 106, 160);
  }

  &:active {
    border: solid 2px rgb(45, 106, 160);
  }

`;

const FooterBlock = styled.div`
  @media (max-width: 550px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const FooterTitle = styled.p`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  margin-bottom: 10px;
`;

const FooterImage = styled.img`
  width: 25px;
  height: 25px;
`;

const FooterNavigation = styled.nav`
`;



export { StyledFooter, FooterList, FooterItem, FooterLink, FooterBlock, FooterTitle, FooterText, FooterContainer, FooterImage, FooterNavigation };
