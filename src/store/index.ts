import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import * as api from '@/api';

import { GenreQuery, MovieResults } from '@/types';
import MovieStoreType from './types';

const useStore = create<MovieStoreType>()(
  devtools((set, get) => ({
    currentPage: 1,
    movieList: {},
    movieInfo: {},
    filters: {
      query: '',
      genre: 0,
    },
    meta: {
      genres: [],
    },

    setMovieList: (movieList) =>
      set(() => ({ movieList }), false, 'setMovieList'),

    setCurrentMovie: (movieInfo) =>
      set(() => ({ movieInfo }), false, 'setCurrentMovie'),

    setPage: (page) => set(() => ({ currentPage: page }), false, 'setPage'),

    fetchGenreList: async () => {
      const { genres } = await api.get<GenreQuery>(`/genre/movie/list`);

      set(
        (state) => ({ meta: { ...state.meta, genres } }),
        false,
        'fetchGenreList'
      );
    },

    fetchMovieList: async (path) => {
      const data = await api.get<MovieResults>(path, {
        ...get().filters,
        page: get().currentPage,
        sort_by: 'popularity.desc',
      });

      set(() => ({ movieList: data }), false, 'fetchMovieList');
    },

    setFilters: (filters) => set(() => ({ filters }), false, 'setFilters'),
  }))
);

export default useStore;
