import { create } from "zustand";
import { Movie, MovieResults } from "@/types";

interface MovieStore {
  currentPage: number;
  movieList: Partial<MovieResults>;
  movieInfo: Partial<Movie>;
  setMovieList(movieList: MovieResults): void;
  setCurrentMovie(movieInfo: Movie): void;
  setPage(page: number): void;
}

const useStore = create<MovieStore>()((set) => ({
  currentPage: 1,
  movieList: {},
  movieInfo: {},

  setMovieList: (movieList) => set((state) => ({ ...state, movieList })),

  setCurrentMovie: (movieInfo) => set((state) => ({ ...state, movieInfo })),

  setPage: (page) => set((state) => ({ ...state, currentPage: page })),
}));

export default useStore;
