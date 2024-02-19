import React from 'react'
import Plot from 'react-plotly.js';
function Plot_4() {

    var allLabels  = [
        ['Consumer',
 'Retail',
 'Hardware',
 'Transportation',
 'Other',
 'Finance',
 'Real Estate',
 'Healthcare',
 'Sales',
 'Food'],

 ['Food',
 'Other',
 'Transportation',
 'Finance',
 'Healthcare',
 'Education',
 'Retail',
 'Travel',
 'Consumer',
 'Crypto']
];


var allValues = [
    [48860.0,
        42981.0,
        23828.0,
        23423.0,
        22816.0,
        17538.0,
        15598.0,
        14603.0,
        12856.0,
        12437.0],

 
        [21525.0,
            16492.0,
            14269.0,
            13091.0,
            13071.0,
            12097.0,
            11844.0,
            10518.0,
            7480.0,
            5649.0]
];


const data = [
    {
      values: allValues[0],
      labels: allLabels[0],
      type: 'pie',
      name: 'Chart 1',
      textinfo: 'label+percent',
      domain: { row: 0, column: 0 },
      title:"USA_Layoff By Industry"
    },
    {
      values: allValues[1],
      labels: allLabels[1],
      type: 'pie',
      name: 'Chart 2',
      textinfo: 'label+percent',
      textposition: 'inside',
      domain: { row: 0, column: 1 },
      title:"Rest of World_Layoff by Industry"
    }
  ];

  const layout = {
    width: 1300,
    height: 600,
    title: 'Pie Chart ',
    grid: { rows: 1, columns: 2 }
  };



  return (
    <div>
      
      <Plot data={data} layout={layout} />


    </div>
  )
}

export default Plot_4
