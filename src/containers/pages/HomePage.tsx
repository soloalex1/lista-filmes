import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import List from '@/components/List';
import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';

import useStore from '@/store';

import { fetchMovieList } from '@/api';

import { ROOT_SEARCH } from '../../constants';

const HomePage = () => {
  const { currentPage, setPage, movieList, setMovieList } = useStore(
    (state) => state
  );

  const history = useHistory<{ from?: string }>();

  const getResultsPerPage = useCallback(
    (page = 1) => {
      // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
      if (history.location?.state?.from !== '/movie/:id') {
        fetchMovieList(`${ROOT_SEARCH}&page=${page}&`).then((data) => {
          setMovieList(data);
        });
      } else {
        // senão, apaga o from
        const state = { ...history.location.state };
        delete state.from;
        history.replace({ ...history.location, state });
      }
    },
    [history, setMovieList]
  );

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

export default HomePage;
