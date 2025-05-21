import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 md:p-20 flex-wrap justify-center py-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 transition-all duration-300 border ${
          currentPage === 1 ? "disabled:opacity-50" : "hover:bg-emerald-500"
        } rounded  cursor-pointer`}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 hover:bg-emerald-500 transition-all duration-300 py-1 border rounded cursor-pointer ${
            page === currentPage ? "bg-emerald-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 cursor-pointer transition-all duration-300 ${
          currentPage === totalPages
            ? "disabled:opacity-50"
            : "hover:bg-emerald-500"
        }  py-1 border rounded `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
