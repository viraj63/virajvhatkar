
import React, { useState } from 'react';
import Virajimag from '../../Images/viraj_2.png';
import './About.css';
import Faq from "react-faq-component";

const data = {

    title: "",
    rows: [
        {
            title: "What drives you to create?",
            content: `I aspire to be a persona that creates a lasting impact and motivates others to advance and thrive.By integrating interdisciplinary thought systems, such as Data science, behavioral psychology, and philosophy, I aim to generate scalable impact that fuels positive transformation in our world.`,
        },
        {
            title: "What is your end goal?",
            content:
                "At the end of the day I want to see myself that I have learned something new and made things happen for betterment than yesterday",
        },
        {
            title: "What are you exactly studying",
            content: `As a Data Science Major student with a background in Instrumentation and Control, I have a unique advantage to contribute to diverse industries. By integrating both fields, I aim to make significant contributions in areas such as automation, IoT, predictive maintenance, and advanced analytics. I am excited about the potential to apply my interdisciplinary knowledge to drive innovation, optimize processes, and unlock valuable insights in these industries.`,
        },
       /* {
            title: "What is the package version",
            content: '',
        }, */
    ],
};
const styles = {
     bgColor: 'transparent',
    titleTextColor: "blue",
    //rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    rowTitleTextSize: '30px',
    rowContentTextSize: "21px",
fontFamily:  "Helvetica Neue",
fontWeight: 400,
transitionDuration:"0.8s",
timingFunc:'ease',
};

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};


const About = () => {
  /*
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
    {
      question: 'How can I apply CSS to React components in coding?',
      answer: 'In React.js, you can apply CSS to components using different approaches...',
    },
    // Add more FAQ items here...
  ]; */


    return (

        
        <div className='about' >

            <div className='log'>
                <h1>
                    Viraj Vhatkar
                </h1>
            </div>

            <div className='combine_image'>
                
                 <div className=' second_third'>
                    <div className='second'>
                        <h2>About</h2>
                        <p>As a graduate student specializing in Data Science, I am deeply passionate about the fields of Machine Learning, Deep Learning, and Data Visualization. My expertise in these areas, combined with my dedication to problem-solving, drives me to apply my skills to tackle real-world challenges in the data science field. I am constantly seeking opportunities to expand my knowledge and expertise, and I am committed to making a positive impact by developing innovative technologies that would make a difference.
                            <br>
                            </br>
                            <br>
                            </br>
                            I hold a Bachelor's degree in Instrumentation & Control and have extensive experience in the field of the Internet of Things (IoT). Through my projects, I have gained knowledge of how data can be collected from IoT devices and visualized in real-time on a platform, which can play a crucial role in enhancing the control and monitoring of machinery in various industries.
                            <br>
                            </br>
                            <br>
                            </br>
                            I have achieved accomplishments that includes filing for two patents and successfully obtaining one of them. During my final year of college, I completed two internships, one in the field of IoT and the other in Patent Filing, which further strengthened my knowledge and skills.
                            <br>
                            </br>
                            <br>
                            </br>
                            My hobbies include cycling, hiking, walking and reading which ultimately help me to relax and recharge myself. These hobbies not only provide me with a healthy outlet for stress but also help me to maintain a well-balanced lifestyle. </p>
                    </div>

                    <div className='third'>
                        <h3>Technical Skills ⟶ </h3>
                        <p>
                            <p>

                            </p>
                            <p><b>Programming Languages :</b>  Python, C, C++, ReactJS, R, Matlab, Java</p>
                            <p><b>Visualization Tools :</b> Tableau, R studio, Jupyter Notebook, Power Bi, Matplotlib, Seaborn, Plotly</p>
                            <p><b>ML Framework/Libraries :</b> Tensorflow, PyTorch, Keras, Pandas, Numpy, Scikit-Learn</p>
                            <p><b>Programming Tools :</b> Vs Code, Kaggle, Jupyter Notebook, Eclipse, Microsoft Excel, MySQL</p>
                            <p><b>Web Development:</b> Html,Javascript, React, Node  </p>

                            <a href="https://www.linkedin.com/in/viraj-vhatkar">more ➜</a>
                        </p>

                    </div>
                </div>
                 
                 <div className='im'>                
                <img src={Virajimag} alt='image1' className='image1_1' />
               
               
                </div>

                
            </div>
          
            <div className="faq-page">
            <h1 className='heading'>FAQs</h1>
            <div className="faq-section">  
               <Faq data={data} styles={styles} config={config}  className="faq1"/>
             </div>
         
            </div>

                
        </div>


    
         
    )
}

export default About