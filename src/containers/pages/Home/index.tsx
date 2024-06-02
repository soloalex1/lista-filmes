import { Suspense, lazy } from 'react';

import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';
import ListSkeleton from '@/components/List/skeleton';
import Header from '@/components/Header';

import useStore from '@/store';

const HomePage = () => {
  const List = lazy(() => import('@/components/List'));

  const {
    movieList: { results },
  } = useStore((state) => state);

  return (
    <Screen>
      <div className="col-start-2">
        <Header />
        <Filters />
        <Pagination />
        <Suspense fallback={<ListSkeleton />}>
          <List movies={results!} />
        </Suspense>
        <Pagination />
      </div>
    </Screen>
  );
};

export default HomePage;
