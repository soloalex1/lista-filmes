import CardSkeleton from '../Card/skeleton';

const ListSkeleton = () => {
  return (
    <section className="px-2 sm:px-0 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </section>
  );
};

export default ListSkeleton;
