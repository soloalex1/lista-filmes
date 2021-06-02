import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./slices/movie.slice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
