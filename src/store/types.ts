import { FilterType, Genre, Movie, MovieResults } from '@/types';

export default interface MovieStoreType {
  movieList: MovieResults;
  movieInfo: Partial<Movie>;
  filters: FilterType;
  meta: {
    genres: Genre[];
  };
  setMovieList(movieList: MovieResults): void;
  setCurrentMovie(movieInfo: Movie): void;
  setPage(page: number): void;
  fetchGenreList(): void;
  fetchInitialMovieList(): void;
  fetchMovieList(): void;
  setFilters(filters: FilterType): void;
}
