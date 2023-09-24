import Card from "components/Card";

import { Movie } from "types";

type ListProps = {
  movies: Movie[];
};

const List = ({ movies }: ListProps) => {
  const hasMovies = movies.length > 0;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-10 lg:grid-rows-6 gap-4 lg:gap-6 px-2 lg:px-4 my-4">
      {hasMovies &&
        movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </section>
  );
};

export default List;
