import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref.css';
import Header from './Header';
const CulturalFollowUp = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
   
    { id: 1, text: 'DANCE', Image: 'https://www.shutterstock.com/image-vector/dancing-boy-colorful-spots-splashes-600nw-106914632.jpg',path:'/dance' },
    { id: 2, text: 'MUSIC', Image: 'https://cdn.vectorstock.com/i/preview-1x/78/22/colorful-music-notes-vector-787822.jpg',path:'/music' },
    { id: 3, text: 'THEATRE', Image: 'https://thumbs.dreamstime.com/z/comedy-tragedy-simple-masks-carnival-colorful-grunge-illustration-background-48349316.jpg',path:'/pravrutthi' },
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
      <h2>What type of cultural clubs are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
            <img src={option.Image} alt={`Option ${option.id}`} />
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
    </div>
  );
};

export default CulturalFollowUp;