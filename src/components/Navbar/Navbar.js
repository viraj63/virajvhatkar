import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import "../Navbar/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';  



function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
   
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return ( 
        
        <div className = 'navbar' id={expandNavbar ? "open" : "close"}>
              
            <div className = 'toggleButton'>
                <button onClick = {() => { setExpandNavbar((prev) => !prev); }} >
                    <ReorderIcon />{" "}
                </button>
            </div>
           
            <div className = 'links'>
                <Link to="/" className="highlight">HOME</Link>
                <Link to="/about" className="highlight">ABOUT</Link>
                <Link to="/projects" className="highlight">PROJECTS</Link>
                <Link to="/experience" className="highlight">EXPERIENCE</Link>
            </div>
             
                <div className='resume'>

                <a href={require("../Navbar/re.pdf")} download="Resume_Viraj_Vhatkar"><Button>   Download_Resume  </Button></a>

                    
             
              </div>

               
        
        </div>
        
    );
}

export default Navbar;