import React from 'react';

const Mc = ({ question, options, onAnswer }) => {
    const handleDotClick = (optionIndex) => {
        onAnswer(optionIndex);
      };
    
      return (
        <div>
          <h3>{question}</h3>
          <div className="options">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${selectedAnswers[index] ? 'selected' : ''}`}
              >
                <span className="option">{option}</span>
              </button>
            ))}
          </div>
        </div>
      );
    };
    
export default Mc;