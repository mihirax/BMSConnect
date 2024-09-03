import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref.css';

const Art = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const options = [
    { id: 1, text: 'FINE ARTS', Image: 'https://thumbs.dreamstime.com/b/paint-brush-splash-seamless-pattern-colorful-paintbrushes-white-background-eps-file-available-37203663.jpg',path:'finearts' },
    { id: 2, text: 'PHOTOGRAPHY', Image: 'https://cdn2.vectorstock.com/i/1000x1000/00/46/photo-camera-icon-vibrant-colors-vector-7650046.jpg',path:'falcons' },
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
      <h2>What type of Arts club are you interested to join?</h2>
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

export default Art;