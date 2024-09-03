import React, { useRef, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Slider.css'

library.add(faAngleLeft, faAngleRight);

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const slideText1 = useRef(null);
  const [slideCounter, setSlideCounter] = React.useState(0);

  const goToPreviousSlide = () => {
    if (slideCounter === 0) {
      setSlideCounter(images.length);
    }
    setSlideCounter(slideCounter - 1);
  };

  const goToNextSlide = () => {
    setSlideCounter(slideCounter + 1);
  };

  const handleSlide = (slide) => {
    slideImage.current.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ), url(${images[slide].src})`;
    slideText.current.innerHTML = images[slide].text;
    slideText1.current.innerHTML = images[slide].text1;
  };

  useEffect(() => {
    handleSlide(slideCounter);

    const interval = setInterval(() => {
      setSlideCounter((prevSlideCounter) => {
        if (prevSlideCounter === images.length - 1) {
          return 0;
        } else {
          return prevSlideCounter + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCounter]);

  return (
    <div className="slider">
      <div className="slider__inner">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <i className="fas fa-angle-left"></i>
        </button>
        <div className="slider__content" ref={slideImage}></div>
        <div className="slider_text" style={{ position: "absolute", top: "55%", transform: "translateY(-70%)" }}>
        <div className="slider__text" ref={slideText}>
          {images[slideCounter].text}
        </div>
        <div className="slider__text1" ref={slideText1}>
          {images[slideCounter].text1}
        </div>
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <i className="fas fa-angle-right"></i>
        </button>
        <div className="slider__dots">
        {images.map((images, index) => (
          <button
            key={index}
            className={`slider__dot ${slideCounter === index ? 'active' : ''}`}
            onClick={() => setSlideCounter(index)}
          ></button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Slider;