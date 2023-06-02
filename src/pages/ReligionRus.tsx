import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCardRus } from "../components/ArticleCard/ArticleCardRus";

export const ReligionRus = () => {
  const { ident = "religion" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCardRus {...detail} />;
};
