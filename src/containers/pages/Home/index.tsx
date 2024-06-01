import { Suspense, lazy } from 'react';

import Screen from '@/components/Screen';
import Pagination from '@/components/Pagination';
import Filters from '@/components/Filters';
import ListSkeleton from '@/components/List/skeleton';

import useStore from '@/store';

const HomePage = () => {
  const List = lazy(() => import('@/components/List'));

  const {
    movieList: { results },
  } = useStore((state) => state);

  return (
    <Screen>
      <Filters />
      <Pagination />
      <Suspense fallback={<ListSkeleton />}>
        <List movies={results!} />
      </Suspense>
      <Pagination />
    </Screen>
  );
};

export default HomePage;
