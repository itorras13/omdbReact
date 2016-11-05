const initialState = { movies: [], query: '', isFetching: false, isError: false, errorText: '' };

export default function movies(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES': {
      return { ...state, query: action.query, isFetching: true, movies: [] };
    }
    case 'MOVIES_RECEIVED': {
      return { ...state, movies: action.movies, isFetching: false, isError: false };
    }
    case 'LOAD_MOVIES_FAILURE': {
      return { ...state, isFetching: false, isError: true, errorText: action.error };
    }
    default: {
      return state;
    }
  }
}
