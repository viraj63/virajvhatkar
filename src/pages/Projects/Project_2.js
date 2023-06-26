import React from 'react'
import './Project_1.css'
import projectimag from '../../Images/lifi_22.jpg';
import diode_pi from '../../Images/diode_pic.png';
import patentimg from '../../Images/lifi_2.jpg';
import { Link} from 'react-router-dom';
function Project_2() {
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
                <a href="/projects" className="project-tag">Strategy</a>
            </div>

            <div className="_a_3">
                <a href="/projects" className="project-tag">UIUX</a>
            </div>

            <div class="_a_3">
                <a href="/projects" className="project-tag">Ideation</a>
            </div>

            <div class="_a_3">
                <a href="/projects" className="project-tag">Brand Identity</a>
            </div>


        </div>




    </div>

    <div className='project_name'>
        <h2>
        Light-Fidelity
        </h2>
    </div>


</div>

<img src={projectimag} alt='image1' className='paten_image_1' />
<div className='project_content_101'>
<h2>
        Our Aim!!
    </h2>
    <strong>
    Our objective was to showcase the advantages of using LiFi as a means to provide affordable and seamless WiFi access across a college campus, allowing for effortless integration into existing systems while maintaining fast and reliable connectivity.
    </strong>
    <br>
    </br>
   
    <img src={patentimg} alt='image1' className='project_image_1' />
    <h2>
        Background
    </h2>
    LiFi, short for Light Fidelity, is a wireless communication technology that utilizes light waves instead of traditional radio frequencies to transmit data. It works by modulating the intensity of light emitted by LED bulbs, which can then be received by photosensitive devices such as laptops, smartphones, or other compatible devices.
    <br>
    </br>
    <br>
    </br>
    For demonstrating the potential of LiFi we have a setup of the Following: 
    <br>
    </br>
            a. LiFi-enabled LED<br>
    </br>
            b. Receiver Devices i.e Photodectors or compatible LiFi dongles.
    <br>
    </br>
            c. Transmitter/Receiving circuit for speakers.
 
   { /*<img src={diode_pi} alt='image1' className='diode_image_1' />  */}
   
    <br>
    </br>
    <h2>
        Working:
    </h2>
    The transmitter circuit for the DIY Li-Fi speaker consists of three amplifiers configured in parallel mode. The audio signals from a mobile phone or any audio source are first amplified by the common-emitter (CE) amplifiers. These amplifiers boost the audio signals to a suitable level for transmission.
    <br>
    </br>
    <br>
    </br>
    By interfacing the solar panel with the audio port of the speaker, the light signals received by the solar panel are converted back into electrical signals, which are then fed as input to the speaker. This allows the speaker to reproduce the audio signals transmitted through light.

    <br>
    </br>
    <br>
    </br>
    Here  when  the light signals are transmitted and received by the photodetectors, the next step is to amplify the received signals before sending them to the speakers.Many a times the amplification circuits are built in with speaker but here we had to build it from scratch.
    <br>
    </br>
    <br>
    </br>
The received light signals, which have been converted back into electrical signals by the photodetectors, may be weak and need to be strengthened for proper audio playback. This amplification process ensures that the signals are of sufficient strength to drive the speakers effectively.    <br>
    </br>
    <br>
    </br>



</div>
<br>
</br>

<a className='box_1'> Next Project  </a>

{/*<a  href="../../pages/Projects/project_3"  className='box_2' ></a> */}
<Link to="../../pages/Projects/project_3" className='box_2'>Tableau Viz_Challenge</Link>   

   
      




</div>



    </div>
  )
}

export default Project_2
