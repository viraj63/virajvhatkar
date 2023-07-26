import React, { useEffect } from "react";
import * as d3 from "d3";
 // Only if you have additional functions from networkD3 package that you want to use

const Htm = () => {
  useEffect(() => {
    // Create a dataset
    const data = [
      { from: "A", to: "B" },
      { from: "A", to: "E" },
      { from: "B", to: "F" },
      // ... Add the rest of your data here
    ];

    // Convert data to D3-compatible format
    const nodes = new Set(data.map((d) => d.from).concat(data.map((d) => d.to)));
    const nodesArray = Array.from(nodes).map((node) => ({ name: node }));
    const links = data.map((d) => ({
      source: nodesArray.findIndex((node) => node.name === d.from),
      target: nodesArray.findIndex((node) => node.name === d.to),
    }));

    // Create SVG container for the graph
    const svg = d3.select("#network-graph");

    // Create D3 force simulation
    const simulation = d3
      .forceSimulation(nodesArray)
      .force("link", d3.forceLink(links).distance(100))
      .force("charge", d3.forceManyBody().strength(-900))
      .force("center", d3.forceCenter(500, 500)); // Adjust centering as needed

    // Draw links
    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "#666")
      .attr("stroke-width", 2);

    // Draw nodes
    const node = svg
      .selectAll(".node")
      .data(nodesArray)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 10) // Adjust node size as needed
      .attr("fill", "#69b3a2");

    // Add labels to nodes (if required)
    const labels = svg
      .selectAll(".label")
      .data(nodesArray)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("font-size", 14)
      .attr("font-family", "serif")
      .attr("dy", 4)
      .text((d) => d.name);

    // Tick function to update positions of nodes and links on each simulation step
    const ticked = () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      // Update label positions (if required)
      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    };

    // Register ticked function with the simulation
    simulation.on("tick", ticked);

    // Optionally, you can enable zooming on the graph using D3 zoom behavior
    // For that, you can use the d3.zoom() function to create a zoom behavior
    // and apply it to the SVG container.

    // For more advanced functionalities similar to networkD3, you may need to explore other libraries or implement custom code based on your requirements.

    return () => {
      // Clean up if necessary
    };
  }, []);

  return <svg id="network-graph" width="1000" height="1000"></svg>;
};

export default Htm;