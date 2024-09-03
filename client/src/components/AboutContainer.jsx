import React from 'react';

function AboutContainer({ title, description, buttonLabel, link }) {
  const handleButtonClick = () =>{
     const token = localStorage.getItem('token'); // Check if user is logged in
  if (token) {
    
      window.location.href = link;
  } else {
   if(link=='/preferences'){
    window.location.href = '/login';
  }
    else{
      window.location.href = link;
    }
  }
};

  return (
    <div className="about-container">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default AboutContainer;
