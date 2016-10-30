const OMDB_ENDPOINT_START = 'http://www.omdbapi.com/?i=';
const OMDB_ENDPOINT_END = '&plot=full&r=json';

export const fetchPlots = (imdbID) => {
  return fetch(OMDB_ENDPOINT_START + imdbID + OMDB_ENDPOINT_END).then(function fetchJSON(response) {
    return response.json();
  });
};
