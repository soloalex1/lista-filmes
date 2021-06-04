import { Link } from "react-router-dom";

const Card = ({ filme, ...attr }) => {
  return (
    <Link
      to={`/movie/${filme.id}`}
      className="block w-full shadow-lg overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
      {...attr}
    >
      <div className="relative h-full min-h-full w-full flex items-end bg-blend-multiply z-20 rounded-lg bg-gradient-to-r from-gray-900 to-transparent py-4 px-2">
        <div className="p-6">
          <h4 className="text-gray-300">
            {new Date(filme.release_date).getFullYear()}
          </h4>
          <h1 className="font-title text-3xl font-bold text-gray-300">
            {filme.title}
          </h1>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 z-10 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
        }}
      />
    </Link>
  );
};

export default Card;
