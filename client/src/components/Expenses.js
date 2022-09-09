import React from 'react'


function Transaction({data}){
  if(!data){
    return null
  }
  return(
      <div>
        <span>
          {data.expense}
          </span>
      </div>
  )
}

export default function Expenses() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1> Expenses </h1>
      {obj.map((expense, i) => {
        <Transaction category={expense} key={i}/>
      })}
    </div>
  )
}


const obj = [
  {
    expense: "Flight"
  },
  {
    expense: "Hotel"
  },
  {
    expense: "Transportation"
  },
  {
    expense: "Food"
  },
  {
    expense: "Activities"
  },
  {
    expense: "Misc."
  }
]