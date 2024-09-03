import React from 'react';

const Paramvah = () => {
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
              background: url("./assets/parbg2.jpeg.jpg") center/cover no-repeat fixed; 
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
          <h1>Paramvah - The Eastern Dance Club of BMSCE</h1>
          <p>Welcome to the vibrant world of <b>Paramvah</b> at <b>BMS College of Engineering</b>! 💃🎶</p>
          <img src="./assets/paramvah_logo.jpeg.jpg" alt="Paramvah Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Paramvah is where tradition meets innovation, and movements narrate stories. Established to celebrate the rich heritage of Indian dance forms and contemporary expressions, Paramvah is more than just a club—it's a fusion of rhythm, grace, and creativity.</p>
              <p>Paramvah hosts and actively participates in a variety of dance events, mesmerizing audiences with captivating performances and artistic expressions.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Annual Dance Showcase</b>: A grand spectacle showcasing the diverse dance talents of BMSCE students, featuring traditional and contemporary dance forms.<br /><br />
                2. <b>Workshops and Masterclasses</b>: Providing opportunities for students to learn and refine their dance skills under the guidance of renowned choreographers and instructors.<br /><br />
                3. <b>Inter-College Dance Competitions</b>: Representing BMSCE, Paramvah participates in various dance competitions, showcasing talent and winning accolades.<br /><br />
                4. <b>Cultural Fest Performances</b>: Entertaining and captivating audiences with energetic and soulful performances at cultural festivals and events.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Dancers</b>: Whether you're trained in classical Indian dance forms like Bharatanatyam and Kathak or contemporary styles like Bollywood and Hip Hop, Paramvah welcomes dancers of all backgrounds and levels to express themselves through dance.<br /><br />
                - <b>Choreographers</b>: If you have a passion for choreography and want to showcase your creativity, join Paramvah to choreograph performances and lead dance routines.<br /><br />
                - <b>Event Organizers</b>: Behind every successful dance event is a team of dedicated organizers. Join Paramvah to learn event management skills and contribute to the planning and execution of dance events.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Sahana</li><br /><br />
                <li>Poorvi</li><br /><br />
              </ul>
              <b>Treasurer:</b><br /><br />
              <ul>
                <li>Likitha Mohan</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Radha Kumari<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our performances, workshops, and dance inspirations on our Instagram Page: <a href="https://www.instagram.com/https://www.instagram.com/paramvah_bmsce?igsh=MTJqaDU3MDl4cGozbQ==?igshid=abc123" target="_blank">@paramvah_bmsce</a>. Join the Paramvah family today!</p><br /><br />
              Let's dance together and create magical moments! 💃🎶✨
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Paramvah;
