"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.news_id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug == newsItemSlug);

  // To navigate programatically
  const router = useRouter();

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="700px"
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
