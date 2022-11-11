import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryjCard from "../../Shared/newsSummaryCard/NewsSummaryjCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h2>Dragon News Home: {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsSummaryjCard key={news._id} news={news}></NewsSummaryjCard>
      ))}
    </div>
  );
};

export default Home;
