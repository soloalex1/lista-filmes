import { FilterType, Genre, Movie, MovieResults } from '@/types';

export default interface MovieStoreType {
  currentPage: number;
  movieList: Partial<MovieResults>;
  movieInfo: Partial<Movie>;
  filters: FilterType;
  meta: {
    genres: Genre[];
  };
  setMovieList(movieList: MovieResults): void;
  setCurrentMovie(movieInfo: Movie): void;
  setPage(page: number): void;
  fetchGenreList(): void;
  fetchMovieList(path: string): void;
  setFilters(filters: FilterType): void;
}
