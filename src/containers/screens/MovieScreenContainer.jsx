import useFetch from "../../hooks/useFetch";
// import { useSelector } from "react-redux";
import Screen from "../../components/Screen";
import { useEffect } from "react";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  // const movie = useSelector((state) => state);

  const movie = useFetch(`/movie/${id}`);

  useEffect(() => {}, [movie]);

  return (
    <Screen title={movie?.response?.title} arrowBack>
      <h2 className="mt-20">{movie?.response?.original_title}</h2>
    </Screen>
  );
};

export default MovieScreenContainer;
