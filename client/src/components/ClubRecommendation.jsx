import React, { useState } from 'react';
import './ClubRecommendation.css';

const clubs = [
    {
      name: 'Art Club',
      category: 'cultural',
      image: 'https://example.com/art-club.jpg',
    },
    {
      name: 'Music Club',
      category: 'cultural',
      image: 'https://example.com/music-club.jpg',
    },
    {
      name: 'Theater Club',
      category: 'cultural',
      image: 'https://example.com/theater-club.jpg',
    },
    {
      name: 'Coding Club',
      category: 'technical',
      image: 'https://example.com/coding-club.jpg',
    },
    {
      name: 'Business Club',
      category: 'technical',
      image: 'https://example.com/business-club.jpg',
    },
    {
      name: 'Indoor Sports Club',
      category: 'sports',
      image: 'https://example.com/indoor-sports-club.jpg',
    },
    {
      name: 'Outdoor Sports Club',
      category: 'sports',
      image: 'https://example.com/outdoor-sports-club.jpg',
    },
    {
      name: 'Social Service Club',
      category: 'social-service',
      image: 'https://example.com/social-service-club.jpg',
    },
  ];

 

  const ClubRecommendation = () => {
    // Define the state variables for the selected clubs and the current step
    const [selectedClubs, setSelectedClubs] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
  
    // Define the questions and options for each step
    const questions = [
      {
        step: 1,
        question: 'Which clubs are you interested in?',
        options: [
          {
            name: 'Cultural',
            image: 'https://example.com/cultural-club.jpg',
          },
          {
            name: 'Technical',
            image: 'https://example.com/technical-club.jpg',
          },
          {
            name: 'Sports',
            image: 'https://example.com/sports-club.jpg',
          },
          {
            name: 'Social Service',
            image: 'https://example.com/social-service-club.jpg',
          },
        ],
      },
      {
        step: 2,
        question: 'Which cultural clubs are you interested in?',
        options: [
          {
            name: 'Art',
            image: 'https://example.com/art-club.jpg',
          },
          {
            name: 'Music',
            image: 'https://example.com/music-club.jpg',
          },
          {
            name: 'Theater',
            image: 'https://example.com/theater-club.jpg',
          },
        ],
      },
      {
        step: 3,
        question: 'Which sports clubs are you interested in?',
        options: [
          {
            name: 'Indoor Sports',
            image: 'https://example.com/indoor-sports-club.jpg',
          },
          {
            name: 'Outdoor Sports',
            image: 'https://example.com/outdoor-sports-club.jpg',
          },
        ],
      },
    ];
  
    // Handle the user's selection of a club
    const handleSelectClub = (club) => {
      if (selectedClubs.includes(club)) {
        setSelectedClubs(selectedClubs.filter((c) => c !== club));
     } else {
        setSelectedClubs([...selectedClubs, club]);
      }
    };
  
    // Handle the user's submission of their selection
    const handleSubmit = () => {
      if (currentStep < questions.length) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    // Render the component
    return (
      <div className="club-recommendation">
        {currentStep === 1 && (
          <div className="step-1">
            <h2>{questions[0].question}</h2>
            <div className="options">
              {questions[0].options.map((option) => (
                <div
                  key={option.name}
                  className={`option ${selectedClubs.includes(option.name) ? 'selected' : ''}`}
                  onClick={() => handleSelectClub(option.name)}
                >
                  <img src={option.image} alt={option.name} />
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
            <button onClick={handleSubmit}>Next</button>
          </div>
        )}
        {currentStep === 2 && (
          <div className="step-2">
            <h2>{questions[1].question}</h2>
            <div className="options">
              {questions[1].options.map((option) => (
                <div
                  key={option.name}
                  className={`option ${selectedClubs.includes(option.name) ? 'selected' : ''}`}
                  onClick={() => handleSelectClub(option.name)}
                >
                  <img src={option.image} alt={option.name} />
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
            <button onClick={handleSubmit}>Next</button>
          </div>
        )}
        {currentStep === 3 && (
          <div className="step-3">
            <h2>{questions[2].question}</h2>
            <div className="options">
              {questions[2].options.map((option) => (
                <div
                  key={option.name}
                  className={`option ${selectedClubs.includes(option.name) ? 'selected' : ''}`}
                  onClick={() => handleSelectClub(option.name)}
                >
                  <img src={option.image} alt={option.name} />
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
            <button onClick={handleSubmit}>Next</button>
          </div>
        )}
        {currentStep === questions.length && (
          <div className="recommendation">
            <h2>Recommended Clubs</h2>
            <ul>
              {selectedClubs.map((club) => {
                const clubObj = clubs.find((c) => c.name === club);
                return <li key={clubObj.name}>{clubObj.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ClubRecommendation;

