import React from 'react'
import './Project_13.css'
import { Link, useLocation } from 'react-router-dom';
import micro820 from '../../Images/proj13_micro820plc.png';
import proj12_ogauge from '../../Images/proj12_ogauge.png';
import video2 from "../../Images/proj12_video12.mp4";
import proj12_excel from '../../Images/proj12_excel.png';
import proj12_excel_2 from '../../Images/proj12_excel_2.png';
import proj13_11 from '../../Images/proj13_11.png';
import proj13_12 from '../../Images/proj13_12.png';
import proj13_13 from '../../Images/proj13_13.png';

import proj13_21 from '../../Images/proj13_21.png';
import proj13_22 from '../../Images/proj13_22.png';
import proj13_23 from '../../Images/proj13_23.png';
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
                        Ogauge Pressure Trasnmitter Accuracy Test
                        </h2>
                    </div>
                </div>
                <div className='project_content_101'>
                    <h2>

                    </h2>
                    <strong>
                  
                    </strong>
                    <br>
                    </br><br>
                    </br><br>
                    </br>
                    <h3>Abstract</h3>
<div className='content'>

With the rapid advancement of industrial automation in the context of Industry 4.0, numerous projects worldwide are leveraging Industrial Internet of Things (IIoT), machine learning, data science, and data processing to drive progress. Among these initiatives, IIoT-enabled smart sensors have emerged as a key innovation. Traditionally, sensors have been responsible for sensing physical data and then transmitting it to transducers for conversion into electric signals. These signals are then stored in controller memory or hard storage, leading to memory consumption and additional losses in case of sensor failures.
<br>
                    </br><br>
                    </br>
However, smart sensors are changing the landscape by not only converting data into readable electric form but also incorporating digital processing capabilities. They establish communication between the field sensor, cloud, and controller, all while performing onboard diagnostics. This autonomy allows each sensor node to operate independently, reducing complexity in system architecture and enhancing automation levels. The use of smart sensors is transforming industrial processes, enabling efficient data management, real-time analysis, and streamlined operations, thus driving the industrial sector towards greater efficiency and productivity in the Industry 4.0 era.


</div>
<div className='content_1'>
<h3>Introduction to Electronic Pressure Device</h3>
The IoT-enabled Ogauge pressure sensor is a versatile device that enables real-time pressure monitoring on the cloud and local display.<br>
                    </br>
Along with its precise measurements, it includes four adjustable relay contacts, allowing users to set pre-defined pressure thresholds to match specific operational requirements. <br>
                    </br>
The device features a 19-pin connector that seamlessly connects to a separate signal box, supporting industry-standard signals (4-20mA, 0-10V), and is powered by a 24V DC supply. 
Configuration of the pressure sensor is facilitated through Orion Instruments' cloud platform, following a SaaS model, providing a straightforward user interface and streamlined management. <br>
                    </br>Additionally, the Orion Android application offers convenient Bluetooth connectivity for easy device details reading within a 10-meter range. 
The Ogauge pressure sensor optimizes pressure monitoring processes, enhancing efficiency in Industry 4.0 environments.
</div>
<div className='content_1'>
    <h4>
        Project Under me
    </h4>
    During my internship, I proactively led a project focused on conducting Performance and Accuracy Tests for the Ogauge pressure Trasnmittor. 
    To accomplish this task, I brought the Ogauge to the esteemed University of Pune, also known as COEP. With the guidance of a knowledgeable professor, I conducted the tests. 
    Additionally, I had the valuable assistance of a PhD student, who provided support in handling the instruments available in the COEP lab.
<br></br><br>
</br>
Step_1) It Involed integrating the Ogauge with the Micro 820 PLC.<br>
</br>  <br>
</br>
So what is Micro 820 Plc?<br>
</br>--->
Micro 820 PLC is designed for small standalone machines and remote automation projects. 
Connected Components Workbench (CCW) software is used for PLC programming. 
 Ethernet/IP port is available for communication with PC. Built-in Real Time Clock (RTC) is available. 
 microSD slot for program transfer, data log and recipe is available. 
 Pin configuration is available to communicate with external devices. 
 For Ogauge pressure transmitter we will be requires two analog input for current and voltage signal.
  For four relay contacts we will be required four digital inputs
  <img src={micro820} alt='image1' className='image_1' /> 
  <br></br>
  During the project, the first step was to connect the Ogauge pressure sensor to a reliable 24VDC power supply. Subsequently, I configured the driver of the Micro 820 PLC using a dynamic IP address, ensuring seamless communication.
  <br>
  </br><br></br>
  To ensure proper functionality, all the wiring was  done in accordance with the wiring scheme. 
  Following this, I developed a ladder logic program using Connected Components Workbench for controlling the relay contacts based on the pressure readings from the Ogauge sensor.<br>
  </br><br>
  </br>
  Once the ladder logic program was completed and thoroughly tested, I uploaded it into the Micro 820 PLC, ensuring that the controller was ready to execute the logic.<br>
  </br><br></br>
  For the next phase of the project, the SCADA (Supervisory Control and Data Acquisition) system was implemented with the expertise of the PhD student. The student took charge of configuring the SCADA using Factory Studio, ensuring that all the ladder logic was running flawlessly and that the system was able to monitor and control the pressure sensor data efficiently.
<br>
</br><br>
</br>
Through this collaborative effort, the project successfully achieved its objective of validating the performance and accuracy of the Ogauge pressure sensor, integrating it with the Micro 820 PLC, and establishing a reliable SCADA system for data visualization and control
<br>
</br><br>
</br>The image of Ogauge:
<img src={proj12_ogauge} alt='image1' className='image_2' /> <br>
</br><br>
</br>
<video src={video2} width="600" height="300" controls="controls" autoplay="true" className='vi_1'/>
<br>
</br><br>
</br>
I conducted Performance Monitoring and Maintenance tests, which included the data collection and subsequent analysis processes. 
Specifically, I was responsible for performing the data collection test and conducting the subsequent data analysis.
<br>
</br><br>
</br>
What is Performance Monitoring and Maintenance?
<br>
</br>
--->Preventive Maintenance is a proactive approach to maintenance management that involves replacing components or overhauling items at fixed intervals to prevent premature equipment damage and avoid unscheduled downtime, which would otherwise lead to repair or corrective activities. This approach aims to maintain acceptable levels of availability and reliability. According to the European standard (prEN 13306, 1998), preventive maintenance is defined as maintenance carried out at predetermined intervals or according to prescribed criteria, with the intention of reducing the probability of failure or degradation in the functioning of an item.
<br>
</br><br>
</br>

On the other hand, Predictive Maintenance is a philosophy that leverages the actual operating condition of equipment and systems within a plant to optimize overall plant operation. Condition monitoring techniques, such as monitoring changes in vibration characteristics or temperature, are employed using specialized equipment to assess the condition of critical equipment. A comprehensive predictive maintenance management program incorporates cost-effective techniques in combination to gather critical equipment condition data, enabling maintenance activities to be scheduled on an as-needed basis. This approach enhances operational efficiency and minimizes unexpected breakdowns. (Moubray, 1997).
<br>
</br><br>
</br>
Below are some images of the Calulations carried on the data acquired.

<img src={proj12_excel} alt='image1' className='image_3' /> <br></br>
<img src={proj12_excel_2} alt='image1' className='image_3' /> 
<br></br><br></br>
The <a href={require("./Accuracy.pdf")} download="Performace_Excel_report">Link</a> to the Calculation Pdf is attached.
<br>
</br>

<h4>
Observation of time series pressure signal :
</h4>
Pressure is being monitored within the range of 1 to 9 kg/cm^2, with a set point of 5 kg/cm^2.The time series pressure signal data is recorded and available in Excel format on a dashboard. Two key statistical parameters, mean and variance, are being analyzed to understand the behavior of the pressure signal.
<br>
</br><br>
</br>
By analyzing the mean and variance of the time series pressure data, we can gain valuable information about the pressure behavior, its stability, and fluctuations within the monitored range. This information is crucial for ensuring the system's reliability and detecting any abnormal pressure trends

<div className='imgggg'>
      <div style={{ display: 'flex' }}>
        <img src={proj13_11} alt="Image 1" style={{ width: '33%', height: 'auto' }} />
        <img src={proj13_12} alt="Image 2" style={{ width: '33%', height: 'auto' }} />
        <img src={proj13_13} alt="Image 3" style={{ width: '33%', height: 'auto' }} />
      </div>
<br>
</br>
The Auto-covariance function (ACVF) measures the covariance between two samples of a time-series. It depends on the time lag between the samples for stationary processes. It is a crucial tool for analyzing univariate linear time-series data.<br>
</br><br>
</br>
Mathematical Models that express the predictable part of the present conditions of a process as only a function of its past conditions are termed as Auto-regressive models. It is natural to believe that the present state of the process is a consequence of its past. The effects of past on present can be linear/non-linear/or time-varying/ time-invariant. AR models are suited to processes with exponentially decaying ACF. An autoregressive process of order p, denoted by AR(p).

<br></br><br></br>Yt = ϕ1Yt−1 + ϕ2Yt−2 + · · · + ϕpYt−p + et  <br></br><br></br>
Where <br></br><br></br>"et" is a zero mean white noise process with var(et) = σe2<br></br><br></br>
AR(1) process: Yt = ϕYt−1 + et;    

      <div style={{ display: 'flex' }}>
        <img src={proj13_21} alt="Image 4" style={{ width: '33%', height: 'auto' }} />
        <img src={proj13_22} alt="Image 5" style={{ width: '33%', height: 'auto' }} />
        <img src={proj13_23} alt="Image 6" style={{ width: '33%', height: 'auto' }} />
      </div>
      <br></br>	 <br></br>	
      <div className="tab1111">

      <table>
        <tr>
            <th>Pressure_Range</th>
            <th>Operating_Pressure </th>
            <th>Model </th>
            <th>RMSE </th>
        </tr>
        <tr>
            <td>1 to 9 kg/cm^2</td>
            <td>5 kg/cm^2</td>
            <td>AR </td>
            <td>0.002  </td>
        </tr>
        <tr>
            <td>1 to 4 kg/cm^2</td>
            <td>2 kg/cm^2</td>
            <td>AR </td>
            <td>0.002  </td>
        </tr>
       
    </table>
    </div>
    <h4>
        Conclusion
    </h4>
    Probability density function shows all readings are under  +/- Standard Deviation of the pressure sensor signal. Auto correlation function shows all samples of the signals are closely related. Exponentially decaying autocorrelation function shows we can model the sensor using Autoregressive model.  RMSE value for AR model is 0.002.
<br></br><br></br>
For preventive maintenance operator remove the transmitter and do calibration of the transmitter. For preventive maintenance, plant is shutdown. Most of times instruments performance is as per the expectations and calibration is not required.  We can avoid preventive scheduled maintenance for the pressure transmitter. With available data and model, it is possible to do predictive maintenance of pressure sensor. We can compare pressure sensor observation with AR model prediction, Which will helps operator to decide when to schedule the pressure sensor calibration.

    </div>
</div>

                </div>
                <br>
                </br>
                <a className='box_1'> Next Project  </a>
                <Link to="/project_8" className='box_2'>Amazon_Dashboard</Link>
            </div>
        </div>
    )
}

export default Project_4
