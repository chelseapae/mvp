import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excuse: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      excuse: e.target.value
    });
  }

  search() {
    console.log('this.state.excuse', this.state.excuse)
    this.props.onSearch(this.state.excuse);
  }

  render() {
    return (<div>
      Enter your personal situation, and use the generated excuse:<br/>
      <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Give me an excuse </button>
    </div>)
  }
}

export default Search;