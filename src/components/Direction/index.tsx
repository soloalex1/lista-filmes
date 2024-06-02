import DirectorProfile from '@/components/Profiles/Director';

import useStore from '@/store';

const Direction = () => {
  const { directors } = useStore((state) => state);

  return (
    <section aria-labelledby="direction-section">
      <h2
        id="direction-section"
        className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
      >
        Direção
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {directors.map((director) => (
          <DirectorProfile director={director} key={director.id} />
        ))}
      </div>
    </section>
  );
};

export default Direction;
