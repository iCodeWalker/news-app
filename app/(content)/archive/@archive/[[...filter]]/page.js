import NewsList from "@/components/newsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

const FilteredNewsPage = async ({ params }) => {
  // const newsYear = params.year;
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  // ##### from previous root page.js ####
  let links = await getAvailableNewsYears();

  // ### If we have year but not month ###
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availabelYears = await getAvailableNewsYears();

  // #### throwing errors ####
  if (
    (selectedYear && !availabelYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }

  // ##### from previous root page.js ####
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((item) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${item}`
                : `/archive/${item}`;
              return (
                <li key={item}>
                  <Link href={href}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );

  // const news = getNewsForYear(newsYear);
};

export default FilteredNewsPage;
