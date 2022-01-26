import { memo } from "react";
import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    poster: string;
    rating: string;
    runtime: string;
  };
}

function MovieCardComponent({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />

      <div>
        <div className="movie-info">
          <span>{movie.title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.rating}
            </div>

            <div>
              <Clock /> {movie.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MovieCardComponent, (prev, next) => {
  return prev.movie.id === next.movie.id;
});
