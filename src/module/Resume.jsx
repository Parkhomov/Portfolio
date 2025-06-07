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
                            Results-driven Front-End Developer with six months of experience building and 
                            optimizing booking platforms using React and TypeScript. Skilled in crafting responsive, 
                            accessible interfaces, integrating REST APIs, and improving load times through code-splitting and lazy loading. 
                            Committed to delivering seamless user experiences and continuously growing technical expertise.
                        </p>
                    </div>
                    <h2 className="res-title-h2">Experience</h2>
                    <div className="res-experince">
                        <p className="res-experince-text">
                           Front-End Developer | Your Price Booking <br />
                            February 2025 – Present, Remote, Ukraine <br />
                            - Developed and maintained booking components using React and TypeScript. <br />
                            - Integrated RESTful APIs for booking data and payment methods. <br />
                            - Ensured responsive design with SCSS and CSS best practices. <br />
                            - Collaborated with design team to implement smooth animations and improve UX <br />
                        </p>
                    </div>
                    <h2 className="res-title-h2">Education</h2>
                    <div className="res-education">
                        <p className="res-education-text">
                            Bachelor’s Degree in Computer Science
                            Petro Mohyla Black Sea National University, Mykolaiv, Ukraine (2022 – 2026, expected)
                            Part-time (extramural) student.
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