import { lazy, useEffect, Suspense } from 'react';

import Screen from '@/components/Screen';
import DetailsHeader from '@/components/DetailsHeader';

import TrailersSkeleton from '@/components/Trailers/skeleton';
import AboutSkeleton from '@/components/About/skeleton';
import DirectionSkeleton from '@/components/Direction/skeleton';
import CastSkeleton from '@/components/Profiles/Cast/skeleton';
import BannerSkeleton from '@/components/Banner/skeleton';

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
  const Direction = lazy(() => import('@/components/Direction'));
  const Cast = lazy(() => import('@/components/Cast'));
  const Banner = lazy(() => import('@/components/Banner'));

  const { movieInfo, fetchMovieDetails } = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovieDetails(id);
  }, [fetchMovieDetails, id]);

  const renderSkeleton = () => (
    <>
      <TrailersSkeleton />
      <AboutSkeleton />
      <DirectionSkeleton />
      <CastSkeleton />
    </>
  );

  return (
    <Screen>
      <DetailsHeader />
      <Suspense fallback={<BannerSkeleton />}>
        <Banner movie={movieInfo} />
      </Suspense>

      <div className="col-start-2 px-4 md:px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <Suspense fallback={renderSkeleton()}>
            <Trailers videos={movieInfo.videos?.results} />
            <About movie={movieInfo} />
            <Direction />
            <Cast />
          </Suspense>
        </div>
      </div>
    </Screen>
  );
};

export default DetailsPage;
