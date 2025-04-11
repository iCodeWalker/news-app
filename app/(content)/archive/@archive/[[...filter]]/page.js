import NewsList from "@/components/newsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

const FilterHeader = async ({ year, month }) => {
  const availabelYears = await getAvailableNewsYears();
  let links = availabelYears;

  if (
    (year && !availabelYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid Filter");
  }

  // ### If we have year but not month ###
  if (year && !month) {
    // news = await getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    // news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((item) => {
            const href = year ? `/archive/${year}/${item}` : `/archive/${item}`;
            return (
              <li key={item}>
                <Link href={href}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};

const FilteredNewsPage = async ({ params }) => {
  // const newsYear = params.year;
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  // let news;
  // ##### from previous root page.js ####
  // const availabelYears = await getAvailableNewsYears();
  // let links = availabelYears;

  // // ### If we have year but not month ###
  // if (selectedYear && !selectedMonth) {
  //   // news = await getNewsForYear(selectedYear);
  //   links = getAvailableNewsMonths(selectedYear);
  // }

  // if (selectedYear && selectedMonth) {
  //   // news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  //   links = [];
  // }

  // let newsContent = <p>No news found for the selected period.</p>;

  // if (news && news.length > 0) {
  //   newsContent = <NewsList news={news} />;
  // }

  // #### throwing errors ####
  // if (
  //   (selectedYear && !availabelYears.includes(selectedYear)) ||
  //   (selectedMonth &&
  //     !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  // ) {
  //   throw new Error("Invalid Filter");
  // }

  // ##### from previous root page.js ####
  return (
    <>
      {/* <header id="archive-header">
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
      </header> */}
      <Suspense fallback={<p>Loading Filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      {/* {newsContent} */}
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );

  // const news = getNewsForYear(newsYear);
};

export default FilteredNewsPage;
