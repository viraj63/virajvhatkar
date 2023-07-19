import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 /*
If you have multiple pages you need to use the above line react-router-dom
*/
import React from 'react';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Imagin from './pages/About/Imagin';
import Project_1 from './pages/Projects/Project_1';
import Project_2 from './pages/Projects/Project_2';
import Project_3 from './pages/Projects/Project_3';
import Project_4 from './pages/Projects/Project_4';
import Project_5 from './pages/Projects/Project_5';
import Project_6 from './pages/Projects/Project_6';
import Project_7 from './pages/Projects/Project_7';
import Project_8 from './pages/Projects/Project_8';
import Project_9 from './pages/Projects/Project_9';
import Project_10 from './pages/Projects/Project_10';
import Project_11 from './pages/Projects/Project_11';


import Tab_em_1 from './pages/Projects/Tab_em_1';
import Group_chart from './pages/Graphs/Group_chart';
import Plot_2 from './pages/Graphs/Plot_2';
import Plot_3 from './pages/Graphs/Plot_3';
import Plot_4 from './pages/Graphs/Plot_4';


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />      
          <Route path="/experience" element={<Experience />} />
          <Route path="/About" element={<About />} />
          <Route path="/Imagin" element={<Imagin />} />
          <Route path="/project_1" element={<Project_1 />} />
          <Route path="/project_2" element={<Project_2 />} />
          <Route path="/project_3" element={<Project_3 />} />
          <Route path="/project_4" element={<Project_4 />} />
          <Route path="/project_5" element={<Project_5 />} />
          <Route path="/project_6" element={<Project_6 />} />
          <Route path="/project_7" element={<Project_7 />} />
          <Route path="/project_8" element={<Project_8 />} />
          <Route path="/project_9" element={<Project_9 />} />
          <Route path="/project_10" element={<Project_10 />} />
          <Route path="/project_11" element={<Project_11 />} />

          <Route path="/group_chart" element={<Group_chart />} />
          <Route path="/plot_2" element={<Plot_2 />} />
          <Route path="/plot_3" element={<Plot_3 />} />
          <Route path="/plot_4" element={<Plot_4 />} />
        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;


