import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import './Experience.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience' >
      <VerticalTimeline lineColor='#3e497a'>
        
      <VerticalTimelineElement  >

        </VerticalTimelineElement>






      <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'August_2018 - July_2022'
        iconStyle = {{background: 'paleturquoise' , color:'#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
          <a href="http://www.unipune.ac.in/" target="_blank" >  University of Pune</a>
          
          </h3>
          <p>
            <strong>
            Bachelor of Technology (BTech), Instrumentation & Control Engineering
            </strong>
          
          </p>
         
        
        </VerticalTimelineElement>




      <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'November_2018 - December_2018'
        iconStyle = {{background: '#557F7F', color:'#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
          <a href="https://pclindia.in/" target="_blank" > Precision Camshafts Limited</a>
          
          </h3>
          <p><strong>
          Intern
          </strong>
          
          </p>
          <p>
          ● Contributed to production engineering and Quality Team initiatives in conducting time studies and motion
economy studies of 300+ workers on production lines to increase the production output by 3% <br>
</br>
● Partnered with Quality Control by analysing weekly reports on 5 KPIs such as throughput, capacity utilisation 
and conducting root-cause analysis on problems at 12 production lines at machine shops to reduce defects<br>
</br>
● Audited foundry and machine shop layout plan to identify operational improvements and achieve a reduction
in material transportation using 5S and VSM

          </p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'June_2021 - January_2022'
        iconStyle = {{background: '#557F7F', color:'#fff'}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          <a href="https://www.orionswitches.com/" target="_blank" >  Orion Instruments</a>
            
          </h3>
          <p>
            <strong> Instrumentation & Control Engineer
              </strong>
          </p>
          <p>
          ●Assisted a team of 5 colleagues in the calibration of the Electronic O-gauge in order to find out malfunctions
during more than 5 testing Testing period<br>
</br>
● Contributed to finding bugs in the Mobile App and The Dashboard algorithm for a smooth user interface
system<br>
</br>
● Assisted and carried out Accuracy tests at COEP's Instrumentation Lab.<br>
</br>
● Supported audit/inspection readiness and participated in audits and regulatory inspections as required.<br>
</br>
● Contributed to a research project involving the deployment of pressure gauges at the College of Engineering Pune (COEP) university. As part of the project, I collaborated with Ph.D. students to conduct tests and analyze the resulting data.

          </p>
        
        </VerticalTimelineElement>




    
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'Februvary_2022-August 2022'
        iconStyle = {{background: '#557F7F', color:'#fff'}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          <a href="https://photonlegal.com/" target="_blank" > Photon Legal</a>
            
          </h3>
          <p>
            <strong>
            Research Engineer
            </strong>
            
          </p>
          <p>
          ● As a research intern, I worked with the IP Group attorneys on tasks related to the patent and trademark filing
process, including analysing patent filings and applications, developing patent strategies, obtaining trademark
protection, and providing counselling on patent issues. <br>
</br>
● Also, assisted in filing 12+ FER and OA for the patents and supported 6+ current and several potential patent
litigations
          </p>
        
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date= 'August_2022 - '
        iconStyle = {{background: 'paleturquoise', color:'#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
          <a href="https://www.buffalo.edu/" target="_blank" >  University of New York at Buffalo</a>
          
          </h3>
          <p>
          Master of Science (MS), Data Science
      
          </p>
          <p>
          August 2022 - 
          </p>
        
        </VerticalTimelineElement>




      </VerticalTimeline>
    </div>
  );
}

export default Experience;