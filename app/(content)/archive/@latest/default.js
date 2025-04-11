import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsPage;
