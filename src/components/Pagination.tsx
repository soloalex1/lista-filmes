import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import useStore from '@/store';

const MoviePagination = () => {
  const {
    movieList: { page, total_pages },
    setPage,
  } = useStore((state) => state)!;

  const isFirstPage = page === 1;

  const isLastPage = page >= total_pages;

  const prevPage = () => {
    if (!isFirstPage) setPage(page - 1);
  };

  const nextPage = () => {
    if (!isLastPage) setPage(page + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem title="Página anterior">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            onClick={prevPage}
            className={`${
              isFirstPage
                ? 'pointer-events-none cursor-default text-gray-400'
                : ''
            }`}
          />
        </PaginationItem>
        {!isFirstPage && (
          <PaginationItem onClick={() => setPage(page - 1)}>
            <PaginationLink>{page ? page - 1 : '-'}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {!isLastPage && (
          <PaginationItem onClick={() => setPage(page + 1)}>
            <PaginationLink>{page ? page + 1 : '-'}</PaginationLink>
          </PaginationItem>
        )}
        {isFirstPage && !isLastPage && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(page + 2)}>
              {page ? page + 2 : '-'}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem title="Próxima página">
          <PaginationNext
            aria-disabled={isLastPage}
            onClick={nextPage}
            className={`${
              isLastPage
                ? 'pointer-events-none cursor-default text-gray-400'
                : ''
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MoviePagination;
