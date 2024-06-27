import { Movie } from '@/types';

type BannerProps = {
  movie: Partial<Movie>;
};

const Banner = ({ movie }: BannerProps) => {
  const getMovieDate = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : '-';

  const getMovieGenre =
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    movie?.genres?.length! > 0 ? movie?.genres![0].name : '-';

  return (
    <div className="col-full relative h-[75dvh] w-full overflow-hidden">
      <img
        className="h-full w-full object-cover object-center xl:object-left-top"
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={`Imagem promocional do filme ${movie?.title}`}
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {movie?.title}
        </h1>
        <div className="mt-2 flex items-center gap-4 text-gray-300 md:text-xl">
          <div>{getMovieGenre}</div>
          <div>•</div>
          <div>{getMovieDate}</div>
        </div>
        <p className="mt-2 text-lg text-gray-300 md:text-xl">
          {movie?.tagline}
        </p>
      </div>
    </div>
  );
};

export default Banner;
