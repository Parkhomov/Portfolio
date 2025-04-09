import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFileAlt,
  faImages,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
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
        <div className={`overlay-menu ${menuOpen ? 'active' : ''}`}>
          <div className="overlay-menu-information">
            <img className="overlay-menu-information-img" src="/forburger.jpg" alt="web-development image" />
            <p>Bohdan Parkhomov</p>
            <div className="overlay-menu-information-social">
              <a target="_blank" href="https://www.linkedin.com/in/bohdan-parkhomov-dev"><img src="/Portfolio/linkedin.png" alt="linkedin" /></a>
              <a target="_blank" href="https://github.com/Parkhomov"><img src="/Portfolio/github.png" alt="github" /></a>
              <a target="_blank" href="https://t.me/Noname21145"><img src="/Portfolio/telegram.png" alt="telegram" /></a>
              <a target="_blank" href="https://www.instagram.com/bogdanparkhomov"><img src="/Portfolio/instagram.png" alt="instagram" /></a>
            </div>
          </div>
          <nav>  
            <ul>
                <li><button className="navigate-button" onClick={() => scrollToSection(home)}><FontAwesomeIcon className="padd" icon={faHome} />Home</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(about)}><FontAwesomeIcon className="padd" icon={faUser} />About</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(resume)}> <FontAwesomeIcon className="padd" icon={faFileAlt} />Resume</button></li>
                <li><button className="navigate-button" onClick={() => scrollToSection(projects)}><FontAwesomeIcon className="padd" icon={faImages} />Projects</button></li>
                {/* <li><button className="navigate-button" onClick={() => scrollToSection(contact)}>   <FontAwesomeIcon className="padd" icon={faEnvelope} />Contact</button></li> */}
            </ul>
          </nav>
        </div>
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
        {/* <div ref={contact}>
          <Contact />
        </div> */}
        </>
    )
}

export default App;