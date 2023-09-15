import { create } from "zustand";

const useStore = create((set) => ({
  currentPage: 1,
  movieList: {},
  movieInfo: {},
  setMovieList: (movieList) => set((state) => ({ ...state, movieList })),
  setCurrentMovie: (movieInfo) => set((state) => ({ ...state, movieInfo })),
  setPage: (page) => set((state) => ({ ...state, currentPage: page })),
}));

export default useStore;
