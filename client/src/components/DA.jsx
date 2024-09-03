import React from 'react';
import Header from './Header';
const DA = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: rgba(255, 255, 255, 0.9) url("./assets/da222.jpeg.jpg") center/cover no-repeat fixed;                            
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
              max-width: 50%;
              margin-left: 22%;
              margin-right: 50%;
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
          <h1>Danzaddix - The Western Dance Club of BMSCE</h1>
          <p>Welcome to the electrifying world of <b>Danzaddix</b> at <b>BMS College of Engineering</b>! 💃🕺</p>
          <img src="./assets/danzaddix_logo.jpeg.jpg" alt="Danzaddix Logo" height="100" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Established to celebrate the rhythm, passion, and creativity of Western dance forms, Danzaddix is more than just a club—it's a dance revolution.</p>
              <p>Danzaddix hosts and actively participates in a myriad of dance events, igniting the stage with energy, grace, and innovation.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Dance Battles</b>: Where dancers showcase their skills, creativity, and passion in friendly competitions.<br /><br />
                2. <b>Workshops</b>: Conducting workshops to hone skills, learn new techniques, and explore different dance styles.<br /><br />
                3. <b>Annual Dance Show</b>: A spectacular showcase of talent, choreography, and teamwork, mesmerizing the audience with breathtaking performances.<br /><br />
                4. <b>Inter-College Dance Competitions</b>: Representing BMSCE, Danzaddix competes in various dance competitions, bringing home accolades and victories.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Dancers</b>: From contemporary to hip-hop, ballet to jazz, Danzaddix welcomes dancers of all styles and levels. Join us to unleash your potential!<br /><br />
                - <b>Choreographers</b>: If you have a knack for creating captivating routines and leading teams, Danzaddix provides a platform to showcase your talent and creativity.<br /><br />
                - <b>Event Managers</b>: Behind every successful event is a team of dedicated organizers. Join Danzaddix to learn event management skills and be part of exciting productions.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Tanishq U K</li><br /><br />
                <li>Sadhwin Shetty</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Ramya K S<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our performances, workshops, and dance challenges on our Instagram Page: <a href="https://www.instagram.com/https://www.instagram.com/danzaddix_bmsce?igsh=cnowb25jNm9hMzRy?igshid=abc123" target="_blank">@danzaddix_bmsce</a>. Join the Danzaddix family today!</p><br /><br />
              Let's dance together and set the stage on fire! 🔥💃🕺
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DA;
