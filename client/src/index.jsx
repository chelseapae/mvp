import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import exampleData from '../../excuseData.js';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excuses: []
    }
  }

  render () {
    return (
    <div>
      <h2>Excuse Generator</h2>
      <p>Need a good excuse? Use our random excuse generator to keep your excuses fresh</p>
      <Search onSearch={this.search.bind(this)}/>
      {/* {exampleData.map((example) => {
        return example.excuse
        })}
      {console.log(exampleData[0].excuse)} */}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));



