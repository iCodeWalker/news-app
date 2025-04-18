import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

const ArchivePage = () => {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((item) => {
            return (
              <li key={item}>
                <Link href={`/archive/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
