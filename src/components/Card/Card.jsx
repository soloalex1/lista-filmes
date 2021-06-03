import { Link } from "react-router-dom";

const Card = ({ filme, ...attr }) => {
  return (
    <article
      className="w-full rounded-lg shadow-lg transition-all duration-700 transform hover:scale-105"
      {...attr}
    >
      <Link
        to={`/movie/${filme.id}`}
        component="div"
        className="flex flex-row justify-between h-full w-full"
      >
        <header className="">
          <h1 className="font-title font-bold text-3xl">{filme.title}</h1>
          <p className="font-text text-sm">
            {new Date(filme.release_date).getFullYear()}
          </p>
          <p className="font-text text-sm">{filme.overview}</p>
        </header>
        <div className="">
          <img
            alt={`Pôster de ${filme.title}`}
            className="h-full block object-cover w-full rounded-br rounded-tr"
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          />
        </div>
      </Link>
    </article>
  );
};

export default Card;
