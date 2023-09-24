import React, { useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// import List from "components/List";
// import Screen from "components/Screen";
// import Pagination from "components/Pagination";

// import useStore from "@/store";

// import { fetchMovieList } from "@/api";

// const ROOT_URL = "trending/movie/day?sort_by=popularity.desc";

const HomeScreenContainer = () => {
  // const { currentPage, setPage, movieList, setMovieList } = useStore(
  //   (state) => state
  // );

  // const history = useLocation();

  // const getResultsPerPage = useCallback(
  //   (page = 1) => {
  //     // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
  //     if (history.location?.state?.from !== "/movie/:id") {
  //       fetchMovieList(`${ROOT_URL}&page=${page}&`).then((data) => {
  //         setMovieList(data);
  //       });
  //     } else {
  //       // senão, apaga o from
  //       const state = { ...history.location.state };
  //       delete state.from;
  //       history.replace({ ...history.location, state });
  //     }
  //   },
  //   [history, setMovieList]
  // );

  return <h1>teste</h1>;

  // useEffect(() => {
  //   getResultsPerPage(currentPage);
  // }, [getResultsPerPage, currentPage]);
  // return (
  //   <Screen title="Página Inicial">
  //     <div className="container my-12 mx-auto px-4 md:px-12">
  //       <Pagination page={currentPage} onChangePage={setPage} />
  //       {movieList.results && <List movies={movieList.results} />}
  //     </div>
  //   </Screen>
  // );
};

export default HomeScreenContainer;
