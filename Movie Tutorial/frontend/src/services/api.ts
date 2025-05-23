import { API_KEY, BASE_URL } from "./keys";

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

export async function searcMovies(query: string | number) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}
