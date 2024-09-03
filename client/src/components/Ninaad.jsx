import React from 'react';
import Header from './Header';
const Ninaad = () => {
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
              background: url("./assets/ninaadbg.jpeg.jpg") center/cover no-repeat fixed;
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
          <h1>Ninaad - The Classical Music Club of BMSCE</h1>
          <p>Welcome to the enchanting world of <b>Ninaad</b> at <b>BMS College of Engineering</b>! 🎵🎻</p>
          <img src="./assets/ninaad_logo.jpeg.jpg" alt="Paramvah Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Ninaad is where tradition meets melody, and heritage resonates through every note. Established to promote and preserve the rich heritage of classical music, Ninaad is more than just a club—it's a symphony of cultural heritage and musical excellence.</p>
              <p>Ninaad hosts and actively participates in a myriad of musical events, captivating audiences with soulful renditions and timeless compositions.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Classical Music Concerts</b>: Showcasing the best classical musicians, vocalists, and instrumentalists, mesmerizing the audience with performances steeped in tradition and artistry.<br /><br />
                2. <b>Raga Recitals</b>: Offering platforms for musicians to explore and showcase the intricacies of various ragas, evoking emotions and transporting listeners to realms of musical bliss.<br /><br />
                3. <b>Classical Music Workshops</b>: Providing opportunities for students to learn, practice, and master classical music under the guidance of seasoned musicians and gurus.<br /><br />
                4. <b>Inter-College Music Competitions</b>: Representing BMSCE, Ninaad participates in various classical music competitions, showcasing talent and winning accolades.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Vocalists</b>: Whether you're a budding classical vocalist or an experienced performer, Ninaad welcomes singers of all levels to explore and express the depths of classical music.<br /><br />
                - <b>Instrumentalists</b>: If you're proficient in playing classical instruments such as sitar, tabla, violin, or flute, Ninaad provides a platform to showcase your talent and dedication.<br /><br />
                - <b>Event Organizers</b>: Behind every successful musical event is a team of dedicated organizers. Join Ninaad to learn event management skills and contribute to the promotion of classical music.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Nidhi M N</li>
                <li>Pulkith Bhat</li>
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof.Sudhakar<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our performances, workshops, and musical inspirations on our Instagram Page: <a href="httpshttps://www.instagram.com/ninaad.bmsce?igsh=NW9ydWFtNGdoMjdt://www.instagram.com/bmsce_ninaad?igshid=abc123" target="_blank">@ninaad.bmsce</a>. Join the Ninaad family today!</p><br /><br />
              Let's celebrate the beauty of classical music and create harmonious memories! 🎵🎻🎶
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Ninaad;
