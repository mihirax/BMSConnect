import React from "react";
import "./Dots.css";

const Dots = ({ slideCounter, images }) => {
  const dots = [];

  for (let i = 0; i < images.length; i++) {
    dots.push(
      <div
        key={i}
        className={`slider__dot${slideCounter === i ? " slider__dot--active" : ""}`}
        onClick={() => {
          console.log(i);
        }}
      ></div>
    );
  }

  return <div className="slider__dots">{dots}</div>;
};

export default Dots;