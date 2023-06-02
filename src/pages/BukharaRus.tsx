import React from "react";
import { useParams } from "react-router-dom";
import articleData from "../article.json";
import { ArticleCardRus } from "../components/ArticleCard/ArticleCardRus";

export const BukharaRus = () => {
  const { ident = "bukhara" } = useParams();
  const detail = articleData.find((articles) => articles.ident === ident);
  if (!detail) {
    return null;
  }

  return ( 


    <ArticleCardRus {...detail} />

   
  );
};

