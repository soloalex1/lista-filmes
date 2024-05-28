import { useEffect, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import GenreFilter from './Genre';
import { Input } from '../ui/input';

import useStore from '@/store';
import { FilterType } from '@/types';

const Filters = () => {
  const {
    meta: { genres },
    filters,
    setFilters,
    fetchGenreList,
  } = useStore((state) => state);

  const { handleSubmit, control, watch } = useForm<FilterType>({
    mode: 'onChange',
    defaultValues: filters,
  });

  const onSubmit: SubmitHandler<FilterType> = useCallback(
    (data, event) => {
      event?.preventDefault();
      setFilters(data);
    },
    [setFilters]
  );

  useEffect(() => {
    fetchGenreList();
  }, [fetchGenreList]);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, onSubmit, watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
      <legend>Pesquisa de filmes</legend>
      <Controller
        control={control}
        name="genre"
        render={({ field }) => <GenreFilter genres={genres} {...field} />}
      />

      <Controller
        control={control}
        name="query"
        render={({ field }) => (
          <Input placeholder="Procure por um filme..." {...field} />
        )}
      />
    </form>
  );
};
export default Filters;
