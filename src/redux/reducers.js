export const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES_LIST":
      return { ...state, moviesList: action.payload.response };

    case "GET_MOVIES_LIST":
      return { ...state, moviesList: action.payload.response };

    case "GET_MOVIE_DETAILS":
      state.movieInfo = action.payload.response;
      return state;

    default:
      return state;
  }
};
