import Screen from "../../components/Screen";
import { useEffect, useState } from "react";
import client from "../../api";

import Chip from "../../components/Chip";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  const [filme, setFilme] = useState({});

  const [credits, setCredits] = useState({});

  useEffect(() => {
    client(`/movie/${id}?`)
      .then((data) => {
        setFilme(data);
      })
      .catch((error) => {
        console.log(error);
      });

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    client(`movie/${id}/credits?`)
      .then((data) => {
        setCredits(data);
        console.log(credits);
      })
      .catch((error) => {
        console.log(error);
      });
    //eslint-disable-next-line
  }, [id]);

  return (
    <Screen arrowBack>
      <section
        className="absolute top-0 left-0 w-screen h-full text-white bg-cover bg-full bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme?.backdrop_path})`,
        }}
      >
        <div className="w-full h-full grid grid-cols-5 grid-rows-4 bg-blend-multiply bg-gradient-to-r from-gray-900 to-transparent">
          <div className="col-span-3 row-span-2 bg-opacity-80 flex justify-start items-center">
            <h1 className="font-title font-bold text-6xl flex-grow px-8 justify-self-end leading-normal">
              {filme?.title}
            </h1>
            <h2 className="font-body flex-grow-0 text-2xl">{filme?.tagline}</h2>
            <h3>{new Date(filme?.release_date).toLocaleDateString()}</h3>
          </div>
          <div
            className="col-span-3 row-span-2 row-start-3 grid grid-cols-2 grid-rows-2
          gap-6 rounded-tr-3xl bg-opacity-40 bg-white backdrop-filter backdrop-blur-xl
           text-gray-300 text-shadow shadow-md px-8 py-4"
          >
            <div id="sinopse" className="row-span-2">
              <h3 className="font-title font-bold text-xl mb-2">Sinopse</h3>
              <p className="font-body text-justify line-clamp-10">
                {filme?.overview}
              </p>
            </div>

            <div id="elenco" className="">
              <h3 className="font-title font-bold text-xl mb-2">Elenco</h3>
              <p className="font-body">
                {credits?.crew
                  ?.sort((a, b) => a.popularity < b.popularity)
                  .filter((i, index) => {
                    if (index <= 5) return i;
                  })
                  .map((i) => (
                    <Chip key={i.id} label={i.name} />
                  ))}
              </p>
            </div>
            <div id="categorias" className="">
              <h3 className="font-title font-bold text-xl mb-2">Gênero</h3>
              <div className="">
                {filme?.genres?.map((genre) => (
                  <Chip key={genre.id} label={genre.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Screen>
  );
};

export default MovieScreenContainer;
