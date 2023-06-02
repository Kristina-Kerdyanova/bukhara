import React from "react";
import articleData from "../article.json";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { useParams } from "react-router-dom";

export const History = () => {
  const { ident = "history" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCard {...detail} />;
};
