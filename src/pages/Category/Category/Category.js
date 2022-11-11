import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryjCard from "../../Shared/newsSummaryCard/NewsSummaryjCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>Data found: {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsSummaryjCard key={news._id} news={news}></NewsSummaryjCard>
      ))}
    </div>
  );
};

export default Category;
