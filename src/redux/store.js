import { createStore } from "redux";
import { movieReducer } from "./reducers";

const initialState = {
  moviesList: {},
  movieInfo: {},
};

export const createReduxStore = () => {
  return createStore(movieReducer, initialState);
};
