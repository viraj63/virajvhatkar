import React from 'react'
import './Project_1.css'
import projectimag from '../../Images/updated_BOX_111_222.png';
import diode_pi from '../../Images/diode_pic.png';
import patentimg from '../../Images/paten.png';
import { Link, useLocation} from 'react-router-dom';


function Project_1() {
    return (
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
                        A PORTABLE, WEARABLE SMART MEDICINE POUCH Monitoring Tool
                    </h2>
                </div>


            </div>

            <img src={patentimg} alt='image1' className='paten_image_1' />
            <div className='project_content_101'>
            <h2>
                    Our Aim!!
                </h2>
                <strong>
                    We aimed to develop a device that empowers patients to take charge of their own medication, eliminating the need for reliance on others. Additionally,
                    our goal was to assist senior citizens who may face challenges remembering their medication due to work-related issues.
                </strong>
                <br>
                </br>
               
                <img src={projectimag} alt='image1' className='project_image_1' />
                <h2>
                    Back_Story
                </h2>
                It began during my second year of Engineering when the time came for us to work on our semester projects. In most Indian engineering colleges, these projects are submitted and
                evaluated in the fourth year and called as the final year Project. However, our college, VIT, had a unique approach that fills me with pride to this day. While submitting one big project at the end, we had to submit smaller
                working projects based on our subjects each semester, along with a final project that would combine the knoweledge of each subject taught for the year.
                <br>
                </br>
                One project that stands out to this day was inspired by the adventurous spirit of a friend's grandfather. 
                Despite his zest for life, he often forgot to take essential medications for conditions like diabetes. 
                This concerned my friend's parents, who constantly worried about his well-being due to his forgetfulness.
                <br>
                </br>
                Motivated to find a solution, we embarked on a mission to create a practical reminder system. Our idea revolved around a small, easily 
                accessible container or packet that would serve as a reminder and track medication intake. Not only would it remind him to take his daily pills, 
                but it would also send a text message to his parents, informing them whether he had taken the medication or not.
                <br>
                </br>
                This project challenged us to blend technology, medicine, and communication into a practical solution that would improve the quality of life for someone dear to us. It was a testament to our
                dedication, innovation, and problem-solving skills as aspiring engineers.
                <img src={diode_pi} alt='image1' className='diode_image_1' />
               
                <br>
                </br>
                <h2>
                    What do the the Stats indicate?
                </h2>

                The stats concludes that <u> <b>70%</b></u> of people have
                trouble taking their medicine on time and as prescribed. Due to it, it has been found in
                the US alone there are more than  <u> <b>1,25,000</b></u> deaths annually due to non-adherence to
                Medication. Studies have shown that 1/3rd of kidney transplant patients don’t take their
                anti-rejection medications, <u> <b>41%</b></u>  of heart attack patients don’t take their blood
                pressure medications, and half of the children with asthma either don’t use their inhalers
                at all or use them inconsistently. And thus when people don’t take the medication as
                prescribed, emergency visits and hospitalization increases which can sometimes be
                fatal.
                <br>
                </br>
                <br>
                </br>


                <h2>Why are we unique?</h2>
                The present invention introduces a portable and wearable smart medical pouch,<em> <strong>designed</strong></em>  to be conveniently worn on the waist.
                Its primary purpose is to promote <em> <strong>REGULARITY</strong></em> in medication intake, addressing the common issue of forgetfulness among senior citizens.
                This innovative pouch incorporates <em> <strong>COLOR-CODED indicators</strong></em> to signify the availability of scheduled medicines, ensuring  <em> <strong>CLARITY & EASE of USE.</strong></em> <br>
                </br>
                Furthermore, the device includes alarm systems and notifications for both patients and their guardians, providing timely reminders and updates on medication consumption.
                Overall, this invention aims to enhance medication adherence and improve the healthcare experience for individuals and their caregivers.
            </div>
<br>
</br>
         
            <a className='box_1'> Next Project  </a>
          
            {/* #<Link to="/project_2" className='box_2'>Light Fidelity</Link>  */}
            
            <a href="https://viraj63.github.io/vt.github.io/" className='box_2'>Testing_project_work_under_progress</a>

            
         



        </div>




    )
}

export default Project_1
