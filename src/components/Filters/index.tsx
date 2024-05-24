import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import GenreFilter from './Genre';

import useStore from '@/store';
import { FilterType } from '@/types';
import { fetchGenreList } from '@/api';

const Filters = () => {
  const {
    meta: { genres },
    filters,
    setGenres,
    setFilters,
  } = useStore((state) => state);

  const { handleSubmit, control } = useForm<FilterType>({
    mode: 'onChange',
    defaultValues: filters,
  });

  const onSubmit: SubmitHandler<FilterType> = (data, event) => {
    event?.preventDefault();
    setFilters(data);
  };

  useEffect(() => {
    fetchGenreList().then((data) => setGenres(data.genres));
  }, [setGenres]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <legend>Pesquisa de filmes</legend>
      <Controller
        control={control}
        name="genre"
        render={({ field }) => <GenreFilter genres={genres} {...field} />}
      />
    </form>
  );
};
export default Filters;
