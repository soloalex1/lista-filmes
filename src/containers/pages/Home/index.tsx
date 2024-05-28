import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import List from '@/components/List';
import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';

import useStore from '@/store';

const HomePage = () => {
  const { currentPage, setPage, movieList, fetchMovieList } = useStore(
    (state) => state
  );

  const history = useHistory<{ from?: string }>();

  const getResultsPerPage = useCallback(
    (page = 1) => {
      // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
      if (history.location?.state?.from !== '/movie/:id') {
        setPage(page);
        fetchMovieList();
      } else {
        // senão, apaga o from
        const state = { ...history.location.state };
        delete state.from;
        history.replace({ ...history.location, state });
      }
    },
    [history, setPage, fetchMovieList]
  );

  useEffect(() => {
    getResultsPerPage(currentPage);
  }, [getResultsPerPage, currentPage]);

  return (
    <Screen>
      <>
        {movieList.results && <List movies={movieList.results} />}
        <Pagination page={currentPage} onChangePage={setPage} />
      </>
    </Screen>
  );
};

export default HomePage;
