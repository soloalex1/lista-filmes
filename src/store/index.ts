import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import * as api from '@/api';

import { FilterType, Genre, GenreQuery, Movie, MovieResults } from '@/types';

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
  fetchGenreList(): void;
  fetchMovieList(): void;
  setFilters(filters: FilterType): void;
}

const useStore = create<MovieStore>()(
  devtools((set, get) => ({
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

    setMovieList: (movieList) =>
      set(() => ({ movieList }), false, 'setMovieList'),

    setCurrentMovie: (movieInfo) => set(() => ({ movieInfo })),

    setPage: (page) => set(() => ({ currentPage: page })),

    fetchGenreList: async () => {
      const { genres } = await api.get<GenreQuery>(`/genre/movie/list`);

      set(
        (state) => ({ meta: { ...state.meta, genres } }),
        false,
        'fetchGenreList'
      );
    },

    fetchMovieList: async () => {
      const data = await api.get<MovieResults>('/trending/movie/day', {
        ...get().filters,
        sort_by: 'popularity.desc',
      });

      set(() => ({ movieList: data }), false, 'fetchMovieList');
    },

    setFilters: (filters) => set(() => ({ filters })),
  }))
);

export default useStore;
