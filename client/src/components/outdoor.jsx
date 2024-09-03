import React from 'react';
import Header from './Header';
const OutdoorSportsClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Outdoor Sports Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url('./assets/outbg.jpg') center/cover no-repeat fixed;
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
          <h1>Outdoor Warriors - The Outdoor Sports Club of BMSCE</h1>
          <p>Welcome to the adventurous world of <b>Outdoor Warriors</b> at <b>BMS College of Engineering</b>! 🏃‍♂️⚽️</p>
          <img src="C:\webdevproj\client\public\assets\outdoorsportsclub_logo.png" alt="Outdoor Warriors Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Outdoor Warriors is dedicated to promoting physical fitness, teamwork, and adventure through various outdoor sports activities. Join us to explore the thrill of outdoor sports!</p>
              <h2>Activities Offered:</h2>
              <p>
                1. <b>Football</b>: Kick around and score goals in friendly matches and tournaments.<br /><br />
                2. <b>Cricket</b>: Bat, bowl, and field in cricket matches and tournaments.<br /><br />
                3. <b>Basketball</b>: Shoot hoops and dribble your way to victory in basketball games.<br /><br />
                4. <b>Volleyball</b>: Serve, spike, and block in volleyball matches on the sand or indoor courts.<br /><br />
              </p>
              <h2>Opportunities for Participants</h2>
              <p>
                - <b>Team Players</b>: Join our teams to compete in inter-college tournaments and showcase your skills.<br /><br />
                - <b>Recreational Athletes</b>: Enjoy casual games and practices with fellow outdoor sports enthusiasts.<br /><br />
                - <b>Adventure Seekers</b>: Embark on outdoor adventures like trekking, camping, and rock climbing with the club.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>John Doe</li><br /><br />
                <li>Jane Smith</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. David Johnson<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our matches, events, and outdoor adventures on our Facebook page: <a href="https://www.facebook.com/outdoorwarriors_bmsce" target="_blank">Outdoor Warriors - BMSCE</a>. Join Outdoor Warriors today and let's play outdoors!</p><br /><br />
              Let's play, compete, and explore together! 🏃‍♂️⚽️
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default OutdoorSportsClub;
