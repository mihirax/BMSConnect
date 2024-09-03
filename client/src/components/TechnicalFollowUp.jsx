import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref.css'; 

const TechnicalFollowUp = () => {
  const navigate = useNavigate();
  const [selectedOptions] = useState([]);



  const options = [
    { id: 1, text: 'CODING', imageUrl: './assets/codingg.jpg',path:'/coding' },
    { id: 2, text: 'BUSINESS', imageUrl: './assets/business.jpeg.jpg',path:'/business' },
    { id: 3, text: 'ROBOTICS', imageUrl: './assets/robotics.png' ,path:'/robotics'},
    
  ];
  const handleOptionClick = (option) => {
    navigate(option.path);
  };

  return (
    <div className="question-container">
      <h2>What type of technical clubs are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
            <img src={option.imageUrl} alt={`Option ${option.id}`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
      <div className='submit1-container'>
        <button onClick={() => navigate('/preferences')}>
          Back 
        </button>
      </div>
    </div>
    
  );
};

export default TechnicalFollowUp;