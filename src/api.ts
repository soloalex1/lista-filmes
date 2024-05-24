const KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

import { GenreQuery, Movie, MovieResults } from '@/types';

export const fetchGenreList = async (): Promise<GenreQuery> => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?language=pt-BR&api_key=${KEY}`
  );

  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
};

export const fetchMovieList = async (
  endpoint: string
): Promise<MovieResults> => {
  const options = {
    method: 'GET',
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
    method: 'GET',
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
