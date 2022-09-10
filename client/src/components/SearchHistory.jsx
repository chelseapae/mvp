import React from 'react';

const SearchList = (props) => (
  <div>
    <h4> Word Search History </h4>
    <div>
    <ul>
      {props.words.map((word) =>
      <li key={word.id}>
      <b>Word</b>
        <a href={word.html_url} target="_blank">
           {word.definition} <br/>
        </a>
          <b>Word</b> &nbsp;
          {word.word}
      </li>)}
    </ul>
    </div>
  </div>
)

export default SearchList;
