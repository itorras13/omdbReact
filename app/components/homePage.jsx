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
      isFetching: false,
      isError: false,
      errorText: ""
    }
  }

  _queryMovies(query) {
    this.props.loadMovies(query);
    this.setState({query: query});
  }

  render() {
    const { movies, isFetching, isError, errorText } = this.props;
    return( 

      <div>
        <Form queryMovies={this._queryMovies.bind(this)} isFetching={isFetching} isError={isError} errorText={errorText}/>
        <MovieGallery movies={movies}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    query: state.query,
    isFetching: state.isFetching,
    isError: state.isError,
    errorText: state.errorText
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(MovieActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
