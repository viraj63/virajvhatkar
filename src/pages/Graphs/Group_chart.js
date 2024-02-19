import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import * as XLSX from 'xlsx';
import excelFile from './output.xlsx';
const Group_chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(excelFile);
     
      const buffer = await response.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      
      const parsedData = jsonData.slice(1).map(row => ({
        industry: row[0],
        year: row[1],
        total_laid_off: row[2],
      }));
      
      setData(parsedData);
    };

    fetchData();
  }, []);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push({ industry: item.industry, total_laid_off: item.total_laid_off });
    return acc;
  }, {});

  const traces = Object.keys(groupedData).map((year) => {
    const industries = groupedData[year].map((item) => item.industry);
    const totalLaidOff = groupedData[year].map((item) => item.total_laid_off);

    return {
      x: industries,
      y: totalLaidOff,
      name: year,
      type: 'bar',
    };
  });

  const layout = {
    title: 'Comparison bar graph_Total Laid off by Sector in 2020,2021 & 2022',
    barmode: 'group',
    xaxis: { title: 'Industry' },
    yaxis: { title: 'Total Laid Off' },
    width: 1300,
        height: 600,
  };

  return <Plot data={traces} layout={layout} />;
};

export default Group_chart;
