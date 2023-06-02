import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { typography } from "../ui/typography";
import { Line } from "../components/Line/Line";
import { Helmet } from "react-helmet";
import { HeaderRus } from "../components/Header/HeaderRus";
import { ListCardHotelRus } from "../components/CardHotel/ListCardHotelRus";
import { ListCardAttractionRus } from "../components/ListCardAttraction/ListCardAttractionRus";
import { MainText } from "../components/MainText/MainText";

export const MainRus = () => {
  const title = "Гостиницы Бухары";
  const text =
  "В Бухаре распространены частные гостиницы. В большинстве своем гостиницы Бухары располагаются в Старом городе, около главного исторического комплекса Бухары - «Ляби Хауз». Как правило, гостиницы Бухары - небольшие, расположенные в частных одно- или двухэтажных бухарских домах, с типичными для них внутренними четырехугольными дворами. В таких частных гостиницах обычно 10-20 номеров. Путешественников порадует восточный экзотический дизайн, характерный практически для всех частных гостиниц Бухары. Как правило, это гостиницы B&B, где по утрам предлагается завтрак, а обед и ужин готовятся по заказу посетителей. В Бухаре есть также бизнес-гостиницы, расположенные в центре города. Они построены в стиле современных отелей, в них современное оснащение, широкий набор предоставляемых услуг.";
  return (
    <>
      <Helmet>
        <title>Гостиницы Бухары - Описание и Онлайн бронирование</title>
        <meta name="description" content="Бухара - отели и гостиницы Бухары - информация о гостиницах и бронирование через интернет." />
        <meta name="keywords" content="Бухара, гостиницы бухары, гостиницы в бухаре, отели бухары, отели в бухаре" />
      </Helmet>
      <StyledMain>
        <HeaderRus />
        <TitleRus>{title}</TitleRus>
        <Line />
        <ContainerBackground />
        <Subtitle>О Гостиницах Бухары</Subtitle>
        <MainText id="main-text" value={text} />
        <ListCardHotelRus />
        <ListCardAttractionRus />
        <Footer />
      </StyledMain>
    </>
  );
};

const TitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
  margin: 20px 0 25px;
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  color: rgb(45, 106, 160);
  font-size: 45px;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  transition: all 0.5s ease 0s;
`;

const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  background-image: url("../images/bukhara-main21.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    height: 50vh;
    margin-bottom: 50px;
  }
`;

const StyledMain = styled.div`
  margin: auto;
`;
