import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import * as api from '@/api';

import { Movie, MovieResults } from '@/types';
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
    setPage: (page) => {
      set(
        () => ({ movieList: { ...get().movieList, page } }),
        false,
        'setPage'
      );

      if (get().currentQuery == Queries.Trending) {
        get().fetchInitialMovieList();
        return;
      }

      if (get().currentQuery == Queries.Search) {
        get().fetchMovieList();
      }
    },

    setFilters: (filters) => {
      set(() => ({ filters }), false, 'setFilters');

      if (!filters.query) {
        get().fetchInitialMovieList();
        return;
      }

      get().fetchMovieList();
    },

    fetchInitialMovieList: async () => {
      const movieList = await api.get<MovieResults>('/trending/movie/day', {
        page: get().movieList.page,
      });

      set(
        () => ({ movieList, currentQuery: Queries.Trending }),
        false,
        'fetchInitialMovieList'
      );
    },

    fetchMovieList: async () => {
      const movieList = await api.get<MovieResults>('/search/movie', {
        ...get().filters,
        page: get().movieList.page,
      });

      set(
        () => ({ movieList, currentQuery: Queries.Search }),
        false,
        'fetchMovieList'
      );
    },

    fetchMovieDetails: async (id) => {
      const movieInfo = await api.get<Movie>(`/movie/${id}`, {
        append_to_response: 'videos,credits',
      });

      set(() => ({ movieInfo }), false, 'fetchMovieDetails');
    },
  }))
);

export default useStore;
