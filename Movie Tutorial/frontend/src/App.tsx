import MovieCard from "./components/MovieCard";
import type { Movie } from "./custom types/MovieTypes";
// Styling.
import "./App.css";

//TODO: Create a Movie typescript object.
const test: Movie = {
  title: "Test film",
  release_date: "2025",
};
function App() {
  return (
    <>
      <MovieCard movie={test} />
    </>
  );
}

export default App;
