import { useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { useGenres } from "./hooks/useGenres";
import { useMoviesByGenre } from "./hooks/useMoviesByGenre";
import { useGenre } from "./hooks/useGenre";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const genres = useGenres();
  const movies = useMoviesByGenre(selectedGenreId);
  const selectedGenre = useGenre(selectedGenreId);

  function handleSelectGenre(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        onSelectGenre={handleSelectGenre}
      />

      <Content movies={movies} genre={selectedGenre} />
    </div>
  );
}
