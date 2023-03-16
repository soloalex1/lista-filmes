import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import List from "../../components/List";
import Loading from "../../components/Loading";
import Screen from "../../components/Screen";
import Pagination from "../../components/Pagination";

import client from "../../api";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const history = useHistory();

  const getResultsPerPage = (page = 1) => {
    setLoading(true);

    // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
    if (history.location?.state?.from !== "/movie/:id") {
      // console.log("from", history.location?.state?.from);
      client(`trending/movie/day?sort_by=popularity.desc&page=${page}&`)
        .then((data) => {
          dispatch(setMoviesList(data));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      // senão, apaga o from
      const state = { ...history.location.state };
      delete state.from;
      history.replace({ ...history.location, state });
    }
    setLoading(false);
  };

  useEffect(() => {
    getResultsPerPage(page);
    // eslint-disable-next-line
  }, [page]);

  return (
    <Screen title="Página Inicial" loading={loading}>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {loading && <Loading />}
        <Pagination page={page} onChangePage={handlePageChange} />
        <List />
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
