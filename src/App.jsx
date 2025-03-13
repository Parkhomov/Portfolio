import React, { useState, useRef } from 'react';
import Home from "./module/Home.jsx";
import About from './module/About.jsx';
import Resume from './module/Resume.jsx';
import Projects from './module/Projects.jsx';
import Contact from './module/Contact.jsx';
import './App.css'


function App() {
    const[menuOpen, setMenuOpen] = useState(false);
    const home = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);
    const resume = useRef(null);
    //the function for menu button open
    const handleToggleMenu = () =>{
        setMenuOpen((prev) => !prev);
    }
    //use the scroll function to scroll to the module
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
   
    return (
        <>
        <button className='menu-button' onClick={handleToggleMenu}>
          <span className={`burger-button ${menuOpen ? 'active' : ''}`}></span>
        </button>
        <nav className={`overlay-menu ${menuOpen ? 'active' : ''}`}>
            
            <ul>
                <li><button className="navigate-button" onClick={() => scrollToSection(home)}>Home</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(about)}>About</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(resume)}>Resume</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(projects)}>Projects</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(contact)}>Contact</button></li>
            </ul>
        </nav>
        <div ref={home}>
          <Home />
        </div>
        <div ref={about}>
          <About />
        </div>
        <div ref={resume}>
          <Resume />
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
        </>
    )
}

export default App;