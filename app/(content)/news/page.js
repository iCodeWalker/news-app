// "use client";

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList";
// import { useEffect, useState } from "react";

export default async function NewsPage() {
  // #################### Code for client side data fetching #################
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   async function fetchNews() {
  //     setIsLoading(true);

  //     const response = await fetch("http://localhost:8080/news");

  //     if (!response.ok) {
  //       setError("Failed to fetch news");
  //       setIsLoading(false);
  //     }

  //     const news = await response.json();
  //     setIsLoading(false);
  //     setNews(news);
  //   }

  //   fetchNews();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // ################################### Ends #####################################

  // #################### Code for server side data fetching #################

  // ## In server components we can directly send api request from the components

  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }
  const news = await response.json();
  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <div>
      <h1> News Page</h1>
      {newsContent}
    </div>
  );
}
