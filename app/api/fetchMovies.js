const OMDB_ENDPOINT = 'http://www.omdbapi.com/?s=';


export const fetchMovies = (query) => {
  return fetch(OMDB_ENDPOINT + query).then(function fetchJSON(response) {
    return response.json();
  });
};
