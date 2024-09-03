import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref1.css'; 

const SportsFollowUp = () => {
  const navigate = useNavigate();
  const [selectedOptions] = useState([]);



  const options = [
    { id: 1, text: 'INDOOR', imageUrl: './assets/indoor.jpg',path:'/indoor' },
    { id: 2, text: 'OUTDOOR', imageUrl: './assets/outdoor.jpeg.jpg',path:'/outdoor' },
    { id: 3, text: 'YOGA', imageUrl: './assets/yoga.jpeg.jpg',path:'/yoga' },
  ];
  const handleOptionClick = (option) => {
    navigate(option.path);
  };

  return (
    <div className="question-container">
      <h2>What type of college clubs are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
            <img src={option.imageUrl} alt={`Option ${option.id}`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
      <div className='submit1-container'>
        <button className='s' onClick={() => navigate('/preferences')}>
         Back
        </button>
      </div>
    </div>
  );
};

export default SportsFollowUp;