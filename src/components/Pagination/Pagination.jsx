import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Pagination = ({ page, onChangePage }) => {
  const pageLength = useSelector((state) => state.moviesList.results?.length);
  const totalResults = useSelector((state) => state.moviesList?.total_results);
  const totalPages = useSelector((state) => state.moviesList?.total_pages);

  const [minIndex, setMinIndex] = useState(1);
  const [maxIndex, setMaxIndex] = useState(20);

  const nextPage = () => {
    const nextPage = page + 1;
    onChangePage(nextPage);
  };

  const prevPage = () => {
    const prevPage = page - 1;
    onChangePage(prevPage);
  };

  useEffect(() => {
    const currentMaxIndex = maxIndex;
    setMinIndex(currentMaxIndex + 1);
    setMaxIndex(pageLength * page);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 font-body">
            {totalPages && `Página ${page} de ${totalPages}`}
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
              Anterior
            </button>
            <button
              disabled={page === totalPages}
              onClick={nextPage}
              className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-body font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
