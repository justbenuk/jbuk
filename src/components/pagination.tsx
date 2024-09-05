"use client";
import PageContainer from "./page-sections/page-container";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
interface IPagination {
  totalPages: number;
}

export default function Pagination({ totalPages }: IPagination) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <PageContainer>
      <div className="flex items-center justify-between space-x-1">
        <button className="h-8 w-8">
          <Link
            href={createPageURL(currentPage - 1)}
            className={
              currentPage - 1 === 0 ? `pointer-events-none opacity-50` : ""
            }
          >
            <FaArrowLeft className="text-lg font-bold" />
          </Link>
        </button>
        <p>
          <span>{currentPage}</span> of <span>{totalPages}</span> Pages
        </p>
        <button className="h-8 w-8">
          <Link
            href={createPageURL(currentPage + 1)}
            className={
              currentPage >= totalPages ? `pointer-events-none opacity-50` : ""
            }
          >
            <FaArrowRight className="text-lg font-bold" />
          </Link>
        </button>
      </div>
    </PageContainer>
  );
}
