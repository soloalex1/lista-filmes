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
      // se a consulta for zerada, reseta a lista de filmes
      if (query === "") {
        client(`trending/movie/day?`)
          .then((data) => {
            dispatch(setMoviesList(data));
          })
          .then(() => {
            if (history.location?.pathname.includes("/movie")) {
              // se tiver na página de filme, joga pra página inicial
              history.push("/", { from: "/movie/:id" });
            } else {
              // senão, apaga o from
              const state = { ...history.location.state };
              delete state.from;
              history.replace({ ...history.location, state });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      // depois de resetar, sai da função pra não sobrescrever
      if (query?.trim().length === 0) return;

      // se a consulta não estiver vazia, faz a requisição normal
      client(`search/movie?query=${query}&`)
        .then((data) => {
          dispatch(setMoviesList(data));
        })
        .then(() => {
          if (history.location?.pathname.includes("/movie")) {
            // se tiver na página de filme, joga pra página inicial
            history.push("/", { from: "/movie/:id" });
          } else {
            // senão, apaga o from
            const state = { ...history.location.state };
            delete state.from;
            history.replace({ ...history.location, state });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    movieSearch(debounceConsulta);

    // eslint-disable-next-line
  }, [debounceConsulta]);

  return (
    <div class=" inline-flex flex-col justify-center text-gray-500" {...attr}>
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
