import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useDebounce from "../../hooks/useDebounce";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { setMoviesList } from "../../redux/actions";
import client from "../../api";
import { useHistory } from "react-router";

const Search = ({ ...attr }) => {
  const [consulta, setConsulta] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const debounceConsulta = useDebounce(consulta);

  useEffect(() => {
    const movieSearch = async (query) => {
      if (query.trim().length === 0) return;

      client(`search/movie?query=${query}&`)
        .then((data) => {
          dispatch(setMoviesList(data));
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    movieSearch(debounceConsulta);

    // eslint-disable-next-line
  }, [debounceConsulta]);

  return (
    <div class=" inline-flex flex-col justify-center text-gray-500">
      <div class="relative w-full ">
        <input
          type="text"
          class="p-2 pl-10 rounded border border-gray-200 bg-opacity-40 bg-white backdrop-filter backdrop-blur-xl"
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
