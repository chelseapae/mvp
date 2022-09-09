import React from 'react';

const obj = [
  {
    expense: "Flight",
    percent: 25
  },
  {
    expense: "Hotel",
    percent: 25
  },
  {
    expense: "Transportation",
    percent: 25
  },
  {
    expense: "Food",
    percent: 25
  },
  {
    expense: "Activities",
    percent: 25
  },
  {
    expense: "Misc.",
    percent: 25
  }
]

export default function Labels() {
  return (
    <div>
      {obj.map((data, i) => <Category key={i} data={data} />)}
    </div>
  )
}

function Category({data}) {
  if (!data) {
    return <></>
  }
  return (
    <div>
      <h2>{data.expense}</h2>
      <h3>{data.percent}%</h3>
    </div>
  )
}