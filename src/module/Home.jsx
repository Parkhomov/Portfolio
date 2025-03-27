import React, { useState, useEffect } from 'react';
import "../css/Home.css";

function Home() {
    const [subtitle, setSubtitle] = useState('');
    const text = " I'm a Front-end developer";
    let currentIndex = 0;

    useEffect(() => {
        const id = setInterval(() => {
            currentIndex++;
            if (currentIndex <= text.length) {
                setSubtitle(prev => prev + text[currentIndex - 1]);
            } else {
                clearInterval(id);
            }
        }, 120);
  
        return () => clearInterval(id);
    }, []);
  

    return (
        <>
            <div className="containerHome">
                <div className="text">
                    <h1>Hello, I'm Bohdan Parkhomov</h1>
                    <h1>{subtitle}</h1>
                </div>
            </div>
          
        </>
    )
}

export default Home;