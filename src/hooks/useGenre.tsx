import { useEffect, useState } from "react";
import { api } from "../services/api";
import { GenreResponseProps } from "./useGenres";

export function useGenre(genreId: number) {
  const [genre, setGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${genreId}`).then((response) => {
      setGenre(response.data);
    });
  }, [genreId]);

  return genre;
}
