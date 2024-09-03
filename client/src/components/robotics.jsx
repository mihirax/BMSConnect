import React from 'react';

const RoboticsClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Robotics Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url("./assets/robobg.avif") center/cover no-repeat fixed; 
              padding: 60px;
              position: relative;
            }
            h1, h2 {
              margin-top: 20px;
            }
            .coordinators {
              margin-top: 20px;
            }
            .images {
              margin-top: 20px;
              text-align: center;
            }
            .club-info {
              display: flex;
              align-items: center;
              text-align: left;
            }
            .club-info img {
              max-width: 20%;
              margin-left: 50%;
              margin-right: 50%;
              display: block;
            }
            .club img {
              max-width: 20%;
              margin-left: 35%;
              margin-right: 70%;
              display: block;
            }
            img {
              max-width: 20%;
              height: auto;
              margin-left: 10px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="club">
          <h1>Tech Innovators - The Robotics Club of BMSCE</h1>
          <p>Welcome to the innovative world of <b>Tech Innovators</b> at <b>BMS College of Engineering</b>! 🤖🔧</p>
          <img src="C:\webdevproj\client\public\assets\roboticsclub_logo.png" alt="Tech Innovators Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Tech Innovators is dedicated to exploring the fascinating field of robotics and automation. We strive to inspire creativity, problem-solving, and technical excellence among our members.</p>
              <p>Join us as we design, build, and program robots for various competitions and real-world applications.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Robotics Competitions</b>: Participate in national and international robotics competitions to showcase your robot's capabilities.<br /><br />
                2. <b>Workshops</b>: Learn about robotics concepts, sensors, actuators, and programming languages through hands-on workshops.<br /><br />
                3. <b>Project Exhibitions</b>: Showcase your robotic projects to the BMSCE community and industry professionals.<br /><br />
                4. <b>Industry Collaborations</b>: Collaborate with leading companies to work on cutting-edge robotics projects and gain industry exposure.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Engineers</h2>
              <p>
                - <b>Robotics Enthusiasts</b>: Whether you're a beginner or an experienced roboticist, Tech Innovators provides a platform to explore robotics concepts and technologies.<br /><br />
                - <b>Programmers</b>: Develop your programming skills by writing code to control robots and automate tasks.<br /><br />
                - <b>Mechatronics Engineers</b>: Combine mechanical, electrical, and software engineering skills to design and build complex robotic systems.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>David Brown</li><br /><br />
                <li>Emily Clark</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. Richard Miller<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our robotics projects, competitions, and workshops on our Facebook page: <a href="https://www.facebook.com/techinnovators_bmsce" target="_blank">Tech Innovators - BMSCE</a>. Join Tech Innovators today and embark on an exciting robotics journey!</p><br /><br />
              Let's innovate, automate, and revolutionize the world of robotics together! 🤖🌟
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RoboticsClub;
