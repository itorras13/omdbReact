import ActivityIndicator from 'react-activity-indicator'

export default class Form extends React.Component {

  _processQuery(event) {
    event.preventDefault();
    if (this.state.queryString.length > 1) {
      this.setState({isError: false});
      this.props.queryMovies(this.state.queryString);
    } else {
      this.setState({isError: true, errorText: "String must be of at least length two!"})
    }
    this.setState({queryString: ""})
  }

  constructor(props) {
    super(props);
    this.state = {queryString: "", isError: false, errorText: ""};
    this._handleChange = this._handleChange.bind(this);
    this._processQuery = this._processQuery.bind(this);
  }
  
  _handleChange(event) {
    this.setState({queryString: event.target.value});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isError: nextProps.isError, errorText: nextProps.errorText})
  }

  render() {
    return (
      <div className="center">
        { this.state.isError ? <div className="alert alert-danger" role="alert">{this.state.errorText}</div> : false }
        <div className="form">
          <h3>Search Titles:</h3>
          <input className="form-control" type="text"
            placeholder="Samurai"
            value={this.state.queryString}
            onChange={this._handleChange} /><br/><br/>
          { this.props.isFetching ? <ActivityIndicator number={5} duration={200} activeColor="#0099CC" borderColor="white"/>
                                  : <button className="btn btn-primary" onClick={this._processQuery}>Submit</button>
          }
          <br/><br/>
        </div>
      </div>
    );
  }
}
