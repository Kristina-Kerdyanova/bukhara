import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";

export const Bukhara = () => {
  const { ident = "bukhara" } = useParams();
  const detail = articleData.find((articles) => articles.ident === ident);
  if (!detail) {
    return null;
  }

  return <ArticleCard {...detail} />;
};