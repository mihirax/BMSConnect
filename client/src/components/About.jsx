import React, { useState, useEffect } from 'react';
import './About.css';
import AboutContainer from './AboutContainer';

function About() {
   
  return (
    <div className="about-section">
      <div className="container-wrapper">
        <AboutContainer
          title="Events"
          icon="mission-icon.png"
          description="Find out about all the upcoming events happening at BMS and ways to contribute."
          buttonLabel="Explore"
          link="/events"
        />
        <AboutContainer
          title="Registrations"
          icon="team-icon.png"
          description="Register,participate and keep track of the wide range of events/competitions that you have registered for."
          buttonLabel="Explore"
          link="/all"
        />
        <AboutContainer
          title="Clubs"
          icon="story-icon.png"
          description="Explore the wide range of clubs on campus and find the clubs you wish to join."
          buttonLabel="Preference"
          link="/preferences" // Call handlePreferenceClick on button click
        />
      </div>
     
      
    </div>
  );
}

export default About;
