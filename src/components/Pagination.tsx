import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import useStore from "@/store";

type PaginationProps = {
  page: number;
  onChangePage(page: number): void;
};

const Pagination = ({ page, onChangePage }: PaginationProps) => {
  const totalPages = useStore((state) => state.movieList?.total_pages);

  const nextPage = () => {
    onChangePage(page + 1);
  };

  const prevPage = () => {
    onChangePage(page - 1);
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 font-body">
            {totalPages ? `Página ${page} de ${totalPages}` : null}
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              disabled={page === 1}
              onClick={prevPage}
              className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-body font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="fill-current h-6 w-6" />
            </button>
            <button
              disabled={page === totalPages}
              onClick={nextPage}
              className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-body font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="fill-current h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
