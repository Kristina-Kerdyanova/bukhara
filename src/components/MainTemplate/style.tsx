import styled from "styled-components";


const StyledMainTemplate = styled.div`
  /* padding: 0px 16px; */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 25px auto 0;
  /* padding: 0 20px; */
`;

const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1070px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px auto 0;
  }
`;

export {StyledMainTemplate, Container, ContainerContent}