import { Link } from 'react-router-dom';
import { Movie } from 'types';

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  const { id, title, release_date, poster_path } = movie;

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Link to={`/movie/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Ver filme</span>
      </Link>
      <img
        alt={`Pôster do filme ${title}`}
        className="h-[450px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        loading="lazy"
        style={{
          aspectRatio: '300/450',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transition-all duration-300 hidden group-hover:block">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{new Date(release_date).getFullYear() || '-'}</p>
      </div>
    </div>
  );
};

export default Card;
