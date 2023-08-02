import React, { useEffect, useRef } from 'react'
import './Project_12.css'
//import projectimag from '../../Images/proj_3.png';
import diode_pi from '../../Images/ama_log_1.png';
//import video1 from "../../Images/proj_4.mp4";
import { Link, useLocation } from 'react-router-dom';
import patentimg from '../../Images/ama_scre.png';
const { tableau } = window;

function Project_10() {


    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Apple_INC/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link";

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

                                <Link to="https://public.tableau.com/views/Apple_INC/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link" className='project-tag'>Tableau</Link>

                            </div>
                        </div>



                    </div>

                    <div className='project_name'>
                        <h2>
                            Apple_INC
                        </h2>
                    </div>


                </div>

                {/* <img src={projectimag} alt='image1' className='paten_image_1' /> */}
                <div className='project_content_101'>
                    <h2>
                        Apple Inc.: A Journey of Innovation and Global Impact
                    </h2>
                    <div ref={ref} className='tab_101' ></div>
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
