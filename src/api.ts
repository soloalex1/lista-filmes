const KEY = import.meta.env.VITE_API_KEY;

export const BASE_URL = 'https://api.themoviedb.org/3';

export const get = async <T>(path: string, params?: unknown): Promise<T> => {
  const query = new URLSearchParams({
    ...params!,
    api_key: KEY,
    language: 'pt-BR',
  }).toString();

  const response = await fetch(`${BASE_URL}/${path}?${query}`, {
    method: 'GET',
  });

  if (!response.ok) throw new Error(response.statusText);

  return await (response.json() as Promise<T>);
};
