import { create } from "zustand";

const useStore = create((set) => ({
  moviesList: {},
  movieInfo: {},
  setMovieList: (moviesList) => set((state) => ({ ...state, moviesList })),
  setCurrentMovie: (movieInfo) => set((state) => ({ ...state, movieInfo })),
}));

export default useStore;
