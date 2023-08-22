import React, { useEffect } from "react";
import Graph from "graphology";
import { Sigma, RandomizeNodePositions, ForceAtlas2 } from "react-sigma";

function Project_14(){
    const graph = new Graph();
    graph.addNode("John", { label: "John", color: "blue" ,size: 100 });
    graph.addNode("Mary", { label: "Mary", color: "red" ,size: 100 });
    graph.addEdge("John", "Mary");
  
    return (
        <Sigma
      graph={graph}
      settings={{
        drawEdges: true,
        clone: false,
        defaultNodeColor: "black", // Default node color
        defaultEdgeColor: "black", // Default edge color
      }}
    >
        <RandomizeNodePositions>
          <ForceAtlas2 iterationsPerRender={1} timeout={3000} />
        </RandomizeNodePositions>
      </Sigma>
    );
  }
  

export default Project_14
