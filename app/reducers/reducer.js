export default function movies(state = { movies: [], query: '' }, action) {
  switch (action.type) {
    case 'LOAD_MOVIES': {
      return { ...state, query: action.query };
    }
    case 'MOVIES_RECEIVED': {
      return { ...state, movies: action.movies };
    }
    case 'LOAD_MOVIES_FAILURE': {
      alert(action.error);
      return state;
    }
    default: {
      return state;
    }
  }
}
