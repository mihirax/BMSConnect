import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % 3); // Change 3 to the number of slides you have
        }, 2000); // Change 2000 to the interval you desire
        return () => clearInterval(interval);
    }, []);

    const plusSlides = (n) => {
        setSlideIndex(prevIndex => (prevIndex + n + 3) % 3); // Change 3 to the number of slides you have
    };

    return (
        <div className="slideshow-container">
            <div className={slideIndex === 0 ? "slides fade" : "slides"}>
                <img src="/assets/running-man.jpg" alt="Image 1" />
            </div>
            <div className={slideIndex === 1 ? "slides fade" : "slides"}>
                <img src="/assets/running-man.jpg" alt="Image 2" />
            </div>
            <div className={slideIndex === 2 ? "slides fade" : "slides"}>
                <img src="/assets/running-man.jpg" alt="Image 3" />
            </div>
            {/* Navigation Buttons for the Slideshow */}
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
    );
};

export default Landing;

