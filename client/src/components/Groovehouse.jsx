import React from 'react';
import Header from './Header';
const Groovehouse = () => {
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
              background: url("./assets/gbg.jpeg.jpg") center/cover no-repeat fixed;
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
              max-width: 30%;
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
          <h1>GrooveHouse - The Western Music Club of BMSCE</h1>
          <p>Welcome to the melodious world of <b>GrooveHouse</b> at <b>BMS College of Engineering</b>! 🎶🏠</p>
          <img src="./assets/groovehouse_logo.jpeg.jpg" alt="Paramvah Logo" height="20" />
                    <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>GrooveHouse is where rhythms meet harmony, and melodies come to life. Established to celebrate the beauty and diversity of Western music, GrooveHouse is more than just a club—it's a symphony of talent and passion.</p>
              <p>GrooveHouse hosts and actively participates in a plethora of musical events, captivating audiences with soul-stirring performances and unforgettable melodies.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Band Competitions</b>: Showcasing the best musical talents from within and outside BMSCE, where bands compete for recognition and glory.<br /><br />
                2. <b>Solo Performances</b>: Providing a platform for individual musicians to shine, mesmerizing the audience with their virtuosity and passion.<br /><br />
                3. <b>Music Workshops</b>: Offering opportunities for students to learn, explore, and refine their musical skills under the guidance of experienced musicians.<br /><br />
                4. <b>Concerts</b>: Organizing electrifying concerts that bring together musicians and music enthusiasts, creating unforgettable musical experiences.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Musicians</b>: Whether you're a vocalist, guitarist, drummer, or pianist, GrooveHouse welcomes musicians of all instruments and genres. Join us to jam and collaborate!<br /><br />
                - <b>Composers</b>: If you have a knack for composing melodies or writing lyrics, GrooveHouse provides a platform to showcase your original compositions and creative talents.<br /><br />
                - <b>Event Managers</b>: Behind every successful musical event is a team of dedicated organizers. Join GrooveHouse to learn event management skills and be part of extraordinary productions.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Coordinator Name</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Smriti Dzousa<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our performances, workshops, and musical inspirations on our Instagram Page: <a href="https://www.instagram.com/bmsce_groovehouse?https://www.instagram.com/groovehouse_bmsce?igsh=eWpmeTlvOXRjazA1=abc123" target="_blank">@groovehouse_bmsce</a>. Join the GrooveHouse family today!</p><br /><br />
              Let's make music together and create harmonious memories! 🎵🎸🎤
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Groovehouse;
