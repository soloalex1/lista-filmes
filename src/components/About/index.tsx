import { Movie } from '@/types';

type AboutProps = {
  movie: Partial<Movie>;
};

const About = ({ movie }: AboutProps) => {
  return (
    <section aria-labelledby="section-about">
      <h2
        id="section-about"
        className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
      >
        Sobre
      </h2>
      <div className="mt-6 space-y-4 text-lg text-gray-500 dark:text-gray-400">
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};

export default About;
