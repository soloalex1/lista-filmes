import { useEffect, useState } from "react";

import Info from "@/components/Info";
import Screen from "@/components/Screen";
import VideoCard from "@/components/VideoCard";

import { fetchMovieDetails } from "@/api";

import { CastEntry, Movie } from "@/types";

type MovieScreenProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const MoviePage = ({
  match: {
    params: { id },
  },
}: MovieScreenProps) => {
  const [movie, setMovie] = useState<Movie>();
  const [cast, setCast] = useState<CastEntry[]>([]);
  const [directors, setDirectors] = useState("");

  useEffect(() => {
    fetchMovieDetails(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  useEffect(() => {
    if (movie) {
      setCast(
        movie?.credits?.cast.filter(
          ({ order, known_for_department }) =>
            order < 5 && known_for_department === "Acting"
        )
      );

      const directorList = movie.credits.crew.filter(
        ({ job }) => job === "Director"
      );

      setDirectors(
        directorList.length === 1
          ? directorList[0].name
          : directorList.map(({ name }) => name).join(", ")
      );
    }
  }, [movie]);

  return (
    <Screen renderArrow>
      <section
        className="absolute top-0 left-0 w-screen h-auto md:h-full text-white bg-cover bg-full bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        {/* grid da página toda */}
        <div
          id="main-grid"
          className="w-full md:h-full grid grid-cols-4 md:grid-cols-5 grid-rows-6 md:grid-rows-4 bg-blend-multiply bg-gradient-to-r from-gray-900 to-transparent"
        >
          {/* informações do filme */}
          <div className="col-span-4 row-span-2 md:row-start-2 bg-opacity-80 flex justify-start items-center px-4 md:px-8">
            <div className="">
              <h1 className="font-title font-bold text-2xl md:text-5xl flex-grow mb-2 justify-self-end leading-normal">
                {movie?.title}
              </h1>
              {/* todo: flexbox do título e tagline */}
              <h2 className="font-body flex-grow-0 text-md md:text-lg text-gray-300">
                {movie?.tagline}
              </h2>
              {movie?.release_date && (
                <h4>{`${new Date(
                  movie.release_date
                ).getFullYear()} | ${directors}`}</h4>
              )}
            </div>
          </div>

          {/* sinopse e afins */}
          <Info movie={movie} cast={cast} />
          {movie && (
            <div className="col-span-4 md:col-span-2 row-span-2 md:col-start-4 row-start-5 py-2 px-4 flex flex-col justify-end ">
              <h3 className="font-title font-bold text-md md:text-xl mb-2">
                Vídeos Relacionados
              </h3>
              <div className="w-full h-auto grid gap-2 grid-cols-2 grid-rows-auto place-content-end">
                {movie?.videos?.results.map((video) => (
                  <VideoCard video={video} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Screen>
  );
};

export default MoviePage;
