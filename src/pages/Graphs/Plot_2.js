import React from 'react'
import Plot from 'react-plotly.js';
function Plot_2() {
  return (
    <div>
      
      <Plot
      data={[
        {

          labels: [2020, 2021, 2022],
          values: [80968.0, 15023.0, 153678.0],
          type: 'pie',
          hoverinfo: 'label+value', // Show label and value on hover
          textinfo: 'percent',
          textposition: 'inside',
          marker: {
            colors: [ 'mint', 'blue',  'yellow' ],
          },
        },


      ]}

      layout={{
        width: 1300,
        height: 600,
        title: 'Pie Chart',
      }}

    />  



    </div>
  )
}

export default Plot_2
