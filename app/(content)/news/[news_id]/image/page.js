// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const newsItemSlug = params.news_id;
  // const newsItem = DUMMY_NEWS.find((item) => item.slug == newsItemSlug);
  const newsItem = await getNewsItem(newsItemSlug);
  console.log(newsItem, "NewsDetailLayout");
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
