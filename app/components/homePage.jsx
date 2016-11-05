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
      query: "",
      isFetching: false
    }
  }
  _queryMovies(query) {
    this.props.loadMovies(query);
    this.setState({query: query});
  }

  render() {
    const { movies, isFetching } = this.props;
    return( 

      <div>
        <Form queryMovies={this._queryMovies.bind(this)} isFetching={isFetching}/>
        <MovieGallery movies={movies}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    query: state.query,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(MovieActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
