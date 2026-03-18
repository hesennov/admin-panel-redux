interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
}

export default function ReusablePagination({
  page,
  totalPage,
  setPage,
}: PaginationProps) {
  if (totalPage <= 1) return null;

  return (
    <div className="felx justify-center items-center gap-2 mt-6">
      <button
        className="px-3 py-1 border raunded disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
      >
        prev
      </button>
      {Array.from({ length: totalPage }, (_, i) => {
        const pageNumber = i + 1;
        return (
          <button
          key={pageNumber}
            className={`px-3 py-1 rounded border ${page === pageNumber ? "bg-blue-600 text-white" : "bg-white"}`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="px-3 py-1 border raunded disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >
        next
      </button>
    </div>
  );
}
