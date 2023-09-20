import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useStore from "store";

import List from "components/List";
import Screen from "components/Screen";
import Pagination from "components/Pagination";

import client from "api";

const ROOT_URL = "trending/movie/day?sort_by=popularity.desc";

const HomeScreenContainer = () => {
  const { currentPage, setPage, movieList, setMovieList } = useStore(
    (state) => state
  );

  const history = useHistory();

  const getResultsPerPage = (page = 1) => {
    // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
    if (history.location?.state?.from !== "/movie/:id") {
      client(`${ROOT_URL}&page=${page}&`).then((data) => {
        setMovieList(data);
      });
    } else {
      // senão, apaga o from
      const state = { ...history.location.state };
      delete state.from;
      history.replace({ ...history.location, state });
    }
  };

  useEffect(() => {
    getResultsPerPage(currentPage);
  }, [getResultsPerPage, currentPage]);

  return (
    <Screen title="Página Inicial">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <Pagination page={currentPage} onChangePage={setPage} />
        {movieList.results && <List movies={movieList.results} />}
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
