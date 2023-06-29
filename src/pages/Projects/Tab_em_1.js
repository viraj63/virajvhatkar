import React, { useState, useEffect, useRef } from "react";
const {tableau}=window;
// <img src={patentimg} alt='image1' className='project_image_1' />

function Tab_em_1() {
    const ref = useRef(null);
    const url =  "https://public.tableau.com/views/Book2_amazaon/Dashboard1";

const initViz = () => {
    if (!ref.current.innerHTML) {
  new tableau.Viz(ref.current,url);
}
};

useEffect(initViz,[]);

   
    return <div style={setVizStyle}  ref={ref} ></div>;
      
    
        
  }
  
  const setVizStyle = {
    width: "800px",
    height: "700px",
    marginTop: "10%",
    marginBottom: "90px",
  
  };
  

export default Tab_em_1
