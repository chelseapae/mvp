import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Categories from './Categories.js';

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#ECE8DB',
        '#D3CBC7',
        '#AEBCC4',
        '#E1DACC',
        '#CFCBC9',
        '#C1CCCA'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    cutout: 10
  }
}

export default function Breakdown(){
  return(
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className="item">
        <div className="chart relative">
        <Doughnut {...config} />
        <h1><b>Total</b></h1>
        <Categories />
      </div>
    </div>
    </div>
  )
}