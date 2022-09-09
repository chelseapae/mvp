import React from 'react';

export default function Form() {
  return(
    <div className="form">
      <h1>Transaction</h1>
      <form id="form">
          <div>
            <input type="text" placeholder="Fight, Hotel, Transportation, Food, Activities, Misc." className="forminput"/>

          </div>
      </form>
    </div>
  )
}