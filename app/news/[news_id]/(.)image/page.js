import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.news_id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug == newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <h1>Intercepted</h1>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
};

export default InterceptedImagePage;
