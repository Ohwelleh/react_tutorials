export type Movie = {
  /**
   * OPTIONAL: Unique Identifing number.
   */
  id?: number;
  /**
   * The full name of the movie.
   */
  title: string;
  /**
   * OPTIONAL: Path to an image of the movie.
   */
  url?: string;
  /**
   * The release date of the movie.
   */
  release_date: string;
  /**
   * Path for movie poster
   */
  poster_path: string;
};
