import Card from "../Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const List = ({ ...attr }) => {
  const [lista, setLista] = useState([]);

  const moviesList = useSelector((state) => state.moviesList);
  const hasMovies = !!moviesList?.results;

  useEffect(() => {
    if (hasMovies) {
      setLista(moviesList.results);
    }
  }, [moviesList]);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-10 lg:grid-rows-5 gap-4 lg:gap-6 px-2 lg:px-4 my-4"
      {...attr}
    >
      {hasMovies && lista.map((filme) => <Card key={filme.id} filme={filme} />)}
    </section>
  );
};

export default List;
