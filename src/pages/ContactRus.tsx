import React from "react";
import styled from "styled-components";
import { typography } from "../ui/typography";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HeaderRus } from "../components/Header/HeaderRus";

export const ContactRus = () => {
  return (
    <>
      <Helmet>
        <title>Контакты - Гостиницы Бухары</title>
        <meta
          name="description"
          content="Бухара - отели и гостиницы Бухары - информация о гостиницах и бронирование через интернет."
        />
        <meta
          name="keywords"
          content="Бухара, гостиницы бухары, гостиницы в бухаре, отели бухары, отели в бухаре"
        />
      </Helmet>
      <HeaderRus />
      <StyledContact>
        <ButtonBack />
        <ContactContainer>
          <ContactTitleRus>Как с нами связаться</ContactTitleRus>
          <ContactSubtitle>
            Гостиницы Бухары предоставлены туристической фирмой{" "}
            <ContactLink to="https://www.advantour.com/">Advantour</ContactLink>
            . <br /> Вы можете связаться с нами, по любому интересующему Вас
            вопросу:
          </ContactSubtitle>
          <ContactContentContainer>
            <ContactContent>
              <ContactHighlightText>Advantour Узбекистан</ContactHighlightText>
              <ContactAddressContainer>
                <ContactAddress>
                  <ContactImage src="../images/home.svg" alt="address" /> ул.
                  Мирабадская-1, 47A
                  <br /> Ташкент 100015, Узбекистан
                </ContactAddress>
                <ContactAddress>
                  <ContactImage src="../images/phone-call.svg" alt="phone" />{" "}
                  +998 78 1503020
                  <br />{" "}
                  <ContactImage
                    src="../images/phone-call.svg"
                    alt="phone"
                  />{" "}
                  +998 78 1503021
                </ContactAddress>
              </ContactAddressContainer>
              <YMaps query={{ lang: "en_RU" }}>
                <Map
                  width="100%"
                  defaultState={{ center: [41.292295, 69.265106], zoom: 17 }}
                >
                  <Placemark geometry={[41.292295, 69.265106]} />
                </Map>
              </YMaps>
            </ContactContent>
            <ContactForm>
              <ContactText>
                Заполните прилагаемую форму для получения дополнительной,
                интересующей Вас информации. Наши консультанты, в ближайшее
                время, ответят на Ваш запрос.
              </ContactText>
              <ContactInput placeholder="Имя" type="text" />
              <ContactInput placeholder="Email" type="email" />
              <ContactTextareaComments placeholder="Комментарий" />
              <ContactButton>Отправить</ContactButton>
            </ContactForm>
          </ContactContentContainer>
        </ContactContainer>
      </StyledContact>
      <Footer />
    </>
  );
};

const StyledContact = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const ContactContainer = styled.div`
  margin: 20px auto;

  @media (max-width: 1200px) {
    margin: 20px;
  }
`;

const ContactLink = styled(Link)`
  color: #337ab7;
  font-weight: 600;
  text-decoration: none;
`;

const ContactImage = styled.img`
  border: solid 1px rgb(51, 122, 183);
  background-color: rgb(179 212 252 / 56%);
  padding: 5px;
  border-radius: 5px;
  width: 20px;
  margin-right: 5px;
`;

const ContactHighlightText = styled.span`
  color: #337ab7;
  font-weight: 600;
  font-size: 19px;
`;

const ContactContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1070px;
  margin: auto;

  @media (max-width: 585px) {
    flex-direction: column;
  }
`;

const ContactAddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 15px;
  margin: 15px 0 30px;
  border: solid 2px #337ab7;
  border-radius: 5px;
  padding: 5px 10px;

  @media (max-width: 768px) {
    /* justify-content: center; */
  }
`;

const ContactTitle = styled.h1`
  ${typography.H1}
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const ContactTitleRus = styled.h1`
  ${typography.H1}
  ${typography.H1_rus}
`;

const ContactSubtitle = styled.p`
  margin-bottom: 50px;
  font-size: 20px;
  line-height: 26px;
  text-align: center;

  @media (max-width: 768px) {
    line-height: 26px;
    text-align: justify;
  }
`;

const ContactContent = styled.div`
  width: 43%;

  @media (max-width: 585px) {
    max-width: 460px;
    width: 98%;
    margin: 0 auto 30px;
  }
`;

const ContactAddress = styled.p`
  font-size: 18px;
  line-height: 27px;
  max-width: 240px;
`;

const ContactText = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: rgba(45, 42, 42, 0.82);
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 47%;

  @media (max-width: 585px) {
    max-width: 440px;
    width: 98%;
    margin: auto;
  }
`;

const ContactInput = styled.input`
  margin-bottom: 20px;
  min-height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  box-shadow: rgba(230, 201, 154, 0.2) 0px 5px 10px 2px;
  border-radius: 5px;
  border: 2px solid rgb(51, 122, 183);
`;

const ContactTextareaComments = styled.textarea`
  margin-bottom: 20px;
  min-height: 210px;
  font-size: 19px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(230, 201, 154, 0.2) 0px 5px 10px 2px;
  border-radius: 5px;
  border: 2px solid rgb(51, 122, 183);
`;

const ContactButton = styled.button`
  min-height: 35px;
  width: 185px;
  margin: auto;
  background-color: rgb(179 212 252 / 44%);
  padding: 0px 10px;
  border-radius: 5px;
  border: 2px solid rgb(51, 122, 183);
`;
