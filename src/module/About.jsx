import React, { useState, useRef, useEffect } from 'react';
import "../css/About.css";

function About() {
    const [active, setActive] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (aboutRef.current) {
          const rect = aboutRef.current.getBoundingClientRect();
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
            <div className={`containerAbout ${active ? 'active' : ''}`} ref={aboutRef}>
                <div className="cont">
                    <h1 className="cont-about">About</h1>
                    <hr />
                    <p className="about-start">I’m Bohdan Parkhomov, a specialist in front-end development. 
                        I work with modern frameworks and tools such as React to build user-friendly, 
                        fast, and visually appealing web solutions. My expertise includes creating dynamic user interfaces, 
                        responsive coding, and optimizing performance. I love projects where I can combine creativity with 
                        technical proficiency.
                    </p>
                    <div className="about-info-container">
                        <img className="about-img" src="/Portfolio/forburger.jpg" alt="" />
                        <div className="about-info-1">
                            <ul>
                                <li>Birthday: <p>14 February 2005</p></li>
                                <li>Phone: <p>+380930443489</p></li>
                                <li>City: <p>Mykolaiv, Ukraine</p></li>
                            </ul>
                        </div>
                        <div className="about-info-2">
                            <ul>
                                <li>Age: <p>20</p></li>
                                <li>Education: <p>Bachelor's student, graduating in 2026</p></li>
                                <li>Email: <p>parkhomov21@gmail.com</p></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="cont-about">Future Goals and Plans</h1>
                            <hr />
                            <p className="about-info-future"> 
                            I’m currently focused on advancing my frontend development skills, 
                            particularly in React, React Hooks, and crafting visually appealing, 
                            responsive layouts. I’m also exploring animation techniques to enhance 
                            user experiences. Looking ahead, I plan to work on projects that 
                            merge beautiful design with innovative technical solutions. 
                            By continually expanding my expertise in all aspects of front-end 
                            development, I aim to deliver high-quality results and stay at the 
                            forefront of emerging trends.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About;