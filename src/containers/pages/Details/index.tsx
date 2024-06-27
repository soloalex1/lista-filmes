import { lazy, useEffect, Suspense } from 'react';

import Screen from '@/components/Screen';
import DetailsHeader from '@/components/DetailsHeader';
import TrailersSkeleton from '@/components/Trailers/skeleton';
import Direction from '@/components/Direction';
import Cast from '@/components/Cast';
import AboutSkeleton from '@/components/About/skeleton';

import useStore from '@/store';

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
  const About = lazy(() => import('@/components/About'));

  const { movieInfo, fetchMovieDetails } = useStore();

  const getMovieDate = movieInfo?.release_date
    ? new Date(movieInfo.release_date).getFullYear()
    : '-';

  const getMovieGenre =
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    movieInfo?.genres?.length! > 0 ? movieInfo?.genres![0].name : '-';

  useEffect(() => {
    fetchMovieDetails(id);
  }, [fetchMovieDetails, id]);

  return (
    <Screen>
      <DetailsHeader />

      <div className="col-full relative h-[75dvh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center xl:object-left-top"
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

          <Suspense fallback={<AboutSkeleton />}>
            {!!movieInfo?.overview && <About movie={movieInfo} />}
          </Suspense>
          <Direction />
          <Cast />
        </div>
      </div>
    </Screen>
  );
};

export default DetailsPage;
