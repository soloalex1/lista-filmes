import { useEffect, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';

import { Input } from '../ui/input';

import useStore from '@/store';
import { FilterType } from '@/types';

const Filters = () => {
  const {
    filters,
    setFilters,
    setPage,
    fetchGenreList,
    fetchInitialMovieList,
  } = useStore((state) => state);

  const { handleSubmit, control } = useForm<FilterType>({
    mode: 'onChange',
    defaultValues: {
      query: filters.query,
    },
  });

  const onSubmit: SubmitHandler<FilterType> = useCallback(
    (data, event) => {
      event?.preventDefault();
      setPage(1);
      setFilters(data);
    },
    [setFilters, setPage]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSearch = useCallback(
    debounce(() => handleSubmit(onSubmit)(), 500),
    []
  );

  useEffect(() => {
    fetchGenreList();
    fetchInitialMovieList();
  }, [fetchGenreList, fetchInitialMovieList]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
      <legend className="px-2 text-lg font-bold">Filtros</legend>
      <fieldset className="w-full my-2 px-2 grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-4">
        <Controller
          control={control}
          name="query"
          render={({ field }) => (
            <Input
              placeholder="Procure por um filme..."
              {...field}
              onChange={(e) => {
                field.onChange(e);
                onSearch();
              }}
            />
          )}
        />
      </fieldset>
    </form>
  );
};
export default Filters;
