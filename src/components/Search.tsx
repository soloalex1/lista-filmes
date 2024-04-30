import { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { useHistory } from 'react-router';

import useDebounce from '@/hooks/useDebounce';

import useStore from '@/store';

import { fetchMovieList } from '@/api';

type SearchProps = {
  show: boolean;
};
interface PathnameState {
  from?: string;
}

const Search = ({ show }: SearchProps) => {
  const history = useHistory<PathnameState>();

  const [queryString, setQueryString] = useState('');

  const { setMovieList } = useStore((state) => state);

  const debounceQuery = useDebounce(queryString);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.target.value);
  };

  const movieSearch = useCallback(
    async (query: string) => {
      const currentPath = history.location.pathname;
      const previousPath = history.location?.state?.from;

      if (currentPath === '/') {
        const mountedURL =
          query === '' && previousPath !== '/movie/:id'
            ? 'trending/movie/day?sort_by=popularity.desc&page=1&'
            : `search/movie?query=${query}&`;

        await fetchMovieList(mountedURL)
          .then((data) => {
            setMovieList(data);
          })
          .catch((error) => {
            throw new Error(error);
          });

        return;
      }

      if (query.trim().length !== 0) {
        fetchMovieList(`search/movie?query=${query}&`)
          .then((data) => {
            setMovieList(data);
          })
          .then(() => {
            history.push('/', { from: '/movie/:id' });
          })
          .catch((error) => {
            console.log(error);
          });

        return;
      }
    },
    [history, setMovieList]
  );

  useEffect(() => {
    movieSearch(debounceQuery);
  }, [movieSearch, debounceQuery]);

  return (
    <div
      className={`text-white transition-all duration-500 ${
        show ? 'w-full' : 'w-0'
      }`}
    >
      <input
        type="text"
        className="w-full h-full p-0 pl-4 md:pl-10 text-xl md:text-4xl uppercase font-black border-black border-x-2 bg-black float-right"
        placeholder="Procure um filme..."
        value={queryString}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
