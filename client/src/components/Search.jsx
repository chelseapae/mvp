import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      word: e.target.value
    });
  }

  search() {
    console.log('this.state.word', this.state.word)
    this.props.onSearch(this.state.word);
  }

  render() {
    return (<div>
      Enter in a word: <input value={this.state.word} onChange={this.onChange}/>
      <button onClick={this.search}> Search </button>
    </div>)
  }
}

export default Search;