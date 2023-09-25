import { Link } from "react-router-dom";
import { Movie } from "types";

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  const { id, title, release_date, backdrop_path } = movie;

  const backgroundURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <Link
      to={`/movie/${id}`}
      className="block w-full shadow-lg overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-full min-h-full w-full flex items-end bg-blend-multiply z-20 rounded-lg bg-gradient-to-r from-gray-900 to-transparent py-4 px-2">
        <div className="p-6">
          <h4 className="text-gray-300">
            {new Date(release_date).getFullYear()}
          </h4>
          <h1 className="font-title text-3xl font-bold text-gray-300">
            {title}
          </h1>
        </div>
      </div>
      <img
        src={backgroundURL}
        className="absolute top-0 right-0 z-10 w-full h-full bg-cover bg-center"
        loading="lazy"
      />
    </Link>
  );
};

export default Card;
