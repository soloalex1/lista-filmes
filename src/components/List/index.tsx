import Card from '@/components/Card';

import { Movie } from '@/types';

type ListProps = {
  movies: Movie[];
};

const List = ({ movies }: ListProps) => {
  return (
    <section className="px-4 md:px-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
      {movies?.length > 0 &&
        movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </section>
  );
};

export default List;
