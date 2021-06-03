import { Link } from "react-router-dom";

const Card = ({ filme, ...attr }) => {
  return (
    <article
      className="w-full rounded-lg shadow-lg transition-all duration-700 transform hover:scale-105"
      {...attr}
    >
      <Link to={`/movie/${filme.id}`} className="h-full w-full">
        <header className="relative w-full h-full bg-blend-multiply z-20 bg-gradient-to-r from-gray-900 to-transparent py-4 px-2">
          <h1 className="font-title font-bold text-gray-300 text-3xl">
            {filme.title}
          </h1>
          <p className="font-text text-sm text-gray-300">
            {new Date(filme.release_date).getFullYear()}
          </p>
        </header>
        <div
          className="absolute top-0 right-0 z-10 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
          }}
        ></div>
      </Link>
    </article>
  );
};

export default Card;
