import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Pref1.css';
import Header from './Header';
const Music = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const options = [
    { id: 1, text: 'WESTERN', Image: 'https://previews.123rf.com/images/abstract412/abstract4121703/abstract412170300039/74518892-colorful-music-instruments-with-music-notes-and-butterflies-isolated-vector-illustration-music.jpg',path:'/groovehouse' },
    { id: 2, text: 'INDIAN', Image: 'https://as1.ftcdn.net/v2/jpg/01/40/18/32/1000_F_140183253_wgn224i3ZumUZNRBSFNqNCv6hh096Wut.jpg' ,path:'/ninaad'},
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
      <h2>What type of Music club are you interested to join?</h2>
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

export default Music;