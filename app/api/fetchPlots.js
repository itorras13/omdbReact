import qs from 'qs';

const OMDB_ENDPOINT_BASE = 'http://www.omdbapi.com/?';

export const fetchPlots = (imdbID) => {
  const OMDB_ENDPOINT = OMDB_ENDPOINT_BASE + qs.stringify({ i: imdbID, plot: 'full', r: 'json' });
  return fetch(OMDB_ENDPOINT).then(function fetchJSON(response) {
    return response.json();
  });
};
