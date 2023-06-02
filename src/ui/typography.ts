import { css } from "styled-components";
import "@fontsource/source-sans-pro";

const H1 = css`
  font-size: 50px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 25px;
  font-weight: 600;
  color: rgb(45 106 160);

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 40px;
    letter-spacing: 0;
  }
`;

const H1_rus = css`
  letter-spacing: 0.05em;
  overflow-wrap: anywhere;
`;

const H2 = css`
  font-size: 45px;
  margin: 0 0 50px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(45 106 160);

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 25px;
  }

  @media (max-width: 550px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`;

const H3 = css`
  font-size: 20px;
  line-height: 100%;
  color: #2d2a2a;
  margin: 5px 0 20px;
  text-align: center;
  /* background-color: rgb(230 201 154 / 25%); */
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  border-radius: 3px;
`;

const p = css`
  font-size: 18px;
  line-height: 27px;
  text-indent: 15px;
  text-align: justify;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const typography = {
  H1,
  H2,
  H3,
  p,
  H1_rus
};
