export default function movies(state = { movies: [], query: '', isFetching: false }, action) {
  switch (action.type) {
    case 'LOAD_MOVIES': {
      return { ...state, query: action.query, isFetching: true, movies: [] };
    }
    case 'MOVIES_RECEIVED': {
      return { ...state, movies: action.movies, isFetching: false };
    }
    case 'LOAD_MOVIES_FAILURE': {
      alert(action.error);
      return { ...state, isFetching: false };
    }
    default: {
      return state;
    }
  }
}
