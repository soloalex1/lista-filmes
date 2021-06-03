import useFetch from "../../hooks/useFetch";
// import { useSelector } from "react-redux";
import Screen from "../../components/Screen";
import { useEffect } from "react";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  // const movie = useSelector((state) => state);

  const filme = useFetch(`/movie/${id}`);

  useEffect(() => {}, [filme]);

  return (
    <Screen title={filme?.response?.title} arrowBack>
      <div
        className="max-w-screen h-full bg-cover bg-center object-contain"
        style={{
          backgroundImage: `url()`,
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${filme?.response?.backdrop_path}`}
          alt={filme?.response?.title}
        />
      </div>
      <h2 className="">{filme?.response?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme?.response?.poster_path}`}
        alt="Backdrop"
      />

      {filme?.response?.genres.map((genero) => (
        <h3>{genero.name}</h3>
      ))}
      <p>{filme?.response?.overview}</p>
    </Screen>
  );
};

export default MovieScreenContainer;
