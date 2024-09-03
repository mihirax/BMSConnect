import React from 'react';

const CodingClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Coding Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url('./assets/CODING_BG.jpeg') center/cover no-repeat fixed;
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
          <h1>Coders' Haven - The Coding Club of BMSCE</h1>
          <p>Welcome to the innovative world of <b>Coders' Haven</b> at <b>BMS College of Engineering</b>! 🚀💻</p>
          <img src="C:\webdevproj\client\public\assets\codingclub_logo.png" alt="Coders' Haven Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>At Coders' Haven, we believe in the power of code to transform ideas into reality. We are a community of passionate coders dedicated to exploring, learning, and innovating in the world of programming.</p>
              <p>Join us as we delve into the latest technologies, collaborate on projects, and sharpen our coding skills together.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Hackathons</b>: Intense coding marathons where participants collaborate to solve real-world problems within a limited timeframe.<br /><br />
                2. <b>Workshops</b>: Hands-on sessions covering various programming languages, tools, and frameworks to expand our coding knowledge.<br /><br />
                3. <b>Tech Talks</b>: Engaging discussions with industry experts on emerging technologies and trends in the tech world.<br /><br />
                4. <b>Coding Competitions</b>: Friendly competitions to test our coding skills and problem-solving abilities.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Coders</h2>
              <p>
                - <b>Programmers</b>: Whether you're a beginner or an experienced coder, Coders' Haven provides a supportive environment to enhance your coding prowess.<br /><br />
                - <b>Project Managers</b>: Lead coding projects, collaborate with team members, and gain valuable project management experience.<br /><br />
                - <b>Tech Enthusiasts</b>: Dive deep into the world of technology, explore new concepts, and stay updated with the latest trends.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>John Doe</li><br /><br />
                <li>Jane Smith</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. Michael Johnson<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay connected with us on our Twitter handle: <a href="https://twitter.com/coders_haven_xyz" target="_blank">@coders_haven_xyz</a>. Join Coders' Haven today and embark on a coding journey like never before!</p><br /><br />
              Let's code together and build something amazing! 💻🚀
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default CodingClub;
