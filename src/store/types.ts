import { CastEntry, CrewEntry, FilterType, Movie, MovieResults } from '@/types';

export default interface MovieStoreType {
  cast: CastEntry[];
  directors: CrewEntry[];
  currentQuery: string;
  movieList: MovieResults;
  movieInfo: Movie;
  filters: FilterType;
  setPage(page: number): void;
  setFilters(filters: FilterType): void;
  fetchInitialMovieList(): void;
  fetchMovieList(): void;
  fetchMovieDetails(id: string): void;
}
