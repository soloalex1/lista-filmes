import Profile from '@/components/Profile';

import useStore from '@/store';

const Cast = () => {
  const { cast } = useStore((state) => state);

  return (
    <section aria-labelledby="cast-section">
      <h2
        id="cast-section"
        className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
      >
        Elenco
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cast.map((profile) => (
          <Profile profile={profile} key={profile.cast_id} />
        ))}
      </div>
    </section>
  );
};

export default Cast;
