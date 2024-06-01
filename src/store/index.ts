import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import * as api from '@/api';

import { GenreQuery, MovieResults } from '@/types';
import MovieStoreType from './types';

const useStore = create<MovieStoreType>()(
  devtools((set, get) => ({
    movieList: {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    },
    movieInfo: {},
    filters: {
      query: '',
    },
    meta: {
      genres: [],
    },

    setMovieList: (movieList) =>
      set(() => ({ movieList }), false, 'setMovieList'),

    setCurrentMovie: (movieInfo) =>
      set(() => ({ movieInfo }), false, 'setCurrentMovie'),

    setPage: (page) =>
      set(
        () => ({ movieList: { ...get().movieList, page } }),
        false,
        'setPage'
      ),

    fetchGenreList: async () => {
      const { genres } = await api.get<GenreQuery>(`/genre/movie/list`);

      set(
        (state) => ({ meta: { ...state.meta, genres } }),
        false,
        'fetchGenreList'
      );
    },

    fetchInitialMovieList: async () => {
      const data = await api.get<MovieResults>('/trending/movie/day');

      set(() => ({ movieList: data }), false, 'fetchInitialMovieList');
    },

    fetchMovieList: async () => {
      const data = await api.get<MovieResults>('/search/movie', {
        ...get().filters,
        page: get().movieList.page,
      });

      set(() => ({ movieList: data }), false, 'fetchMovieList');
    },

    setFilters: (filters) => set(() => ({ filters }), false, 'setFilters'),
  }))
);

export default useStore;
