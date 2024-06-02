import { FilterType, Movie, MovieResults } from '@/types';

export default interface MovieStoreType {
  currentQuery: string;
  movieList: MovieResults;
  movieInfo: Partial<Movie>;
  filters: FilterType;
  setPage(page: number): void;
  setFilters(filters: FilterType): void;
  fetchInitialMovieList(): void;
  fetchMovieList(): void;
  fetchMovieDetails(id: string): void;
}
