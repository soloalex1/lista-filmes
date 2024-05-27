import { create } from 'zustand';

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

  fetchGenreList: async () => {
    const data = await api.get<GenreQuery>(`/genre/movie/list`);

    set((state) => ({ meta: { ...state.meta, genres: data.genres } }));
  },

  setFilters: (filters) => set(() => ({ filters })),
}));

export default useStore;
