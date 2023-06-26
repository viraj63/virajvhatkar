import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; /*
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


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
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
        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
