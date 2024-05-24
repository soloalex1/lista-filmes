import { create } from 'zustand';
import { FilterType, Genre, Movie, MovieResults } from '@/types';

interface MovieStore {
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
  setGenres(genres: Genre[]): void;
  setFilters(filters: FilterType): void;
}

const useStore = create<MovieStore>()((set) => ({
  currentPage: 1,
  movieList: {},
  movieInfo: {},
  filters: {
    search: '',
    genre: 0,
  },
  meta: {
    genres: [],
  },

  setMovieList: (movieList) => set(() => ({ movieList })),

  setCurrentMovie: (movieInfo) => set(() => ({ movieInfo })),

  setPage: (page) => set(() => ({ currentPage: page })),

  setGenres: (genres) => set((state) => ({ meta: { ...state.meta, genres } })),

  setFilters: (filters) => set(() => ({ filters })),
}));

export default useStore;
