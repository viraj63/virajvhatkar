import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import '../../pages/Projects/Projects.css';
import Proj1 from "../../Images/pic_1.png";
import Proj2 from "../../Images/lifi_1.jpg";
import Proj3 from "../../Images/proj_3.png";
import Proj4 from "../../Images/proj_5.png";
import Proj5 from "../../Images/proj_51.png";
import imaje from "../../Images/imagine.webp";
import imaje1 from "../../Images/here.webp";
import proj7 from "../../Images/net_log.png";
import proj8 from "../../Images/ama_log.jpg";
import proj9 from "../../Images/HR_ANA.jpg";
import proj10 from "../../Images/data_brea.png";


function Projects() {
    return (  <div className="projects">
    <h1> My Personal Projects</h1>
    <div className="projectList">
      
          <ProjectItem name="A Portable, Wearable SMART Medicine Pouch" image={Proj1} />
          <ProjectItem name="Li-Fi" image={Proj2} />
          <ProjectItem name="Tableau Viz_Challenge" image={Proj3} />
          
          <ProjectItem name="Braille Language_Converter" image={Proj4} />
          <ProjectItem name="Object Counter Using IR" image={Proj5} />
          <ProjectItem name="Lay_off_Trend" image={imaje1} /> 

          <ProjectItem name="Netflix_Dashboard" image={proj7} /> 
          <ProjectItem name="Amazon_Dashboard" image={proj8} />
          <ProjectItem name="HR_ANALYTICS" image={proj9} />

          <ProjectItem name="Data_Breach" image={proj10} />
      
    </div>
    <a >
      <h3>
      <strong>
          I haven't updated the page yet because there are still some projects(Data analytics) that need to be added to this section.
          </strong>
      </h3>
      
          
         </a>
  </div>
    );
}
export default Projects;

