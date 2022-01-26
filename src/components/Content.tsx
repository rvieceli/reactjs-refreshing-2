import { useMemo, lazy, Suspense } from "react";
// import { MovieCard } from "./MovieCard";

import { Header } from "./Header";
import { MovieProps } from "../hooks/useMoviesByGenre";
import { GenreResponseProps } from "../hooks/useGenres";

interface ContentProps {
  movies: MovieProps[];
  genre: GenreResponseProps;
}

const MovieCard = lazy(() => import("./MovieCard"));

export function Content({ movies, genre: selectedGenre }: ContentProps) {
  const formattedMovies = useMemo(() => {
    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      runtime: movie.Runtime,
      rating: movie.Ratings[0].Value,
    }));
  }, [selectedGenre]);

  return (
    <div className="container">
      <Header genre={selectedGenre} />

      <main>
        <div className="movies-list">
          <Suspense fallback={<div>Loading...</div>}>
            {formattedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
