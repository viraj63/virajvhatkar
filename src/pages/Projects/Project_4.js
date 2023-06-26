import React from 'react'
import './Project_1.css'
//import projectimag from '../../Images/proj_3.png';
import video1 from "../../Images/proj_4.mp4";
//import diode_pi from '../../Images/diode_pic.png';
//import patentimg from '../../Images/lifi_2.jpg';
import { Link, useLocation} from 'react-router-dom';
function Project_4() {
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
    
    <Link to="/projects" className='project-tag'>Strategy</Link> 
</div>

<div className="_a_3">
   
    <Link to="/projects" className='project-tag'>UIUX</Link> 
</div>

<div class="_a_3">
  
    <Link to="/projects" className='project-tag'>Ideation</Link> 
    
</div>

<div class="_a_3">
   
    <Link to="/projects" className='project-tag'>Brand Identity</Link> 
</div>


</div>




    </div>

    <div className='project_name'>
        <h2>
        Braille Language_Converter
        </h2>
    </div>


</div>

{/* <img src={projectimag} alt='image1' className='paten_image_1' /> */}
<div className='project_content_101'>
<h2>
        {/*Our Aim!! */}
     </h2>
    <strong>
    The motive is to
produce a text to Braille and vice-versa portable device that can be made at low cost
and gives an opportunity for many visually impaired people.
    </strong>
    <br>
    </br>
   
   {/* <img src={patentimg} alt='image1' className='project_image_1' /> */}
    <h2>
        The Science Behind it!
    </h2>
    The described invention is a portable device designed to convert text language into Braille language and vice versa. The device incorporates several components and processes to achieve this conversion.    <br>
    </br>
    <br>
    </br>
    The device includes multiple cameras that are positioned to capture different sections of a text page. By capturing the page from various angles, the device aims to improve the resolution and clarity of the captured image. These cameras work together to capture the entire page.    <br>
    </br>
    <video src={video1} width="600" height="300" controls="controls" autoplay="true" className='vi_1'/>
    <br>
    </br>
    <br>
    </br>
    Once the image of the text page has been captured, it undergoes further processing to enhance its quality. This processing step aims to improve the resolution and clarity of the image, making it easier to recognize the text accurately.
    <br>
    </br>
    <br>
    </br>
    After the image has been processed, the device utilizes optical character recognition (OCR) technology to recognize the text present in the image. OCR algorithms analyze the image and identify individual characters and words within it. This process allows the device to convert the visual text into machine-readable text.
    <br>
    </br>
    <br>
    </br>
    Once the text has been recognized, the device proceeds to convert it into Braille characters. Braille is a tactile writing system used by individuals with visual impairments, where characters are represented as raised dots on a surface. The device translates the recognized text into the corresponding Braille characters.
    <br>
    </br>
    <br>
    </br>
    To display the converted Braille text, the device incorporates a refreshable Braille device. A refreshable Braille display consists of a grid of small, electronically controlled pins that can be raised or lowered to form Braille characters. The device sends the converted Braille text to this display, which then presents the tactile representation of the text for a visually impaired individual to read.
    <br>
    </br>
    <br>
    </br>
    <h2>
        Conclusion:
    </h2>
    In summary, this invention provides a portable device that uses multiple cameras to capture a text page, processes the captured image to improve its quality, performs optical character recognition to recognize the text, converts the recognized text into Braille characters, and displays the Braille text on a refreshable Braille device. This enables individuals with visual impairments to access and comprehend textual information effectively.
    <br>
    </br>

 
   { /*<img src={diode_pi} alt='image1' className='diode_image_1' />  */}
  { /*
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
  */}


</div>
<br>
</br>

<a className='box_1'> Next Project  </a>

  
<Link to="/project_5" className='box_2'>Object Counter Using IR</Link> 

   
      




</div>
    </div>
  )
}

export default Project_4
