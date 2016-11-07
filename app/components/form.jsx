import ActivityIndicator from 'react-activity-indicator'

export default class Form extends React.Component {

  _processQuery(event) {
    event.preventDefault();
    this.props.queryMovies(this.state.queryString);
    this.setState({queryString: ""})
  }

  constructor(props) {
    super(props);
    this.state = {queryString: ""};
    this._handleChange = this._handleChange.bind(this);
    this._processQuery = this._processQuery.bind(this);
  }
  
  _handleChange(event) {
    this.setState({queryString: event.target.value});
  }

  _renderActivity() {
    if (this.props.isFetching) {
      return <ActivityIndicator number={5} duration={200} activeColor="#0099CC" borderColor="white"/>;
    } else {
      return <button className="btn btn-primary" onClick={this._processQuery}>Submit</button>;
    }
  }

  render() {
    return (
      <div className="center">
        { this.props.isError ? <div className="alert alert-danger" role="alert">{this.props.errorText}</div> : false }
        <div className="form">
          <h3>Search Titles:</h3>
          <input className="form-control" type="text"
            placeholder="Samurai"
            value={this.state.queryString}
            onChange={this._handleChange} /><br/><br/>
          { this._renderActivity() }
          <br/><br/>
        </div>
      </div>
    );
  }
}
