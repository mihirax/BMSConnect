import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref1.css';

import Header from './Header';
const Preferences = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, text: 'CULTURAL', Image: 'https://static.vecteezy.com/system/resources/thumbnails/001/902/889/small/people-s-hands-from-differents-cultures-and-races-free-vector.jpg', path:'/cultural' },
    { id: 2, text: 'TECHNICAL', Image: '/assets/tech.png', path:'/technical' },
    { id: 3, text: 'SPORTS', Image: '/assets/sport.png', path:'/sports' },
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
    <div className="pref"><Header />
    <div className="i-container">
    <div className="question-container">
      <h2>What type of college clubs are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
            <img src={option.Image} alt={`Option ${option.id}`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div> </div>
  );
};

export default Preferences;

