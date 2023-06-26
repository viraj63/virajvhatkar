import React from 'react'
import './Project_1.css'
import projectimag from '../../Images/proj_3.png';
import diode_pi from '../../Images/diode_pic.png';
import patentimg from '../../Images/lifi_2.jpg';
import YouTube from 'react-youtube';
import { Link, useLocation} from 'react-router-dom';

function Project_3() {
  return (
    <div>
              <div className='outer_class'>

<div className="text_box">

    <div className='class_1'>
        <h1>
            Viraj Vhatkar
        </h1>
    </div>

    <div className="inner_1_1">



        <div className="inner_1_2">


            <div className="_a_3">
                <a href="/projects" className="project-tag">Analytics</a>
            </div>

            <div className="_a_3">
                <a href="/projects" className="project-tag">Tableau</a>
            </div>

            <div class="_a_3">
                <a href="/projects" className="project-tag">Ideation</a>
            </div>

            <div class="_a_3">
                <a href="/projects" className="project-tag">Research</a>
            </div>


        </div>




    </div>

    <div className='project_name'>
        <h2>
        Tableau Viz_Challenge 2021
        </h2>
    </div>


</div>

<img src={projectimag} alt='image1' className='paten_image_1' />
<div className='project_content_101'>
<h2>
        
    </h2>
    <strong>
    The Tableau Viz_Challenge is an annual data visualization competition organized by Tableau, a leading data visualization and business intelligence software company.The Tableau Viz_Challenge 2021 focused on the regions of South East Asia and South Asia. 
    </strong>
    <br>
    </br>
   
    { /*<img src={patentimg} alt='image1' className='project_image_1' /> */}
    <h2>
        Background
    </h2>
    Although I made it to the finals of the Tableau Viz_Challenge 2021, unfortunately, I did not emerge as a winner in the finals.
    <br>
    </br>
    <br>
    </br>
    Here are the links for the Notebooks:
    <br>
    </br>
   <a href='https://public.tableau.com/views/OfficialProject23042021/Story1?:language=en-US&:display_count=n&:origin=viz_share_link'>
              Tableau_Dasboard_Notebook_1
   </a>
   <br>
    </br>
    <br>
    </br>
   <a >
   Youtube link for Notebook_1 below:
   <YouTube videoId="LOwnkxH75p4" />
     
   </a>
   <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <a href='https://public.tableau.com/views/OfficialProject23042021_10062021/Story3?:language=en-US&:display_count=n&:origin=viz_share_link'>
    Tableau_Dasboard_Notebook_2
   </a>
   <br>
    </br>
    <br>
    </br>
   <a >
     Youtube link for Notebook_2:
     <YouTube videoId="m9MoqYTO4TA" />
   </a>
    
   { /*<img src={diode_pi} alt='image1' className='diode_image_1' />  */}
   
    <br>
    </br>
    <h2>
 
    </h2>




</div>
<br>
</br>

<a className='box_1'> Next Project  </a>


<Link to="/project_4" className='box_2'>Braille Language_Converter</Link>   
   
      




</div>



    </div>
  )
}

export default Project_3
