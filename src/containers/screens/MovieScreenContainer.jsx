import Screen from "../../components/Screen";
import { useEffect, useState } from "react";
import client from "../../api";

import Chip from "../../components/Chip";
import VideoCard from "../../components/VideoCard/VideoCard";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  const [filme, setFilme] = useState({});

  const [credits, setCredits] = useState({});

  useEffect(() => {
    client(`/movie/${id}?append_to_response=videos,credits&`)
      .then((data) => {
        setFilme(data);
      })
      .catch((error) => {
        console.log(error);
      });

    //eslint-disable-next-line
  }, []);
  return (
    <Screen arrowBack>
      <section
        className="absolute top-0 left-0 w-screen h-full text-white bg-cover bg-full bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme?.backdrop_path})`,
        }}
      >
        <div className="w-full md:h-full grid grid-cols-3 md:grid-cols-5 grid-rows-4 bg-blend-multiply bg-gradient-to-r from-gray-900 to-transparent">
          <div className="col-span-3 row-span-2 bg-opacity-80 flex justify-start items-center">
            <div>
              <h1 className="font-title font-bold text-2xl md:text-5xl flex-grow px-8 justify-self-end leading-normal">
                {filme?.title}
              </h1>
              {/* todo: flexbox do título e tagline */}
              <h2 className="font-body flex-grow-0 text-md md:text-lg px-8">
                {filme?.tagline}
              </h2>
            </div>
            <h3>{new Date(filme?.release_date).toLocaleDateString()}</h3>
          </div>
          <div
            className="col-span-3 row-span-2 row-start-3 grid grid-cols-2 grid-rows-4 md:grid-rows-2
           gap-2 md:gap-6 rounded-tr-3xl bg-opacity-40 bg-white backdrop-filter backdrop-blur-xl
           text-gray-300 text-shadow shadow-md px-8 py-4"
          >
            <div
              id="sinopse"
              className="col-span-2 md:col-span-1 row-span-2 md:row-span-2"
            >
              <h3 className="font-title font-bold text-md md:text-xl mb-2 sticky">
                Sinopse
              </h3>
              <p className="font-body text-justify text-sm md:text-md line-clamp-4 lg:line-clamp-10">
                {filme?.overview}
              </p>
            </div>
            <div
              id="elenco"
              className="col-span-2 md:col-span-1 row-span-2 md:row-span-1  w-full"
            >
              <h3 className="font-title font-bold text-md md:text-xl mb-2">
                Elenco
              </h3>
              <div className="font-body flex w-full flex-row flex-wrap">
                {filme?.credits?.crew
                  ?.sort((a, b) => a.popularity < b.popularity)
                  .filter((i, index) => {
                    if (index <= 4) return i;
                  })
                  .map((i) => (
                    <Chip key={i.id} label={i.name} />
                  ))}
              </div>
            </div>
            <div id="categorias" className="col-span-2 md:col-span-1">
              <h3 className="font-title font-bold text-md md:text-xl mb-2">
                Gênero
              </h3>
              <div className="flex flex-row flex-wrap justify-start items-center w-full">
                {filme?.genres?.map((genre) => (
                  <Chip key={genre.id} label={genre.name} />
                ))}
              </div>
            </div>
          </div>
          {filme.videos &&
            filme.videos.results &&
            filme.videos.results.length > 0 && (
              <div className="col-span-2 row-span-2 col-start-4 row-start-3 py-2 px-4 flex flex-col justify-end ">
                <h3 className="font-title font-bold text-md md:text-xl mb-2">
                  Vídeos Relacionados
                </h3>
                <div className="w-full h-auto grid gap-2 grid-cols-2 grid-rows-auto place-content-end">
                  {filme?.videos?.results.map((video) => (
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

export default MovieScreenContainer;
