import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCardRus } from "../components/ArticleCard/ArticleCardRus";

export const ToursRus = () => {
  const { ident = "tours" } = useParams();
  const detail = articleData.find((articles) => articles.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCardRus {...detail} />;
};
