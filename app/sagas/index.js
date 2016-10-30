import { call, put, take, select } from 'redux-saga/effects';
import { fetchMovies } from '../api/fetchMovies';
import { fetchPlots } from '../api/fetchPlots';

export const getQuery = state => state.query;

export function* loadMovies() {
  try {
    const moviePlots = [];
    let movieData = {};
    const query = yield select(getQuery);
    let movies = yield call(fetchMovies, query);
    if (movies.Response === 'False') {
      throw movies.Error;
    }
    movies = movies.Search;
    for (let i = 0; i < movies.length; i += 1) {
      movieData = yield call(fetchPlots, movies[i].imdbID);
      moviePlots.push(movieData);
    }
    movies = moviePlots;
    yield put({ type: 'MOVIES_RECEIVED', movies });
  } catch (error) {
    yield put({ type: 'LOAD_MOVIES_FAILURE', error });
  }
}

export function* watchForLoadMovies() {
  while (true) {
    yield take('LOAD_MOVIES');
    yield call(loadMovies);
  }
}
