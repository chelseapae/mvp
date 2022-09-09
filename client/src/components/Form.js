import React from 'react';

const onSubmit = (e) => {
  console.log(e)
}

export default function Form() {
  return(
    <div className="form">
      <h1>Enter information and hit 'Submit' </h1>
      <br/>

      <h1>Expense Type</h1>
      <form id="form">
          <select className='input'>
            <option value="Flight">Flight</option>
            <option value="Hotel">Hotel</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Activities">Activities</option>
            <option value="Misc.">Misc.</option>
          </select>

          <div>
          <br/>
            <h1>Details</h1>
            <input type="text" placeholder="Flight, Hotel, Transportation, Food, Activities, Misc." className="input"/>
          </div>

          <div>
          <br/>
            <h1>Amount</h1>
            <input type="text" className="input"/>
          </div>
          <div className="submit-btn">
            <br/>
          <button className='border py-2'>
              Submit
          </button>
          </div>
      </form>
    </div>
  )
}