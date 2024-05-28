import { ControllerRenderProps } from 'react-hook-form';

import { Input } from './ui/input';

// import useDebounce from '@/hooks/useDebounce';

import { FilterType } from '@/types';

type SearchProps = {
  show: boolean;
} & ControllerRenderProps<FilterType, 'query'>;

const Search = ({ ...props }: SearchProps) => {
  // const debounceQuery = useDebounce(props.value!);

  // const movieSearch = useCallback(
  //   async (query: string) => {
  //     const currentPath = history.location.pathname;
  //     const previousPath = history.location?.state?.from;

  //     if (currentPath === '/') {
  //       const mountedURL =
  //         query === '' && previousPath !== '/movie/:id'
  //           ? 'trending/movie/day'
  //           : `search/movie?query=${query}`;

  //       fetchMovieList(mountedURL);

  //       return;
  //     }

  //     if (query.trim().length !== 0) {
  //       fetchMovieList(`search/movie?query=${query}`);
  //     }
  //   },
  //   [history, fetchMovieList]
  // );

  // useEffect(() => {
  //   props.onChange(debounceQuery);
  // }, [debounceQuery, props]);

  return <Input placeholder="Procure por um filme..." {...props} />;
};

export default Search;
