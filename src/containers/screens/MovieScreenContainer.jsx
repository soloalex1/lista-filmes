import Screen from "../../components/Screen";
import { useEffect, useState } from "react";
import client from "../../api";

const MovieScreenContainer = ({ match }) => {
  const { id } = match.params;

  const [filme, setFilme] = useState({});

  useEffect(() => {
    client(`/movie/${id}?`)
      .then((data) => {
        setFilme(data);
      })
      .catch((error) => {
        console.log(error);
      });

    client(`movie/${id}/credits?`)
      .then((data) => {
        setFilme({
          ...filme,
          credits: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <Screen title={filme?.title} arrowBack>
      <section
        className="relative top-0 left-0 w-screen h-full text-white bg-gray-300 bg-cover bg-full bg-center grid grid-cols-5 grid-rows-4"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme?.backdrop_path})`,
        }}
      >
        <div className="col-span-2 row-span-2 bg-opacity-80 flex justify-start items-center">
          <h1 className="font-title font-bold text-6xl flex-grow px-8 justify-self-end">
            {filme?.title}
          </h1>
          <h2>{filme?.release_date}</h2>
        </div>
        <div
          className="col-span-3 row-span-2 row-start-3 grid grid-cols-2 grid-rows-2
          gap-2 rounded-tr-3xl bg-opacity-30 bg-white backdrop-filter backdrop-blur-xl
           text-gray-500 shadow-md"
        >
          <div id="sinopse" className="row-span-2 p-4">
            <h3 className="font-title font-bold text-xl">Sinopse</h3>
            <p className="font-body">{filme?.overview}</p>
          </div>
          <div id="categoria" className=" p-4">
            <h3 className="font-title font-bold text-xl">Categoria</h3>
            <p className="font-body">{filme?.genres[0].name}</p>
          </div>
          <div id="categoria" className="p-4">
            <h3 className="font-title font-bold text-xl">Estrelando</h3>
            <p className="font-body">
              {filme?.credits?.crew
                .sort((a, b) => a.popularity < b.popularity)
                .filter((i, index) => {
                  if (index <= 5) return i;
                })
                .map((i) => {
                  return `${i.name}, `;
                })}
            </p>
          </div>
        </div>
      </section>
    </Screen>
  );
};

export default MovieScreenContainer;
