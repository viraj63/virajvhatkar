import React from 'react'
import './Project_1.css'
import Plot from 'react-plotly.js';
import Group_chart from '../Graphs/Group_chart';
import Plot_2 from '../Graphs/Plot_2';
import Plot_3 from '../Graphs/Plot_3';
import Plot_4 from '../Graphs/Plot_4';
import Graph_2 from '../Graphs/Graph_2';
import { Link, useLocation } from 'react-router-dom';
function Project_11() {
    return (
        <div>
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
                        Videogames_Release_2022_Analysis

                    </h2>
                </div>


            </div>

            {/* <img src={projectimag} alt='image1' className='paten_image_1' /> */}
            <div className='project_content_101'>
                <h2>
                    Our Aim!!
                </h2>
                <strong>
                    The objective is to gain valuable insights from the Videogame dataset using Plotly in Python. By utilizing Plotly's visualization capabilities, we aim to showcase various observations and trends discovered during the analysis of the dataset.    </strong>
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
                The gaming industry is a fascinating aspect of technology due to its cultural and entertainment significance and role in driving technological progress .
                With a market size of over <strong>$200 billion</strong> in the year 2022.
                <br>
                </br>
                The current gaming competition is intensifying with microsoft's Xbox, sony's playstation, and nintendoswitch 's Switch leading the charge in console gaming.
                These platforms are pushing technological limits by delivering exceptional graphics, speed, and processing capabilities to players. <br>
                </br>  Here are a few meaningful insights into the gaming industry: <br>
                </br><br>
                </br>
                The data set about the ‘Video Games’ released in 2022 is a comprehensive collection of information
                on video games that were released in the year 2022. The objective of this notebook is to find some
                insights which can be used to obtain certain meaningful insights for the gaming industry.  <br>
                </br>
                <br>
                </br> <br>
                </br> <br>
                </br>
                <strong>Observation_1:</strong> It is evident from the above graph that most publishers in the gaming industry
                releases their games in the month of June, July, August and September and
                subsequently the release of the games decreases from October till the month of
                January.
                <br>
                </br> <br>
                </br>
                <Plot
                    data={[
                        {
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],

                            y: [57, 74, 71, 63, 83, 127, 112, 95, 110, 76, 70, 49],
                            type: 'bar',
                            name: 'Games Released per Month',
                        },
                    ]}
                    layout={{
                        width: 1300,
                        height: 600,
                        title: 'Games Released per Month',
                        xaxis: { title: 'Months' },
                        yaxis: { title: 'Total_No' },
                    }}
                />
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <strong>Visualizing the number of games that came out the day of Each month.
                </strong>    <br>
                </br>
                <br>
                </br>



                <Plot
                    data={[
                        {//JANUARY
                            x: [1, 2, 3, 4, 6, 10, 12, 13, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28],
                            y: [0, 0, 2, 2, 2, 2, 2, 8, 1, 2, 2, 9, 3, 1, 1, 6, 1, 9, 3],
                            type: 'scatter',
                            name: 'JANUARY',
                        },
                        {//FEBRUARY
                            x: [1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 22, 23, 24, 25, 28],
                            y: [2, 2, 4, 2, 1, 3, 4, 11, 5, 3, 4, 6, 1, 1, 4, 3, 12, 5, 1],
                            type: 'scatter',
                            name: 'FEBRUARY',
                        },
                        {//MARCH
                            x: [1, 3, 4, 8, 10, 11, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 29, 30, 31],
                            y: [8, 1, 2, 2, 6, 3, 1, 4, 2, 6, 3, 2, 1, 6, 6, 1, 6, 3, 8],

                            type: 'scatter',
                            name: 'MARCH',
                        },

                        {//APRIl
                            x: [1, 5, 7, 8, 11, 12, 14, 19, 20, 21, 22, 25, 26, 27, 28, 29],
                            y: [1, 4, 7, 3, 2, 2, 7, 2, 3, 9, 1, 1, 4, 3, 10, 4],
                            type: 'scatter',
                            name: 'APRIl',
                        },

                        {//MAY
                            x: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 17, 18, 19, 20, 22, 24, 25, 26, 27, 31],
                            y: [1, 1, 2, 1, 6, 1, 1, 8, 7, 5, 2, 5, 2, 14, 2, 1, 4, 4, 8, 6, 2],
                            type: 'scatter',
                            name: 'MAY',
                        },
                        {//JUNE
                            x: [1, 2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 28, 29, 30],
                            y: [6, 9, 5, 3, 2, 5, 8, 8, 2, 4, 2, 2, 13, 4, 1, 8, 1, 13, 6, 8, 2, 13],
                            type: 'scatter',
                            name: 'JUNE',
                        },
                        {//JULY
                            x: [1, 5, 6, 7, 8, 12, 13, 14, 15, 19, 20, 21, 22, 26, 27, 28, 29, 31],
                            y: [9, 2, 1, 8, 4, 9, 3, 13, 4, 5, 6, 12, 4, 2, 2, 20, 7, 1],
                            type: 'scatter',
                            name: 'JULY',
                        },


                        {//AUGUST
                            x: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 21, 23, 24, 25, 26, 30, 31],
                            y: [1, 3, 3, 9, 3, 1, 2, 3, 3, 6, 2, 2, 4, 2, 6, 4, 1, 6, 1, 11, 7, 10, 4],
                            type: 'scatter',
                            name: 'AUGUST',
                        },

                        {//SEPTEMBER
                            x: [1, 2, 6, 8, 9, 13, 15, 20, 22, 23, 26, 27, 28, 29, 30],
                            y: [5, 6, 7, 8, 3, 7, 12, 7, 13, 3, 1, 8, 2, 17, 7],
                            type: 'scatter',
                            name: 'SEPTEMBER',
                        },


                        {//OCTOBER
                            x: [4, 5, 6, 7, 11, 12, 13, 14, 15, 18, 19, 20, 21, 25, 26, 27, 28],
                            y: [2, 1, 3, 5, 3, 2, 13, 9, 1, 3, 3, 7, 3, 3, 1, 10, 7],
                            type: 'scatter',
                            name: 'OCTOBER',
                        },

                        {//NOVEMBER
                            x: [1, 2, 3, 4, 8, 9, 10, 11, 15, 17, 18, 21, 22, 23, 29, 30],
                            y: [2, 3, 6, 3, 6, 4, 7, 3, 8, 8, 6, 1, 4, 1, 3, 5],
                            type: 'scatter',
                            name: 'NOVEMBER',
                        },

                        {//DECEMBER
                            x: [1, 2, 6, 8, 9, 13, 14, 15, 16, 19, 20, 21, 22, 23, 28],
                            y: [10, 3, 3, 7, 4, 3, 2, 6, 1, 1, 1, 1, 5, 1, 1],
                            type: 'scatter',
                            name: 'DECEMBER',
                        },

                    ]}
                    layout={{
                        width: 1300,
                        height: 600,
                        title: 'Joint Bar Graph',
                        barmode: 'group',
                        xaxis: { title: 'Day of the Month' },
                        yaxis: { title: 'Value_Count Each Month Game Released' },
                        legend: { title: 'Release_Months' },

                    }}
                />

<br>
                </br>
                <br>
                </br>
                <Plot
                    data={[
                        {//JANUARY
                            x: [1, 2, 3, 4, 6, 10, 12, 13, 14, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28],
                            y: [0, 0, 2, 2, 2, 2, 2, 8, 1, 2, 2, 9, 3, 1, 1, 6, 1, 9, 3],
                            type: 'scatter',
                            xaxis: 'x1',
                            yaxis: 'y1',                  
                                      name: 'JANUARY',
                                      group:"barmode",
                        },
                        {//FEBRUARY
                            x: [1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 22, 23, 24, 25, 28],
                            y: [2, 2, 4, 2, 1, 3, 4, 11, 5, 3, 4, 6, 1, 1, 4, 3, 12, 5, 1],
                            type: 'scatter',
                            xaxis: 'x2',
                            yaxis: 'y2',
                            name: 'FEBRUARY',group:"barmode",
                        },
                        {//MARCH
                            x: [1, 3, 4, 8, 10, 11, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 29, 30, 31],
                            y: [8, 1, 2, 2, 6, 3, 1, 4, 2, 6, 3, 2, 1, 6, 6, 1, 6, 3, 8],

                            type: 'scatter',
                            xaxis: 'x3',
                            yaxis: 'y3',
                            name: 'MARCH',group:"barmode",
                        },

                        {//APRIl
                            x: [1, 5, 7, 8, 11, 12, 14, 19, 20, 21, 22, 25, 26, 27, 28, 29],
                            y: [1, 4, 7, 3, 2, 2, 7, 2, 3, 9, 1, 1, 4, 3, 10, 4],
                            type: 'scatter',
                            xaxis: 'x4',
                            yaxis: 'y4',
                            name: 'APRIl',group:"barmode",
                        },

                        {//MAY
                            x: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 17, 18, 19, 20, 22, 24, 25, 26, 27, 31],
                            y: [1, 1, 2, 1, 6, 1, 1, 8, 7, 5, 2, 5, 2, 14, 2, 1, 4, 4, 8, 6, 2],
                            type: 'scatter',
                            xaxis: 'x5',
                            yaxis: 'y5',
                            name: 'MAY',group:"barmode",
                        },
                        {//JUNE
                            x: [1, 2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 28, 29, 30],
                            y: [6, 9, 5, 3, 2, 5, 8, 8, 2, 4, 2, 2, 13, 4, 1, 8, 1, 13, 6, 8, 2, 13],
                            type: 'scatter',
                            xaxis: 'x6',
                            yaxis: 'y6',
                            name: 'JUNE',group:"barmode",
                        },
                        {//JULY
                            x: [1, 5, 6, 7, 8, 12, 13, 14, 15, 19, 20, 21, 22, 26, 27, 28, 29, 31],
                            y: [9, 2, 1, 8, 4, 9, 3, 13, 4, 5, 6, 12, 4, 2, 2, 20, 7, 1],
                            type: 'scatter',
                            xaxis: 'x7',
                            yaxis: 'y7',
                            name: 'JULY',group:"barmode",
                        },


                        {//AUGUST
                            x: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 21, 23, 24, 25, 26, 30, 31],
                            y: [1, 3, 3, 9, 3, 1, 2, 3, 3, 6, 2, 2, 4, 2, 6, 4, 1, 6, 1, 11, 7, 10, 4],
                            type: 'scatter',
                            xaxis: 'x8',
                            yaxis: 'y8',
                            name: 'AUGUST',group:"barmode",
                        },

                        {//SEPTEMBER
                            x: [1, 2, 6, 8, 9, 13, 15, 20, 22, 23, 26, 27, 28, 29, 30],
                            y: [5, 6, 7, 8, 3, 7, 12, 7, 13, 3, 1, 8, 2, 17, 7],
                            type: 'scatter',
                            xaxis: 'x9',
                            yaxis: 'y9',
                            name: 'SEPTEMBER',group:"barmode",
                        },


                        {//OCTOBER
                            x: [4, 5, 6, 7, 11, 12, 13, 14, 15, 18, 19, 20, 21, 25, 26, 27, 28],
                            y: [2, 1, 3, 5, 3, 2, 13, 9, 1, 3, 3, 7, 3, 3, 1, 10, 7],
                            type: 'scatter',
                            xaxis: 'x10',
                            yaxis: 'y10',
                            name: 'OCTOBER',group:"barmode",
                        },

                        {//NOVEMBER
                            x: [1, 2, 3, 4, 8, 9, 10, 11, 15, 17, 18, 21, 22, 23, 29, 30],
                            y: [2, 3, 6, 3, 6, 4, 7, 3, 8, 8, 6, 1, 4, 1, 3, 5],
                            type: 'scatter',
                            xaxis: 'x11',
                            yaxis: 'y11',
                            name: 'NOVEMBER',group:"barmode",
                        },

                        {//DECEMBER
                            x: [1, 2, 6, 8, 9, 13, 14, 15, 16, 19, 20, 21, 22, 23, 28],
                            y: [10, 3, 3, 7, 4, 3, 2, 6, 1, 1, 1, 1, 5, 1, 1],
                            type: 'scatter',
                            xaxis: 'x12',
                            yaxis: 'y12',
                            name: 'DECEMBER',group:"barmode",
                        },

                    ]}
                    layout={{
                        grid: { rows: 3, columns: 4, pattern: 'independent' },
                        width: 1300,
                        height: 1000,
                        title: 'SUBPLOT',
                       
                       // xaxis: { title: 'Day of the Month' },
                        //yaxis: { title: 'Value_Count Each Month Game Released' },
                        legend: { title: 'Release_Months' },
                       // xaxis1: { title: 'X Axis Title (January)' },
                       // yaxis1: { title: 'Y Axis Title (January)' },
                        //xaxis2: { title: 'X Axis Title (August)' },
                        //yaxis2: { title: 'Y Axis Title (August)' },
                        annotations: [
                            {
                              xref: 'paper',
                              yref: 'paper',
                              x: 0.115,
                              y: 1.0,
                              xanchor: 'center',
                              yanchor: 'bottom',
                              text: 'JANUARY',
                              showarrow: false,
                              font: {
                                size: 16,
                                color: 'black',
                              },
                            },

                            //
                            {
                                xref: 'paper',
                                yref: 'paper',
                                x: .370,
                                y: 1.0,
                                xanchor: 'center',
                                yanchor: 'bottom',
                                text: 'FEBRUVARY',
                                showarrow: false,
                                font: {
                                  size: 16,
                                  color: 'black',
                                },
                              },
//
{
    xref: 'paper',
    yref: 'paper',
    x: .630,
    y: 1.0,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'MARCH',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//
{
    xref: 'paper',
    yref: 'paper',
    x: .900,
    y: 1.0,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'APRIL',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//
{
    xref: 'paper',
    yref: 'paper',
    x: 0.115,
        y: 0.64,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'MAY',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

{
    xref: 'paper',
    yref: 'paper',
    x: 0.370,
        y: 0.64,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'JUNE',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

{
    xref: 'paper',
    yref: 'paper',
    x: 0.630,
        y: 0.64,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'JULY',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

{
    xref: 'paper',
    yref: 'paper',
    x: 0.900,
        y: 0.64,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'AUGUST',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//


{
    xref: 'paper',
    yref: 'paper',
    x: 0.115,
        y: 0.27,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'SEPTEMBER',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

{
    xref: 'paper',
    yref: 'paper',
    x: 0.370,
        y: 0.27,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'OCTOBER',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

{
    xref: 'paper',
    yref: 'paper',
    x: 0.630,
        y: 0.27,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'NOVEMBER',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//
{
    xref: 'paper',
    yref: 'paper',
    x: 0.90,
        y: 0.27,
    xanchor: 'center',
    yanchor: 'bottom',
    text: 'DECEMBER',
    showarrow: false,
    font: {
      size: 16,
      color: 'black',
    },
  },
//

                          ],

                    }}
                />


                <br>
                </br>
                <br>
                </br>
                <strong>Observation_3:</strong> <br>
                </br>Here we would see which platforms are the most popular in the gaming world in 
2022.<br>
                </br>
                <Plot
                        data={[
                            {
                                x: ['NS', 'Win', 'PS4', 'PS5', 'XBO', 'XSX', 'iOS', 'Mac', 'Stadia', 'Droid', 'Lin', 'Atari VCS', 'PS5WW: Win',  '[c] PS4[c]', 'Arcade', '3DS', 'EU: NS', 'JP: NS', 'PS4WW: Win', '| Droid', 'JP: PS4'],

                                y: [490, 487, 404, 317, 304, 284, 54, 50, 46, 44, 32, 4, 2, , 1, 1, 1, 1, 1, 1, 1, 1, 1],

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
                </br><br>
                </br>
It seems that Nintendo and windows have been the most popular platforms in the 
year 2022 with the greatest number of game released.<br>
                </br>
Thus, the user/customer could opt for purchasing games for the platforms Nintendo 
and windows because he can experience more number of games released for these 
platforms.<br>
                </br><br>
                </br><br>
                </br>
                <Plot
                    data={[
                        {//JANUARY
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [23, 38, 24, 34, 34, 65, 51, 44, 72, 40, 35, 30],
                            type: 'scatter',
                            name: 'NS',
                        },
                        {//FEBRUARY
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [17, 32, 29, 26, 27, 53, 43, 40, 53, 35, 23, 26],
                            type: 'scatter',
                            name: 'PS4',
                        },
                        {//MARCH
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [23, 29, 30, 27, 48, 54, 49, 64, 57, 49, 35, 22],

                            type: 'scatter',
                            name: 'Win',
                        },

                        {//APRIl
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [14, 22, 22, 14, 21, 37, 21, 41, 44, 28, 31, 22],
                            type: 'scatter',
                            name: 'PS4',
                        },

                        {//MAY
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [18, 20, 17, 16, 25, 39, 33, 34, 33, 31, 22, 16],
                            type: 'scatter',
                            name: 'XBO',
                        },
                        {//JUNE
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [18, 20, 17, 16, 25, 39, 33, 34, 33, 31, 22, 16],
                            type: 'scatter',
                            name: 'XSX',
                        },
                        {//JULY
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [5, 5, 4, 2, 9, 7, 4, 7, 3, 2, 4, 2],
                            type: 'scatter',
                            name: 'iOS',
                        },


                        {//AUGUST
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [3, 2, 3, 3, 7, 11, 4, 10, 1, 4, 2],
                            type: 'scatter',
                            name: 'Mac',
                        },

                        {//SEPTEMBER
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [4, 4, 2, 3, 5, 10, 10, 2, 3, 2, 1,0],
                            type: 'scatter',
                            name: 'Stadia',
                        },


                        {//OCTOBER
                            x: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
                            y: [4, 4, 2, 3, 5, 10, 10, 2, 3, 2, 1],
                            type: 'scatter',
                            name: 'Droid',
                        },

                       

                    ]}
                    layout={{
                        width: 1300,
                        height: 600,
                        title: '',
                        barmode: 'group',
                        xaxis: { title: 'Months' },
                        yaxis: { title: 'Value_Count Each Month Game Released' },
                        legend: { title: 'Platform(s)' },

                    }}
                />
                <br>
                </br><br>
                </br><br>
                </br>


                <strong>Observation_4:</strong> <br>
                </br>Which genres are the most popular among the 2022 releases.
<br>
                </br>
            
                
                <br>
                </br><br>
                </br><br>
                </br>
               
                <br>
                </br><br>
                </br><br>
                </br>
                
                <br>
                </br><br>
                </br><br>
                </br>
             

                <br>
                </br><br>
                </br><br>
                </br>
                
                <br>
                </br><br>
                </br><br>
                </br>
                

                <br>
                </br><br>
                </br><br>
                </br>

            
                
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
</br>Right now the work is under progress but for the project details you could go through the <a href={require("../../pages/Projects/Layoff_Kaggle1.pdf")}>PDF</a> and the report that is Publieshed on <a href='https://www.linkedin.com/posts/viraj-vhatkar_layoff-trends-since-covid-activity-7023747850031235073--FMJ?utm_source=share&utm_medium=member_desktop'> Linkedin</a>
*/}<br>
                </br><br>
                </br><br>
                </br>
                For this page Im trying to integrate React js,Django, SQI lite  for Plotly, D3  visualtionation.


            </div>
        </div>
    )
}

export default Project_11
