import React from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';

function Htm() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Iframe url="./ni2.html"
          width="100%"
          height="500px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>      </div>
    );
  }
  
  export default Htm;