import React from 'react';
import Header from './Header';
const Finearts = () => {
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
              background: url('./assets/finearts1.jpeg.jpg') center/cover no-repeat fixed;
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
              max-width: 80%;
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
          <h1>Fine Arts Club - BMSCE</h1>
          <p>Welcome to the vibrant world of <b>Fine Arts Club</b> at <b>BMS College of Engineering</b>! 🎨✨</p>
          <img src="./assets/finearts_logo.jpeg.jpg" alt="Falcons Logo" height="250" /><br></br>
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>The Fine Arts Club at BMSCE is a haven for creativity, where students explore various forms of visual expression and unleash their artistic talents.</p>
              <p>Our club provides a platform for students to engage in activities such as painting, sketching, crafting, and more, fostering a community of passionate artists.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Art Exhibitions</b>: Showcasing the diverse artworks created by our club members, providing an opportunity for appreciation and inspiration.<br /><br />
                2. <b>Workshops and Classes</b>: Conducting sessions on different art techniques, from watercolor painting to charcoal sketching, to enhance skills and explore new mediums.<br /><br />
                3. <b>Competitions</b>: Organizing art competitions within the college and participating in intercollegiate competitions to showcase our members' talents and creativity.<br /><br />
                4. <b>Crafting Events</b>: Hosting events focused on various crafts, including origami, clay modeling, and more, encouraging hands-on creativity.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Painters and Sketch Artists</b>: Whether you're a beginner or an experienced artist, join us to practice your skills, learn new techniques, and exhibit your artworks.<br /><br />
                - <b>Craft Enthusiasts</b>: Explore your passion for crafting by participating in our crafting events and workshops, where you can learn and create beautiful handmade items.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Nikitha Rai</li><br /><br />
                <li>Manish Singh</li><br /><br />
                <li>Anitha Rani</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Sameeksha M <br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our latest artworks, workshops, and creative endeavors on our Instagram Page: <a href="https://www.instagram.com/bmsce_finearts?igshid=abc123" target="_blank">@bmsce_finearts</a>. Join the Fine Arts family today!</p><br /><br />
              Let's unleash creativity and paint the world with colors! 🎨🖌️
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Finearts;
