import { lazy, useEffect, Suspense } from 'react';

import Screen from '@/components/Screen';
import DetailsHeader from '@/components/DetailsHeader';
import TrailersSkeleton from '@/components/Trailers/skeleton';

import useStore from '@/store';

// import { CastEntry } from '@/types';

type MovieScreenProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const DetailsPage = ({
  match: {
    params: { id },
  },
}: MovieScreenProps) => {
  const Trailers = lazy(() => import('@/components/Trailers'));

  const { movieInfo, fetchMovieDetails } = useStore();

  // const [cast, setCast] = useState<CastEntry[]>([]);
  // const [directors, setDirectors] = useState('');

  const getMovieDate = movieInfo?.release_date
    ? new Date(movieInfo.release_date).getFullYear()
    : '-';

  const getMovieGenre =
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    movieInfo?.genres?.length! > 0 ? movieInfo?.genres![0].name : '-';

  useEffect(() => {
    fetchMovieDetails(id);
  }, [fetchMovieDetails, id]);

  // useEffect(() => {
  //   if (movieInfo) {
  //     setCast(
  //       movieInfo?.credits!.cast!.filter(
  //         ({ order, known_for_department }) =>
  //           order < 5 && known_for_department === 'Acting'
  //       )
  //     );

  //     const directorList = movieInfo?.credits!.crew.filter(
  //       ({ job }) => job === 'Director'
  //     );

  //     setDirectors(
  //       directorList.length === 1
  //         ? directorList[0].name
  //         : directorList.map(({ name }) => name).join(', ')
  //     );
  //   }
  // }, [movieInfo]);

  return (
    <Screen>
      <DetailsHeader />

      <div className=" col-full relative h-[70dvh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}`}
          alt={`Imagem promocional do filme ${movieInfo?.title}`}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 md:px-6 py-8 md:py-12">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {movieInfo?.title}
          </h1>
          <div className="mt-2 flex items-center gap-4 text-gray-300 md:text-xl">
            <div>{getMovieGenre}</div>
            <div>•</div>
            <div>{getMovieDate}</div>
          </div>
          <p className="mt-2 text-lg text-gray-300 md:text-xl">
            {movieInfo?.tagline}
          </p>
        </div>
      </div>
      <div className="col-start-2 px-4 md:px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain */}
          <Suspense fallback={<TrailersSkeleton />}>
            {!!movieInfo?.videos?.results.length && (
              <Trailers videos={movieInfo.videos?.results} />
            )}
          </Suspense>
          <section aria-labelledby="section-about">
            <h2
              id="section-about"
              className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
            >
              Sobre
            </h2>
            <div className="mt-6 space-y-4 text-lg text-gray-500 dark:text-gray-400">
              <p>{movieInfo?.overview}</p>
            </div>
          </section>
        </div>
      </div>
    </Screen>
  );
};

export default DetailsPage;
