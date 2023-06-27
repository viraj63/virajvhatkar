import React from 'react';
import About from '../About/About';

import Experience from '../Experience/Experience';
import '../Home/Home.css';

function Home() {
  return (

            <div className='first'>
            <div className='common'>

                  <div className='prompt'>
                        
                          <h2> 👋 My name is Viraj! </h2>
 
                          <p>
                            A Data Science student from<br>
                            </br>
                            <a href="https://www.buffalo.edu/" target="_blank"  className='uni_buf'>  University of New York at Buffalo </a>
                            <br></br>with a passion for learning & creating.
                          </p>
                          <br></br>
                           <p class="sec_para"> 
                           "Don't watch the clock; do what it does. <br>
                           </br>Keep going" - Sam Levenson
                          </p>
                       
                  </div>

                  <div className='logos_home'>

                    <a href="https://www.linkedin.com/in/viraj-vhatkar" target="_blank" title="" className='link_name'> ➜LinkedIn   </a>
                    <a href="https://www.kaggle.com/virajvhatkar" target="_blank" title="" className='link_name'>➜Kaggle</a>
                    <a href="https://www.instagram.com/viraj_vhatkar.6/" target="_blank" title="" className='link_name'>➜Instagram</a>
                    <a href=" https://github.com/viraj63" target="_blank" title="" className='link_name'>➜Github</a>

                  </div>

            </div>
           
            <About />
           
            
            <Experience/>
            </div>
            
  );
 
}

export default Home;