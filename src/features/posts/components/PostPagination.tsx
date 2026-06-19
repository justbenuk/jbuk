import {
  PaginationContent,
  PaginationItem,
  Pagination as PaginationRoot,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PostPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <PaginationRoot>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/posts?page=${currentPage - 1}`} />
          </PaginationItem>
        )}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/posts?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  );
}
