import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import useStore from '@/store';

type PaginationProps = {
  page: number;
  onChangePage(page: number): void;
};

const MoviePagination = ({ page, onChangePage }: PaginationProps) => {
  const currentPage = useStore((state) => state.movieList?.page)!;

  const isFirstPage = currentPage === 1;

  const nextPage = () => onChangePage(page + 1);

  const prevPage = () => {
    if (!isFirstPage) {
      onChangePage(page - 1);
    }
  };

  const goToPage = (page: number) => onChangePage(page);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem title="Anterior">
          <PaginationPrevious
            aria-disabled={isFirstPage}
            className={`${
              isFirstPage
                ? 'pointer-events-none cursor-default text-gray-400'
                : ''
            }`}
            onClick={prevPage}
          />
        </PaginationItem>
        {!isFirstPage && (
          <PaginationItem onClick={() => goToPage(currentPage - 1)}>
            <PaginationLink>{currentPage - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => goToPage(currentPage + 1)}>
          <PaginationLink>{currentPage + 1}</PaginationLink>
        </PaginationItem>
        {isFirstPage && (
          <PaginationItem>
            <PaginationLink onClick={() => goToPage(currentPage + 2)}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem title="Próxima">
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MoviePagination;
