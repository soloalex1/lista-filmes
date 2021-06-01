import { useEffect, useState } from "react";

const KEY = "c391f33dc3ceb9d568d495ecc681876d";
const BASE_URL = "https://api.themoviedb.org/3";

const useFetch = (query) => {
  const url = `${BASE_URL}${query}?api_key=${KEY}&language=pt-BR`;

  const [response, setResponse] = useState(null);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return { response, error, isLoading };
};

export default useFetch;
