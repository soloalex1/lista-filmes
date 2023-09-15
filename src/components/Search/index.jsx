import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import client from "api";

import { ReactComponent as SearchIcon } from "assets/search.svg";

import useDebounce from "hooks/useDebounce";
import { setMoviesList } from "redux/actions";

const Search = ({ ...attr }) => {
  const [consulta, setConsulta] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const debounceConsulta = useDebounce(consulta);

  const movieSearch = (query) => {
    const currentPath = history.location.pathname;
    const previousPath = history.location?.state?.from;

    if (currentPath === "/") {
      // se estiver na página inicial e não tiver sido redirecionado
      if (query === "" && previousPath !== "/movie/:id") {
        // se a consulta estiver vazia, traz a pesquisa inicial
        client("trending/movie/day?sort_by=popularity.desc&page=1&")
          .then((data) => {
            dispatch(setMoviesList(data));
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // se a consulta não estiver vazia, traz a pesquisa baseada na consulta
        client(`search/movie?query=${query}&`)
          .then((data) => {
            dispatch(setMoviesList(data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      // se estiver na página de filme
      if (query.trim().length !== 0) {
        console.log("consulta não tá vazia");
        // se a consulta não estiver vazia, faz a consulta normal
        client(`search/movie?query=${query}&`)
          .then((data) => {
            dispatch(setMoviesList(data));
          })
          .then(() => {
            // redireciona para a página inicial
            history.push("/", { from: "/movie/:id" });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  useEffect(() => {
    movieSearch(debounceConsulta);
    // eslint-disable-next-line
  }, [debounceConsulta]);

  return (
    <div
      className="inline-flex flex-col justify-center text-black w-full"
      {...attr}
    >
      <div className="relative w-full ">
        <input
          type="text"
          className="w-full p-2 pl-10 rounded border border-gray-200 bg-opacity-40 bg-white backdrop-filter backdrop-blur-xl"
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
