import { GenreResponseProps } from "../hooks/useGenres";
import { Button } from "./Button";

import { Logo } from "./Logo";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId?: number;
  onSelectGenre: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  onSelectGenre,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <Logo />

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
