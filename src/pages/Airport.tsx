import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";

export const Airport = () => {
  const { ident = "airports" } = useParams();
  const detail = articleData.find((article) => article.ident === ident);
  if (!detail) {
    return null;
  }
  return <ArticleCard {...detail} />;
};
