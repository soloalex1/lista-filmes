export const setMoviesList = (response) => ({
  type: "SET_MOVIES_LIST",
  payload: {
    response,
  },
});

export const getMoviesList = (response) => ({
  type: "GET_MOVIES_LIST",
  payload: {
    response,
  },
});
