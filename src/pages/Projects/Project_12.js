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


                    <div className='details'>
                        Data visualization is a crucial step in the data analysis process as it helps to
                        communicate insights effectively and gain a deeper understanding of the data.
                        <br>
                        </br>
                        From Data Acquisition to Dashboard Refinement and Sharing: Learn, Practice, Implement and Refine Your Skills!
                        <br>
                        </br><br>
                        </br>
                        
                        The first step was data acquisition, where I collected data from various sources, including Wikipedia and Kaggle. I used some handy tools like pyscrapy(a Python web scraping library) and SQL to retrieve the data from different databases and web pages.
                        It was crucial to ensure the data's quality since it would directly impact the analysis.
                        <br>
                        </br><br>
                        </br>
                        Once I had the data, the next step was data cleaning. I must admit, this part was exhausting and time-consuming. It took me a day or two to clean and align the data properly, making it more usable for analysis.
                        I focused on removing duplicates, handling missing values through imputation or elimination, and dealing with outliers that could skew the results.
                        <br></br>
                        <br>
                        </br>After the data was cleaned and prepped, I proceeded with data transformation. This step involved converting the data into a suitable format for analysis and visualization. I normalized certain numerical data to a common scale and encoded categorical variables.
                         Some parts of the data required transformation to enhance visualization and improve the representation of trends and patterns.
                         <br>
                         </br><br>
                         </br>
                         With the transformed data, I delved into Exploratory Data Analysis (EDA). This was one of the most exciting parts as I got to explore the data, uncover hidden insights, and understand the relationships among different variables. 
                         I used descriptive statistics, summary plots, and various data visualization techniques to better understand the data. 
                         <br>
                         </br>
                         <br>
                         </br>
                         Once I had a good understanding of the data, I proceeded to the final part of the project: data visualization. This step was crucial as it helped me communicate the insights effectively to my audience. I decided to use Tableau to create an interactive and visually appealing dashboard. 
                         It was a great choice since Tableau allowed me to present the data in an easily understandable format.
                         <br>
                         </br>
                         <br></br>
                         To build the Tableau dashboard, I carefully selected the appropriate visualization types for each insight. I arranged the visualizations on the dashboard canvas to create a cohesive and informative layout. 
                         Tableau's interactive features, like filters and drill-down options, added a dynamic element to the dashboard, enabling users to explore the data interactively.
                         <br></br>
                         Finally after the completion, to share the dashboard to my audence , I have embedded it to my website using the Tableau JavaScript API and sharing a copy of it on linkedIn on 8/3/2022.
                        
                    </div>
                    <br>
                </br>
                </div>
                <br>
                </br>

                <a className='box_1'> Next Project  </a>
                <Link to="/project_11" className='box_2'>Videogames_Release_2022_Analysis</Link>
            </div>
        </div>
    )
}

export default Project_10
