import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref.css';
import Header from './Header';
const Dance = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const options = [
    { id: 1, text: 'WESTERN', Image: 'https://i.pinimg.com/736x/d6/9e/44/d69e4445190fd8e40dd2d1b6fa1943b0.jpg',path:'/DA' },
    { id: 2, text: 'EASTERN', Image: 'https://i.pinimg.com/736x/33/3c/8d/333c8d79074927ee8e5881baef2753fd.jpg',path:'/paramvah' },
  ];

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option.id)) {
      // Deselect the option if already selected
      setSelectedOptions(selectedOptions.filter(id => id !== option.id));
    } else {
      // Select the option if not selected
      setSelectedOptions([...selectedOptions, option.id]);
    }
    navigate(option.path);
  };

  return (
    <div className="i-container">
    <div className="question-container">
      <h2>What type of Dance club are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
            <img src={option.Image} alt={`Option ${option.id}`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
      <div className='submit1-container'>
        <button onClick={() => navigate('/cultural')}>
          Back 
        </button>
      </div>
    </div>
    </div>
  );
};

export default Dance;