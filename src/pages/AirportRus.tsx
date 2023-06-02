import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCardRus } from "../components/ArticleCard/ArticleCardRus";

export const AirportRus = () => {
  const { ident = "airports" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCardRus {...detail} />;
};
