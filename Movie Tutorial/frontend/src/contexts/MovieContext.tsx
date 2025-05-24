import { createContext, useState, useContext, useEffect } from "react";
import type { Movie } from "../custom types/MovieTypes";

// This interface is needed to prevent errors on the value in MovieContex.Provider value.
interface IMovieContext {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieID: number) => void;
  isFavorite: (movieID: number) => boolean;
}

const defaultContext = {
  favorites: [],
  addToFavorites: (_movie: Movie) => {},
  removeFromFavorites: (_movieID: number) => {},
  isFavorite: (_movieID: number) => false,
} as IMovieContext;

const MovieContext = createContext<IMovieContext>(defaultContext);

export function useMovieContext() {
  const customMovieContext = useContext(MovieContext);

  if (!customMovieContext) {
    throw new Error("You need to use this hook inside a context provide!");
  }

  return customMovieContext;
}

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie: Movie) {
    setFavorites((prev) => [...prev, movie]);
  }

  function removeFromFavorites(movieID: number) {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  }

  function isFavorite(movieID: number) {
    return favorites.some((movie) => movie.id === movieID);
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
