import React, { useState, useRef, useEffect } from 'react';
import "../css/Projects.css"

function Projects() {
    const [active, setActive] = useState(false);
        const projectsRef = useRef(null);
        
        useEffect(() => {
            const handleScroll = () => {
            if (projectsRef.current) {
                const rect = projectsRef.current.getBoundingClientRect();
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
            <div className={`projects-container ${active ? 'active' : ''}`} ref={projectsRef}>
                <div className="financeNotebook-container">
                    <h1 className="projects-title">Projects</h1>
                    <hr className="dsa" />
                    <h2 className="res-title-h2">Finance Notebook </h2>
                    <ul>
                        <li>Link: <a target="_blank" href="https://parkhomov.github.io/FinanceNotebook/"><img className="project-image" src="/Portfolio/finnotebook.svg" alt="https://parkhomov.github.io/FinanceNotebook/" /></a></li>
                        <li>Description: 
                            <p>• Developed a responsive web application for tracking personal finances. The app allows users 
                                to record their income and expenses, categorizing them into predefined categories, 
                                and view financial statistics.
                            </p>
                        </li>
                        <li>Key Features: 
                            <p>• Add and manage income and expenses with predefined categories.
                                • View statistics on the total income and expenses.
                                • Switch between different chart types dynamically without reloading the page.
                                • Clear all financial data with a single action.
                                • Data persistence using LocalStorage.
                            </p>
                        </li>
                        <li>Technologies Used: </li>
                        <li><p>• HTML/CSS/JavaScript: Core structure, styling, and functionality.</p></li>
                        <li><p>• Chart.js: Interactive charts for visualizing financial data.</p></li>
                    </ul>
                </div>
                <div className="movieExplorer-container">
                <h2 className="res-title-h2">Movie Explorer </h2>
                    <ul>
                        <li>Link: <a target="_blank" href="https://parkhomov.github.io/MovieExplorer/"><img className="project-image" src="/Portfolio/icon.svg" alt="https://parkhomov.github.io/MovieExplorer/" /></a></li>
                        <li>Description: 
                            <p>• Developed an interactive web application for searching movies using the OMDb API for movie information and 
                                the YouTube API for displaying trailers. The app allows users to search for movies by title, view basic information 
                                (poster, release year, title), and access detailed movie information (plot summary, cast, ratings), along with trailers. 
                                I optimized the website for seamless use on both desktop and mobile devices, ensuring a responsive and user-friendly interface.
                            </p>
                        </li>
                        <li>Key Features: 
                            <p>•	Real-time movie search using the OMDb API
                                •	Display of search results as movie cards
                                •	Viewing movie trailers through the YouTube API
                                •	Detailed movie information on a separate page
                                •	Navigation between pages using React Router
                                •	Responsive design for an enhanced user experience on various devices

                            </p>
                        </li>
                        <li>Technologies Used: </li>
                        <li><p>• React, React Router, JavaScript (ES6+), CSS </p></li>
                        <li><p>• REST APIs (OMDb API, YouTube API), Fetch API</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects;