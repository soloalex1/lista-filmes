import Chip from "@/components/Chip";
import { CastEntry, Movie } from "@/types";

type InfoProps = {
  movie: Movie | undefined;
  cast: CastEntry[];
};

const Info = ({ movie, cast }: InfoProps) => {
  return (
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
          {movie?.overview}
        </p>
      </div>
      <div
        id="elenco"
        className="col-span-2 md:col-span-1 row-span-2 md:row-span-1  w-full"
      >
        <h3 className="font-title font-bold text-md md:text-xl mb-2">Elenco</h3>
        <div className="font-body flex w-full flex-row flex-wrap">
          {cast?.map(({ id, name }) => (
            <Chip key={id} label={name} />
          ))}
        </div>
      </div>
      <div id="categorias" className="col-span-2 md:col-span-1">
        <h3 className="font-title font-bold text-md md:text-xl mb-2">Gênero</h3>
        <div className="flex flex-row flex-wrap justify-start items-center w-full">
          {movie?.genres?.map(({ id, name }) => (
            <Chip key={id} label={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
