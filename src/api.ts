const KEY = "c391f33dc3ceb9d568d495ecc681876d";
const BASE_URL = "https://api.themoviedb.org/3";

import { Movie, MovieResults } from "types";

export const fetchMovieList = async (
  endpoint: string
): Promise<MovieResults> => {
  const options = {
    method: "GET",
  };

  const response = await fetch(
    `${BASE_URL}/${endpoint}api_key=${KEY}&language=pt-BR`,
    options
  );

  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const options = {
    method: "GET",
  };

  const response = await fetch(
    `${BASE_URL}/movie/${id}?append_to_response=videos,credits&api_key=${KEY}&language=pt-BR`,
    options
  );

  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
};
