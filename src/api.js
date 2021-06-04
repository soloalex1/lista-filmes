const KEY = "c391f33dc3ceb9d568d495ecc681876d";
const BASE_URL = "https://api.themoviedb.org/3/";

const client = (endpoint) => {
  const options = {
    method: "GET",
  };

  return fetch(
    `${BASE_URL}${endpoint}api_key=${KEY}&language=pt-BR`,
    options
  ).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
};

export default client;
