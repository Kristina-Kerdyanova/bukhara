import React from "react";
import articleData from "../article.json";
import { useParams } from "react-router-dom";
import { ArticleCardRus } from "../components/ArticleCard/ArticleCardRus";

export const HistoryRus = () => {
  const { ident = "history" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCardRus {...detail} />;
};
