export type MovieResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: VideoEntry[];
  };
  credits: {
    cast: CastEntry[];
    crew: CrewEntry[];
  };
};

export type Genre = {
  id: number;
  name: string;
};

export type GenreQuery = {
  genres: Genre[];
};

export type VideoEntry = {
  id: string;
  name: string;
  key: string;
  site: 'YouTube' | 'Vimeo';
};

export type Credit = {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
};

export type CastEntry = {
  order: number;
  cast_id: string;
  character: string;
  credit_id: string;
} & Credit;

export type CrewEntry = {
  credit_id: string;
  department: string;
  job: string;
} & Credit;

export type FilterType = {
  query?: string;
  year?: number;
};
