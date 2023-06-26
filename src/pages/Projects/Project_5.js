import React from 'react'
import './Project_1.css'
import projectimag from '../../Images/proj_52.jpg';
import video1 from "../../Images/LDR_1.mp4";
import video2 from "../../Images/LDR_12.mp4";
import video3 from "../../Images/IR_1.mp4";
import { Link} from 'react-router-dom';

function Project_5() {
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
        Object Counter Using IR
        </h2>
    </div>


</div>

<img src={projectimag} alt='image1' className='paten_image_1' />
<div className='project_content_101'>
<h2>
        
    </h2>
    <strong>
    Through my project, I aim to bridge the gap between theory and practice by demonstrating an object counter that encompasses the lessons learned within the classroom.
    </strong>
    <br>
    </br>
   
    { /*<img src={patentimg} alt='image1' className='project_image_1' /> */}
    <h2>
        The Science Behind it.
    </h2>
    An infrared (IR) sensor is an electronic device designed to detect and measure infrared radiation present in its surroundings.    <br>
    </br> 
    There are two main types of infrared sensors: active and passive.     <br>
    </br><br></br>
    <strong>Active infrared </strong>sensors function by emitting and detecting infrared radiation.     

    They consist of a light emitting diode (LED) and a receiver. When an object approaches the sensor, the infrared light emitted 
    by the LED reflects off the object and is picked up by the receiver. Active IR sensors are primarily used as proximity sensors
     and find applications in obstacle detection systems.
     <br>
    </br>    <br>
    </br>
     <strong>Passive infrared (PIR) </strong>sensors are a type of infrared sensor that detects infrared radiation emitted by objects in their field
      of view. Unlike active infrared sensors that emit their own infrared light, PIR sensors rely on detecting changes in the 
      infrared energy levels emitted by objects in the environment.
      <br>
    </br>
    <br>
    </br>
      And <strong>LDR</strong> are Photoresistors, also known as light dependent resistors (LDR), are light sensitive devices most often used to indicate the presence or absence of light, or to measure the light intensity.
    <br>
    </br>
    <br>
    </br>
    In this project, both an active infrared sensor and an LDR (Light Dependent Resistor) separately have been utilized to showcase its functionality.
    <br>
    </br>
    <video src={video1} width="600" height="300" controls="controls" autoplay="true" className='vi_1'/>
    <br>
    </br>
    <br>
    </br>
    1.) In the aforementioned project video, various components were employed including an LDR, transistor,resistors, potentiometers, an operational amplifier (OP-amp)(LM358), and LED lights to demonstrate the counting process. Instead of a 7-segment display, LED lights were utilized to indicate the count, with the lights blinking in a specific pattern.
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br><video src={video2} width="600" height="300" controls="controls" autoplay="true" className='vi_1'/>
    <br>
    </br>
    2.) In the above project video we have demonstrated, the use of a 7-segment display in conjunction with an LDR (Light Dependent Resistor) has been showcased.

    <br>
    </br>
    <br>
    </br>
    <video src={video3} width="600" height="300" controls="controls" autoplay="true"  className='vi_1'/>
    <br>
    </br>
    3.) In the above project video we have demonstrated, the use of a 7-segment display in conjunction with an Active infrared senor has been showcased.
    
  {/*       <a href='https://public.tableau.com/views/OfficialProject23042021/Story1?:language=en-US&:display_count=n&:origin=viz_share_link'>
              Tableau_Dasboard_Notebook_1
   </a>
   <br>
    </br>
    <br>
    </br>
   <a >
  Youtube link for Notebook_1 below:
  <YouTube videoId="LOwnkxH75p4" /> </a>*/}   {/**/}
     
   
   <br>
    </br>
    <br>
    </br>
    <br>
    </br>

    {/* 
    
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
    
   
    
    */}
{ /*<img src={diode_pi} alt='image1' className='diode_image_1' />  */}
   
    <br>
    </br>
    <h2>
 
    </h2>




</div>
<br>
</br>

<a className='box_1'> Next Project  </a>

   
<Link to="../../pages/Projects/project_6" className='box_2'>Lay_off_Trend</Link> 
   
      




</div>



    </div>

  )
}

export default Project_5
