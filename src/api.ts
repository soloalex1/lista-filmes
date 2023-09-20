const KEY = "c391f33dc3ceb9d568d495ecc681876d";
const BASE_URL = "https://api.themoviedb.org/3";

import { MovieResults } from "types";

const client = async (endpoint: string): Promise<MovieResults> => {
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

export default client;
