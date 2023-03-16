import React, { useEffect, useState } from "react";

import Screen from "../../components/Screen";
import client from "../../api";

import Chip from "../../components/Chip";
import VideoCard from "../../components/VideoCard";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  const [filme, setFilme] = useState({});

  const [elenco, setElenco] = useState([]);

  const [diretores, setDiretores] = useState("");

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

  useEffect(() => {
    setElenco(
      filme?.credits?.cast.filter((member) => {
        return member.order < 5 && member.known_for_department === "Acting";
      })
    );

    const directorList = filme?.credits?.crew.filter((member) => {
      return member.job === "Director";
    });

    if (directorList?.length === 1) {
      setDiretores(directorList[0].name);
    } else {
      setDiretores(directorList?.map((i) => i.name)?.join(", "));
    }
  }, [filme]);

  return (
    <Screen arrowBack>
      <section
        className="absolute top-0 left-0 w-screen h-auto md:h-full text-white bg-cover bg-full bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme?.backdrop_path})`,
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
              <h1 className="font-title font-bold text-2xl md:text-5xl flex-grow  justify-self-end leading-normal">
                {filme?.title}
              </h1>
              {/* todo: flexbox do título e tagline */}
              <h2 className="font-body flex-grow-0 text-md md:text-lg text-gray-300">
                {filme?.tagline}
              </h2>
              <h4>{`${new Date(
                filme?.release_date
              ).getFullYear()} | ${diretores}`}</h4>
            </div>
          </div>

          {/* sinopse e afins */}
          <div
            className="col-span-4 md:col-span-3 row-span-2 md:row-span-3 row-start-3 md:row-start-5 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2
           gap-2 md:gap-6 rounded-br-3xl rounded-tr-3xl md:rounded-br-none md:rounded-tr-3xl bg-opacity-40 bg-black backdrop-filter backdrop-blur-xl
           text-gray-300 text-shadow shadow-md px-4 md:px-8 py-4"
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
                {elenco?.map((i) => (
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
              <div className="col-span-4 md:col-span-2 row-span-2 md:col-start-4 row-start-5 py-2 px-4 flex flex-col justify-end ">
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
