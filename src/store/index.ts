import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import * as api from '@/api';

import { GenreQuery, MovieResults } from '@/types';
import MovieStoreType from './types';

enum Queries {
  Trending = 'fetchInitialMovieList',
  Search = 'fetchMovieList',
}

const useStore = create<MovieStoreType>()(
  devtools((set, get) => ({
    currentQuery: '',
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

    setPage: (page) => {
      set(
        () => ({ movieList: { ...get().movieList, page } }),
        false,
        'setPage'
      );

      if (get().currentQuery == Queries.Trending) {
        get().fetchInitialMovieList();
      }

      if (get().currentQuery == Queries.Search) {
        get().fetchMovieList();
      }
    },

    fetchGenreList: async () => {
      const { genres } = await api.get<GenreQuery>(`/genre/movie/list`);

      set(
        (state) => ({ meta: { ...state.meta, genres } }),
        false,
        'fetchGenreList'
      );
    },

    fetchInitialMovieList: async () => {
      const data = await api.get<MovieResults>('/trending/movie/day', {
        page: get().movieList.page,
      });

      set(
        () => ({ movieList: data, currentQuery: Queries.Trending }),
        false,
        'fetchInitialMovieList'
      );
    },

    fetchMovieList: async () => {
      const data = await api.get<MovieResults>('/search/movie', {
        ...get().filters,
        page: get().movieList.page,
      });

      set(
        () => ({ movieList: data, currentQuery: Queries.Search }),
        false,
        'fetchMovieList'
      );
    },

    setFilters: (filters) => {
      set(() => ({ filters }), false, 'setFilters');

      get().fetchMovieList();
    },
  }))
);

export default useStore;
