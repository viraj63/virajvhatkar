import React from 'react'
import Plot from 'react-plotly.js';
function Plot_3() {

    //Data section place it here
    var allLabels  = [
        ['SF Bay Area',
 'Seattle',
 'New York City',
 'Boston',
 'Austin',
 'Boise',
 'Los Angeles',
 'Chicago',
 'Phoenix',
 'Philadelphia'],

 ['Bengaluru',
 'Amsterdam',
 'Berlin',
 'Stockholm',
 'Sao Paulo',
 'London',
 'Gurugram',
 'Singapore',
 'Mumbai',
 'Jakarta']
];

var allValues = [
    [145021.0,
 44741.0,
 29976.0,
 11458.0,
 11199.0,
 7200.0,
 6665.0,
 6500.0,
 5067.0,
 3089.0],

 
 [22733.0,
 17140.0,
 12672.0,
 11067.0,
 8981.0,
 8465.0,
 6376.0,
 5995.0,
 5915.0,
 4321.0]
];
const data = [
    {
      values: allValues[0],
      labels: allLabels[0],
      type: 'pie',
      name: 'Chart 1',
      textinfo: 'label+percent',
      domain: { row: 0, column: 0 },
      title:"USA_Locations affected by layoff"
    },
    {
      values: allValues[1],
      labels: allLabels[1],
      type: 'pie',
      name: 'Chart 2',
      textinfo: 'label+percent',
      textposition: 'inside',
      domain: { row: 0, column: 1 },
      title:"Rest of World_Locations affected by layoff"
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

export default Plot_3
