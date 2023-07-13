import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import * as XLSX from 'xlsx';
import excelFile from './output21.xlsx';

function Graph_2(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(excelFile);
      const buffer = await response.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const parsedData = jsonData.slice(1).map((row) => ({
        industry: row[0],
        location: row[1],
        total_laid_off: row[2],
      }));

      setData(parsedData);
    };

    fetchData();
  }, []);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.location]) {
      acc[item.location] = {};
    }
    if (!acc[item.location][item.industry]) {
      acc[item.location][item.industry] = 0;
    }
    acc[item.location][item.industry] += item.total_laid_off;
    return acc;
  }, {});

  const locations = Object.keys(groupedData);
  const industries = Array.from(
    new Set(
      [].concat.apply(
        [],
        locations.map((location) => Object.keys(groupedData[location]))
      )
    )
  );

  const traces = industries.map((industry) => {
    const totalLaidOff = locations.map((location) => groupedData[location][industry] || 0);

    return {
      x: locations,
      y: totalLaidOff,
      name: industry,
      type: 'bar',
    };
  });

  const layout = {
    title: 'Stacked bar graph - Total Laid Off by Location',
    xaxis: { title: 'Location' },
    yaxis: { title: 'Total Laid Off' },
    barmode: 'stack',
    width: 1300,
    height: 600,
  };

  return <Plot data={traces} layout={layout} />;
}

export default Graph_2;