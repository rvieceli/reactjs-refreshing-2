import { MovieCard } from "./MovieCard";

import { Header } from "./Header";
import { MovieProps } from "../hooks/useMoviesByGenre";
import { GenreResponseProps } from "../hooks/useGenres";
interface ContentProps {
  movies: MovieProps[];
  genre: GenreResponseProps;
}

export function Content({ movies, genre: selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <Header genre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
