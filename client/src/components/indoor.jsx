import React from 'react';
import Header from './Header';
const IndoorSportsClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Indoor Sports Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url('./assets/inbg.jpg') center/cover no-repeat fixed;
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
          <h1>Sports Mania - The Indoor Sports Club of BMSCE</h1>
          <p>Welcome to the energetic world of <b>Sports Mania</b> at <b>BMS College of Engineering</b>! 🏸🏓</p>
          <img src="C:\webdevproj\client\public\assets\indoorsportsclub_logo.png" alt="Sports Mania Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Sports Mania is dedicated to promoting health, fitness, and camaraderie through various indoor sports activities. We offer a vibrant environment for students to engage in recreational sports and competitions.</p>
              <p>Join us to stay active, hone your skills, and have fun with fellow sports enthusiasts!</p>
              <h2>Activities Offered:</h2>
              <p>
                1. <b>Badminton</b>: Compete in singles and doubles matches or simply enjoy a friendly game with friends.<br /><br />
                2. <b>Table Tennis</b>: Sharpen your reflexes and precision with intense table tennis matches.<br /><br />
                3. <b>Chess</b>: Exercise your mind and strategic thinking skills with chess matches and tournaments.<br /><br />
                4. <b>Carrom</b>: Have a blast with friends playing carrom, a classic indoor game of skill and precision.<br /><br />
              </p>
              <h2>Opportunities for Participants</h2>
              <p>
                - <b>Recreational Players</b>: Whether you're a beginner or an experienced player, Sports Mania provides opportunities for everyone to play and enjoy indoor sports.<br /><br />
                - <b>Competitive Athletes</b>: Participate in intramural tournaments and represent BMSCE in inter-college competitions.<br /><br />
                - <b>Team Builders</b>: Strengthen friendships and team spirit through collaborative sports activities.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Michael Johnson</li><br /><br />
                <li>Emma Wilson</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. Sarah Thompson<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our tournaments, practice sessions, and social events on our Twitter page: <a href="https://twitter.com/sportsmania_bmsce" target="_blank">Sports Mania - BMSCE</a>. Join Sports Mania today and let's play together!</p><br /><br />
              Let's play, compete, and stay active together! 🏸🏓
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default IndoorSportsClub;
