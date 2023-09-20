import React, { useEffect, useState, ChangeEvent } from "react";
import { useHistory } from "react-router";

import useStore from "store";
import client from "api";

import useDebounce from "hooks/useDebounce";

import { ReactComponent as SearchIcon } from "assets/search.svg";

interface PathnameState {
  from: string;
}

const Search = () => {
  const history = useHistory<PathnameState>();

  const [queryString, setQueryString] = useState("");

  const { setMovieList } = useStore((state) => state);

  const debounceQuery = useDebounce(queryString);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.target.value);
  };

  const movieSearch = async (query: string) => {
    const currentPath = history.location.pathname;
    const previousPath = history.location?.state?.from;

    if (currentPath === "/") {
      const mountedURL =
        query === "" && previousPath !== "/movie/:id"
          ? "trending/movie/day?sort_by=popularity.desc&page=1&"
          : `search/movie?query=${query}&`;

      await client(mountedURL)
        .then((data) => {
          setMovieList(data);
        })
        .catch((error) => {
          throw new Error(error);
        });

      return;
    }

    if (query.trim().length !== 0) {
      client(`search/movie?query=${query}&`)
        .then((data) => {
          setMovieList(data);
        })
        .then(() => {
          history.push("/", { from: "/movie/:id" });
        })
        .catch((error) => {
          console.log(error);
        });

      return;
    }
  };

  useEffect(() => {
    movieSearch(debounceQuery);
  }, [movieSearch, debounceQuery]);

  return (
    <div className="inline-flex flex-col justify-center text-black w-full">
      <div className="relative w-full ">
        <input
          type="text"
          className="w-full p-2 pl-10 rounded border border-gray-200 bg-opacity-40 bg-white backdrop-filter backdrop-blur-xl"
          placeholder="Procure um filme..."
          value={queryString}
          onChange={handleChange}
        />
        <SearchIcon className="w-4 h-4 absolute left-2.5 top-3.5 fill-current" />
      </div>
    </div>
  );
};

export default Search;