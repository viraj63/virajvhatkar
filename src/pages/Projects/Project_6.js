import React from 'react'
import './Project_1.css'
import Plot from 'react-plotly.js';
import Group_chart from '../Graphs/Group_chart';
import Plot_2 from '../Graphs/Plot_2';
import Plot_3 from '../Graphs/Plot_3';
import Plot_4 from '../Graphs/Plot_4';
import Graph_2 from '../Graphs/Graph_2';
import { Link, useLocation } from 'react-router-dom';

function Project_6() {
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
        </div>



    </div>

    <div className='project_name'>
        <h2>
            Lay_off_Trend
        </h2>
    </div>


</div>

{/* <img src={projectimag} alt='image1' className='paten_image_1' /> */}
<div className='project_content_101'>
    <h2>
        Our Aim!!
    </h2>
    <strong>
        To draw insight using Plotly(Python) that shows which sectors, and cities where mass layoffs have happened from 2020.
    </strong>
    <br>
    </br>
    <br>
    </br>
    {/* <img src={patentimg} alt='image1' className='project_image_1' /> 
     <h2>
        The Science Behind it!
    </h2>*/}

    
  
    <br>
    </br>
    The COVID-19 pandemic has resulted in widespread economic disruption, leading to a significant 
increase in layoffs across many industries. Many companies have to reduce their workforce due to 
decreased demand for goods and services, supply chain disruption, and closure of non-essential 
businesses.   <br>
    </br>   <br>
    </br>
Governments has also implemented measures such as mandatory quarantines and social distancing that 
have further access exacerbated the economic impact of the pandemic. As a result, many people have 
lost their jobs or experienced reduced hours or pay.   <br>
    </br>
    <br>
    </br>
    <br>
    </br>
                    <Plot
                        data={[
                            {
                                x: ['Meta', 'Amazon', 'Amazon', 'Salesforce', 'Booking.com', 'Cisco', 'Twitter', 'Uber', 'Better.com', 'Uber', 'Groupon', 'Peloton'],
                                y: [11000.0, 10000.0, 8000.0, 8000.0, 4375.0, 4100.0, 3700.0, 3700.0, 3000.0, 3000.0, 2800.0, 2800.0],
                                type: 'bar',
                                name: 'Total Laid Off',
                            },
                        ]}
                        layout={{
                            width: 1300,
                            height: 600,
                            title: 'Top companies with highest laid off Since Covid-19',
                            xaxis: { title: 'Company' },
                            yaxis: { title: 'Total Laid Off' },
                        }}
                    />
<br>
    </br>
    <br>
    </br>
    <br>
    </br>
  <strong>Sector Wise Layoff by Each Industry</strong>    <br>
    </br>
    <br>
    </br>
The COVID-19 pandemic has had a significant impact on many different sectors of the economy and the 
extent of layoffs oh has varied depending on the specific industry some of the sectors that have been 
particularly hard hit include:<br>
    </br>
    <br>
    </br>

    <Plot
      data={[
        {
          x: ['Finance', 'Healthcare', 'Retail', 'Food', 'Transportation', 'Real Estate', 'Crypto', 'Other', 'Marketing', 'Education', 'Consumer', 'Travel', 'Media', 'Data', 'HR', 'Security', 'Product', 'Infrastructure', 'Recruiting', 'Fitness', 'Logistics', 'Support', 'Construction', 'Sales', 'Aerospace', 'Legal', 'Hardware', 'Energy', '0', 'Manufacturing'],
          y: [53.5550, 39.7400, 38.3100, 32.5150, 26.4740, 25.2800, 25.1800, 22.0500, 21.3350, 21.3200, 20.7900, 16.3600, 15.6300, 10.5900, 9.7500, 9.4900, 7.6000, 7.4900, 7.0300, 6.8500, 5.6200, 4.7300, 2.9400, 2.4285, 2.2600, 2.1000, 1.9500, 1.5000, 0.3000, 0.2500],
          type: 'bar',
          name: 'Percentage Laid Off',
        },
        {
          x: ['Finance', 'Healthcare', 'Retail', 'Food', 'Transportation', 'Real Estate', 'Crypto', 'Other', 'Marketing', 'Education', 'Consumer', 'Travel', 'Media', 'Data', 'HR', 'Security', 'Product', 'Infrastructure', 'Recruiting', 'Fitness', 'Logistics', 'Support', 'Construction', 'Sales', 'Aerospace', 'Legal', 'Hardware', 'Energy', '0', 'Manufacturing'],
          y: [30629.0, 27674.0, 54825.0, 33962.0, 37692.0, 18326.0, 10785.0, 39308.0, 10478.0, 14169.0, 56340.0, 17159.0, 5869.0, 5899.0, 5899.0, 6770.0, 1233.0, 5875.0, 2890.0, 8898.0, 4026.0, 3523.0, 3863.0, 13216.0, 661.0, 836.0, 25208.0, 802.0, 42.0, 158.0],
          type: 'bar',
          name: 'Total Laid Off',
        },
      ]}
      layout={{
        width: 1300,
        height: 600,
        title: 'Joint Bar Graph',
        barmode: 'group',
        xaxis: { title: 'Industry' },
        yaxis: { title: 'Percentage/Total Laid Off' },
      }}
    />

<br>
    </br>
    <br>
    </br>

    <strong>• Retail</strong>: Many physical retail stores have had to close or reduce their hours due to lockdown and 
social distancing measures, which has led to a significant number of layoffs up to <u>33.12% i.e. 
38.579k(in thousand)</u> in the retail sector.<br>
    </br><br>
    </br>
    <strong>• Transportation</strong>: The transportation sector has been significantly impacted by <u>19.454%
i.e.31.184k(in thousand)</u> from the COVID-19 pandemic with many companies experiencing a 
decline in demand and revenue resulting in layoffs. With lockdowns and social distancing 
measures in places many people have been working from home resulting in decline in ridership 
on public transportation which led to a decrease in revenue for public transit systems. Because 
of Disruption in global supply chains which has led to slowdowns or closure for many 
manufacturing operations as a result the demand for logistic services has decreased and 
companies had to layoff its employees. For trucking the decline in manufacturing and retail 
activity led to a decrease for the demand of trucking services resulting in the reduction of the 
workforce in trucking companies. For ridesharing sector because of lockdown and quarantine 
measures the demand for ride sharing services drastically decreased thus companies like Uber, 
Ola and other companies started to reduce the number of drivers and its employees.<br>
    </br><br>
    </br>
    <strong>• Tourism and hospitality</strong>: With travel restrictions and a decrease in consumer demand, many 
hotels, resorts, and restaurants have had to close or significantly reduce their operations. This 
has led to many layoffs up to  <u>15.05% i.e. 19.584k(in Thousand)</u>in these industries.<br>
    </br><br>
    </br>
    <strong>• Healthcare</strong>: While healthcare workers have been in high demand during the pandemic, certain 
areas of the healthcare industry such as elective procedures has seen a decrease in demand and 
thus layoffs. The decline in demand for certain medical devices such as those used in elective 
surgeries resulting in reduction in revenue and thus layoffs up to <u>31% i.e. 18.216k(in thousand)</u>
in various medical device companies.<br>
    </br><br>
    </br>

    <strong>• Real estate</strong>: The pandemic has resulted in a decline in demand for housing, commercial, real 
estate, for property management services and also a decline in demand for new real estate 
developments because of this people have been hesitant to buy or rent homes due to economic 
uncertainty .Many businesses have closed or reduced their operations due to lockdowns and 
social distancing measures this has led to a reduction in the number of transactions thus layoffs 
up to <u>24.045% i.e 16.825k(in thousand)</u>in the in these real estate sector
The Most affected sectors been Consumer, Retail, Transportation, Food, Travel and etc.
And the Trend continues for Retail, Consumer and Sales.
<br>
    </br><br>
    </br><br>
    </br>
<strong>The Most affected sectors been Consumer, Retail, Transportation, Food, Travel and etc.
And the Trend continues for Retail, Consumer and Sales.</strong>

<br>
    </br><br>
    </br><br>
    </br>

 

<br>
    </br><br>
    </br><br>
    </br>
<Group_chart/>
<br>
    </br><br>
    </br><br>
    </br>
<strong >Here Is a pie Diagram Showing the % of Employee been Laid-off By Year:
2022 been the Highest followed by 2020.</strong>
<br>
    </br><br>
    </br><br>
    </br>
<Plot_2/>
<br>
    </br><br>
    </br><br>
    </br>
<strong >In United States alone SFO has been affected the most by the Layoff and Outside USA Bengaluru,
INDIA has been affected the most.</strong>

<br>
    </br><br>
    </br><br>
    </br>
<Plot_3/>
<br>
    </br><br>
    </br><br>
    </br>
<Plot_4/>

<br>
    </br><br>
    </br><br>
    </br>

The impact of COVID-19 on the US consumer, retail and transportation market has been significant. The
pandemic has resulted in widespread layoffs and closures of businesses, causing a sharp decline in
consumer spending.<br>
    </br><br>
    </br>
Retail sales have dropped significantly as people have been forced to stay home and avoid non-essential
shopping. Many retailers have had to close their doors, and those that have remained open have seen a
decline in foot traffic and sales. OK online sales have been increased, but they have not been enough to
make up for the losses in brick-and-mortar sales.<br>
    </br><br>
    </br>
Transportation has also been affected by the pandemic. Air travel decrease dramatically many airlines
have had to cut flights and lay off employees. The decline in business travel has also affected the hotel
and restaurant industries.<br>
    </br><br>
    </br>
The pandemic has had an impact on the logistics and supply chain industries. The closure of factories
and disruption of global trade has caused delays and shortages in the supply of goods. This has led to
increased costs and difficulty in getting products to consumers.<br>
    </br><br>
    </br>
Overall, the pandemic has had a significant impact on the US consumer, retail and transportation market
resulting in widespread layoffs and closures of businesses. It will take time for the market to recover,
and it is certain when consumer spending will return to pre pandemic levels.<br>
    </br><br>
    </br>
For the rest of the world transportation, finance call mom travel, food, education, retail, consumer has
been affected for Layoffs.<br>
    </br><br>
    </br>
    <Graph_2/>
    { /*<video src={video1} width="600" height="300" controls="controls" autoplay="true" className='vi_1' />


   <Plot
      data={[
        {


          labels: ['Netflix', 'Uber', 'WeWork', 'Bytedance', 'Meta', 'Tesla', 'Twitter', 'Sea', 'Delivery Hero'],
          values: [487600.0 / 4, 123500.0 / 5, 21750.0, 16800.0, 26000.0, 20200.0, 18600.0, 17200.0 / 2, 16600.0 / 2],
          type: 'pie',
          hoverinfo: 'label+value', // Show label and value on hover
          textinfo: 'percent',
          textposition: 'inside',
          marker: {
            colors: ['red', 'black', 'green', 'yellow', 'blue', 'white', 'mint', 'magenta', 'gray'],
          },
        },
      ]}
      layout={{
        width: 800,
        height: 600,
        title: 'Pie Chart',
      }}

    />  
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
*/}

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
*/}<br>
</br><br>
</br><br>
</br>
    For this page Im trying to integrate React js, Django, SQIlite for Plotly, D3 visualtionation.Right now the work is under progress but for the project details you could go through the <a href={require("../../pages/Projects/Layoff_Kaggle1.pdf")}>PDF</a> and the report that is Publieshed on <a href='https://www.linkedin.com/posts/viraj-vhatkar_layoff-trends-since-covid-activity-7023747850031235073--FMJ?utm_source=share&utm_medium=member_desktop'> Linkedin</a>   


</div>


<br>
</br>

<a className='box_1'> Next Project  </a>


<Link to="/project_5" className='box_2'>Object Counter Using IR</Link>






</div>

        
        </div>
    )
}

export default Project_6


