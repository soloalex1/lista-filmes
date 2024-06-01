import List from '@/components/List';
import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';

import useStore from '@/store';

const HomePage = () => {
  const {
    movieList: { results },
  } = useStore((state) => state);

  return (
    <Screen>
      <Filters />
      <Pagination />
      <List movies={results!} />
      <Pagination />
    </Screen>
  );
};

export default HomePage;
