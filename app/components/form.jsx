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

  render() {
    return (
      <div className="center">
        <div className="form">
          <h3>Search Titles:</h3>
          <input className="form-control" type="text"
            placeholder="Samurai"
            value={this.state.queryString}
            onChange={this._handleChange} /><br/><br/>
          <button className="btn btn-primary" onClick={this._processQuery}>Submit</button><br/><br/>
        </div>
      </div>
    );
  }
}
