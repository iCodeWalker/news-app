// "use client";
import ModalBackdrop from "@/components/modalBackdrop";
// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
  const newsItemSlug = params.news_id;
  // const newsItem = DUMMY_NEWS.find((item) => item.slug == newsItemSlug);
  const newsItem = await getNewsItem(newsItemSlug);

  // To navigate programatically
  // const router = useRouter();

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      {/* <div className="modal-backdrop" onClick={router.back} /> */}
      <ModalBackdrop />
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
