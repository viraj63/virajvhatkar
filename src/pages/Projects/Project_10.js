import React ,{useEffect, useRef} from 'react'
import './Project_10.css'
//import projectimag from '../../Images/proj_3.png';
import diode_pi from '../../Images/ama_log_1.png';
//import video1 from "../../Images/proj_4.mp4";
import { Link, useLocation } from 'react-router-dom';
import patentimg from '../../Images/ama_scre.png';
const { tableau } = window;

function Project_10() {
 

    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Data_Breach_16895843841370/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";

    const initViz = () => {
        if (!ref.current.innerHTML) {
            new tableau.Viz(ref.current, url);
        }
    };

    useEffect(initViz, []);


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

                                <Link to="https://public.tableau.com/views/Netflix_Recreate/Netflix?:language=en-US&:display_count=n&:origin=viz_share_link" className='project-tag'>Tableau</Link>

                            </div>
                        </div>



                    </div>

                    <div className='project_name'>
                        <h2>
                           Data_Breach DASHBOARD
                        </h2>
                    </div>


                </div>

                {/* <img src={projectimag} alt='image1' className='paten_image_1' /> */}
                <div className='project_content_101'>
                    <h2>
                        Aim!!
                    </h2>
                    <strong>
                        To Recreate the insight from the Data_Breached dataset using Tableau.
                    </strong>
                    <br>
                    </br>
                    <br>
                    </br>

                    {/* <img src={patentimg} alt='image1' className='project_image_1' /> 
<h2>
The Science Behind it!
</h2>*/}

                    {/*<a href={require("../../pages/Projects/Layoff_Kaggle1.pdf")}>PDF</a> <a href='https://www.linkedin.com/posts/viraj-vhatkar_layoff-trends-since-covid-activity-7023747850031235073--FMJ?utm_source=share&utm_medium=member_desktop'> Linkedin</a> */}   <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    
                    


                    I have utilized the Data_Breach dataset, available in XLXV format, to create an interactive Dashboard that provides various insights. The insights include:<br></br><br></br>

                    1. Word Cloud by Age group.<br></br>
                    2. Records lost by different methods: hacked, poor security, accidentally published, or inside job by a human.<br></br>
                    3. Summarized version: Records lost include crucial credit card information, SSN, email addresses, and full details.<br></br>
                    4. Packed Bubble Graph displaying the organization with the highest number of records lost along with the corresponding year.<br></br>
                    
                    <br></br>
                    To visualize these insights, I have designed a Tableau Dashboard. <br></br>You can interact with the dashboard to explore the data and look for some amazing insights.

                            <div  ref={ref} className='tab_102' ></div>

                    

                    <br>
                    </br>

                      { /*<img src={diode_pi} alt='image1' className='diode_image_1' />  */}
                    <br></br><br></br>
                    Using the Tableau JavaScript API I have integrated the Tableau visualizations into my own web applications here.
       



                    

                </div>
                <br>
                </br>

                <a className='box_1'> Next Project  </a>
                <Link to="/project_9" className='box_2'>HR_ANALYTICS</Link>
            </div>
        </div>
    )
}

export default Project_10
