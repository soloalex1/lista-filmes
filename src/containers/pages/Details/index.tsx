import { useEffect, useState } from 'react';

import Info from '@/components/Info';
import Screen from '@/components/Screen';
import VideoCard from '@/components/VideoCard';

import useStore from '@/store';

import { CastEntry } from '@/types';
import DetailsHeader from '@/components/DetailsHeader';

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
  const { movieInfo, fetchMovieDetails } = useStore();

  const [cast, setCast] = useState<CastEntry[]>([]);
  const [directors, setDirectors] = useState('');

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

      <div className=" col-full relative h-[50dvh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}`}
          alt={`Imagem do filme ${movieInfo?.title}`}
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
            {movieInfo?.overview}
          </p>
        </div>
      </div>
      {/* <section
        className="absolute top-0 left-0 w-screen h-auto md:h-full text-white bg-cover bg-full bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path})`,
        }}
      >
        <div
          id="main-grid"
          className="w-full md:h-full grid grid-cols-4 md:grid-cols-5 grid-rows-6 md:grid-rows-4 bg-blend-multiply bg-gradient-to-r from-gray-900 to-transparent"
        >
          <div className="col-span-4 row-span-2 md:row-start-2 bg-opacity-80 flex justify-start items-center px-4 md:px-8">
            <div className="">
              <h1 className="font-title font-bold text-2xl md:text-5xl flex-grow mb-2 justify-self-end leading-normal">
                {movieInfo?.title}
              </h1>

              <h2 className="font-body flex-grow-0 text-md md:text-lg text-gray-300">
                {movieInfo?.tagline}
              </h2>
              {movieInfo?.release_date && (
                <h4>{`${new Date(
                  movieInfo.release_date
                ).getFullYear()} | ${directors}`}</h4>
              )}
            </div>
          </div>

          <Info movie={movieInfo!} cast={cast!} />
          {movieInfo && (
            <div className="col-span-4 md:col-span-2 row-span-2 md:col-start-4 row-start-5 py-2 px-4 flex flex-col justify-end ">
              <h3 className="font-title font-bold text-md md:text-xl mb-2">
                Vídeos Relacionados
              </h3>
              <div className="w-full h-auto grid gap-2 grid-cols-2 grid-rows-auto place-content-end">
                {movieInfo?.videos?.results.map((video) => (
                  <VideoCard video={video} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section> */}
    </Screen>
  );
};

export default DetailsPage;
