import './style.css';
import Form from './form'
import MovieGallery from './movieGallery'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from "../actions"



export class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      query: ""
    }
  }
  _queryMovies(query) {
    if (query.length < 2) {
      alert('String must be of at least length two!');
    } else {
      this.props.loadMovies(query);
    }
    this.setState({query: query});
  }

  render() {
    const { movies } = this.props;
    return( 
      <div>
        <Form queryMovies={this._queryMovies.bind(this)}/>
        <MovieGallery movies={movies}/>
      </div>
    )
  }
}

export default connect(
  state => ({movies: state.movies, query: state.query}),
  dispatch => bindActionCreators(MovieActions, dispatch)
)(HomePage)
