import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

import "../css/Favorites.css";
import type { Movie } from "../custom types/MovieTypes";

function Favorites() {
  //   const { favorites } = useContext(MovieContext);
  const { favorites } = useMovieContext();

  if (favorites.length !== 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movie-grid">
          {favorites.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p> Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
