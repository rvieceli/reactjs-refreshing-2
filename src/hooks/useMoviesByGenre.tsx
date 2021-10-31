import { useEffect, useState } from "react";
import { api } from "../services/api";

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function useMoviesByGenre(genreId: number) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${genreId}`).then((response) => {
      setMovies(response.data);
    });
  }, [genreId]);

  return movies;
}
