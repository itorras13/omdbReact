const LOAD_MOVIES = 'LOAD_MOVIES';

export function loadMovies(string) {
  return {
    type: LOAD_MOVIES,
    query: string,
  };
}
