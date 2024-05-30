import List from '@/components/List';
import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';

import useStore from '@/store';

const HomePage = () => {
  const { currentPage, setPage, movieList } = useStore((state) => state);

  return (
    <Screen>
      <Filters />
      <Pagination page={currentPage} onChangePage={setPage} />
      <List movies={movieList.results!} />
      <Pagination page={currentPage} onChangePage={setPage} />
    </Screen>
  );
};

export default HomePage;
