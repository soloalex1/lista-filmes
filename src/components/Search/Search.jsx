import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { setMoviesList } from "../../redux/actions";

const Search = ({ ...attr }) => {
  const [consulta, setConsulta] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const debounceConsulta = useDebounce(consulta);

  useEffect(() => {
    const movieSearch = async (query) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c391f33dc3ceb9d568d495ecc681876d&language=pt-BR`
        );
        const json = await res.json();

        dispatch(setMoviesList(json));
      } catch (error) {
        console.log(error);
      }
    };

    movieSearch(debounceConsulta);

    // eslint-disable-next-line
  }, [debounceConsulta]);

  return (
    <div class=" inline-flex flex-col justify-center text-gray-500">
      <div class="relative w-full">
        <input
          type="text"
          class="p-2 pl-10 rounded border border-gray-200 bg-gray-200"
          placeholder="Procure um filme..."
          value={consulta}
          onChange={handleChange}
        />
        <SearchIcon className="w-4 h-4 absolute left-2.5 top-3.5 fill-current" />
      </div>
    </div>
  );
};

export default Search;
