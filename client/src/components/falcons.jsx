import React from 'react';
import Header from './Header';
const Falcons = () => {
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
              background: url("./assets/fab.avif") center/cover no-repeat fixed; 
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
              max-width: 50%;
              margin-left: 50%;
              margin-right: 50%;
              display: block;
            }
            .club img {
              max-width: 25%;
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
          <h1>Falcons - The Multimedia Club of BMSCE</h1>
          <p>Welcome to the creative world of <b>Falcons</b> at <b>BMS College of Engineering</b>! 🎨🎬🎥</p>
          <img src="./assets/falcons_logo.jpeg.jpg" alt="Falcons Logo" height="20" />
                    <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Falcons is where creativity takes flight and imagination knows no bounds. Established to explore the realms of multimedia, Falcons is more than just a club—it's a canvas for visual and digital expressions.</p>
              <p>Falcons hosts and actively participates in a variety of multimedia events, showcasing talents in photography, videography, graphic design, and more.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Photography Exhibitions</b>: Showcasing captivating moments captured by Falcons members, displaying the beauty of life through lenses.<br /><br />
                2. <b>Film Screenings</b>: Screening short films, documentaries, and multimedia projects created by Falcons members, inspiring and entertaining audiences.<br /><br />
                3. <b>Graphic Design Competitions</b>: Hosting competitions to showcase design skills and creativity, challenging participants to create visually stunning artworks.<br /><br />
                4. <b>Workshops and Seminars</b>: Organizing educational sessions and interactive workshops to enhance skills in photography, video editing, graphic design, and more.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Photographers</b>: Whether you're a beginner or an experienced photographer, Falcons provides opportunities to explore photography, participate in photo walks, and exhibit your work.<br /><br />
                - <b>Videographers</b>: If you have a passion for storytelling through videos, join Falcons to create and share your cinematic visions, from short films to documentaries.<br /><br />
                - <b>Graphic Designers</b>: Showcase your creativity through digital art and graphic design projects, collaborating with fellow designers and creating impactful visual content.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Samhitha K</li><br /><br />
                <li>Pratham J</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Rithesh Kumar<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our latest creations, workshops, and multimedia inspirations on our Instagram Page: <a href="https://www.instagram.com/falcons.of.bmsce?igsh=MXRuZmtha2JuejllaA==://www.instagram.com/bmsce_falcons?igshid=abc123" target="_blank">@falcons.of.bmsce</a>. Join the Falcons family today!</p><br /><br />
              Let's unleash creativity and make multimedia magic together! 🎨🎬📷
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Falcons;
