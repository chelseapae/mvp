import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import Search from './components/Search.jsx';
import SearchHistory from './components/SearchHistory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    this.getDef();
  }

  getDef() {
    $.ajax({
      type: 'GET',
      url: '/'
    })
    .then(data => {
      // console.log('DATA from client index.jsx', data);
      this.setState({definition: data})
    })
  }

  search (word) {
    console.log(`${word} was searched`);
    $.ajax({
      type: "POST",
      url: '/',
      data: {word: word},
      success: (response)=>{console.log('ajax success', response)},
      error: (err)=>{console.log('ajax error', err)},
    })
      .then(data => {
        return this.getDef()
      })
  }

  render () {
    return (
    <div>
      <h2>Dictionary</h2>
      <p>Enter in a word and get the definiton</p>
      <Search onSearch={this.search.bind(this)}/>
      <SearchHistory words={this.state.words}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



