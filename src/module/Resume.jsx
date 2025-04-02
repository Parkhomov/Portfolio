import React, { useState, useRef, useEffect } from 'react';
import "../css/Resume.css"

function Resume() {
    const [active, setActive] = useState(false);
    const resumeRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
        if (resumeRef.current) {
            const rect = resumeRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setActive(true);
                window.removeEventListener('scroll', handleScroll);
            } else {
                setActive(false);
            }
        }
    };
      
          window.addEventListener('scroll', handleScroll);
          handleScroll();
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, []);
    return (
        <>
            <div className={`resume-container ${active ? 'active' : ''}`} ref={resumeRef}>
                <div className="cont-res">
                    <h1 className="res-title">Resume</h1>
                    <hr />
                    <h2 className="res-title-h2">Summary</h2>
                    <div className="res-sumary">
                        <p className="res-sumary-text">
                            I'm Bohdan Parkhomov, a motivated Front-End Developer specializing in HTML, CSS, JavaScript, TypeScript and React. 
                            I have hands-on experience with React, creating dynamic interfaces and integrating REST APIs.
                            I am proficient with Git, Visual Studio Code, and Chrome DevTools. Passionate about continuous learning, 
                            I've recently completed Front-End courses at EPAM.
                            Currently pursuing a Bachelor's Degree in Computer Science 
                            at Petro Mohyla Black Sea National University (graduation in 2026).
                        </p>
                    </div>
                    <h2 className="res-title-h2">Education</h2>
                    <div className="res-education">
                        <p className="res-education-text">
                            Bachelor’s Degree in Computer Science
                            Petro Mohyla Black Sea National University, Mykolaiv, Ukraine (2022 – 2026, expected)
                            Part-time (extramural) student
                        </p>
                    </div>
                </div>
                <div className="cont-res">
                    <h2 className="res-title-h2">Technical Skills</h2>
                    <div className="res-skils">
                        <ul className="res-skil-text">
                            <li>HTML, CSS (SASS/SCSS)</li>
                            <li>JavaScript (ES6+), TypeScript</li>
                            <li>React (Hooks, React Router)</li>
                            <li>REST APIs integration</li>
                            <li>Git, GitHub </li>
                            <li> Visual Studio Code, Chrome DevTools </li>
                        </ul>
                    </div>
                    <h2 className="res-title-h2">Professional Development</h2>
                    <div className="res-prof">                        
                        <p className="res-prof-text">
                        Completed EPAM Front-End Development courses.
                        Actively engaged in self-study for continuous skill improvement
                        </p>
                    </div>
                    <h2 className="res-title-h2">Languages</h2>
                    <div className="res-lang">
                        <ul className="res-lang-text">
                            <li>Ukrainian: Native</li>
                            <li>English: Pre-Intermediate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;