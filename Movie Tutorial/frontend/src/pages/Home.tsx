import { useState, type ChangeEvent, type FormEvent } from "react";
import MovieCard from "../components/MovieCard";

// Import types
import type { Movie } from "../custom types/MovieTypes";

import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const movies: Movie[] = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(searchQuery);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
