import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref.css';

const Theatre = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const options = [
    { id: 1, text: 'FINE ARTS', Image: 'https://static.vecteezy.com/system/resources/thumbnails/001/902/889/small/people-s-hands-from-differents-cultures-and-races-free-vector.jpg' },
    { id: 2, text: 'PHOTOGRAPHY', Image: '/assets/Abstract_digital_background_with_technology_circuit_generated.jpg' },
  ];

  const handleOptionClick = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      // Deselect the option if already selected
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      // Select the option if not selected
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
  
    console.log('Selected Options:', selectedOptions);
    navigate('/follow-up', { selectedOptions });
  
    // Reset the form after submission
    setSelectedOptions([]);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="bcg-container">
    <div className="question-container">
      <h2>What type of Arts club are you interested to join?</h2>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className={`option ${selectedOptions.includes(option.id) ? 'selected' : ''}`} onClick={() => handleOptionClick(option.id)}>
            <img src={option.Image} alt={`Option ${option.id}`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Theatre;