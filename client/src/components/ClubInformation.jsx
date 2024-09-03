import React from 'react';

const ClubInformation = () => {
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
              background: url("/assets/pravrback.jpg") center/cover no-repeat fixed;
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
          <h1>PRAVRUTTHI - The theatre club of BMSCE  </h1>
          <p>Welcome to the vibrant world of <b>Pravrutthi Theatre Club</b> at <b>BMS College of Engineering</b>! 🎭✨</p>
          <img src="/assets/pravlogo.png" alt="Pravrutthi Theatre Club" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Established in 2013, Pravrutthi is more than just a club—it's a creative movement. Our name, derived from the Sanskrit word meaning "expression" or "movement," aptly captures our passion for the stage.</p>
              <p>Pravrutthi hosts and actively participates in a variety of theatrical events, igniting the imagination and fostering a love for drama, storytelling, and artistic expression.</p>
              <h2>Events Hosted and Participated : </h2>
              <p>
                1. <b>Mime</b>: Silent yet powerful, our mime performances convey emotions, narratives, and social messages through gestures and expressions.<br /><br />
                2. <b>Skit</b>: Short, humorous plays that entertain and engage the audience. Skits often tackle everyday situations with a twist.<br /><br />
                3. <b>Street Play (Nukkad Natak)</b>: Taking theater to the streets, Pravrutthi's street plays address social issues, provoke thought, and create awareness.<br /><br />
                4. <b>Mad Ads</b>: A delightful fusion of creativity and humor, where participants create fictional advertisements on the spot.<br /><br />
                5. <b>One-Act Play</b>: Intense, condensed narratives that explore themes ranging from love and tragedy to satire and suspense.<br /><br />
              </p>
              <h2>VTU Cultural Fest Participation</h2>
              <p>Pravrutthi proudly represents BMS College at the <b>VTU Cultural Fest</b> every year. Our performances resonate with passion, creativity, and camaraderie. It's our chance to shine on a grand stage!</p>
              <h2>Opportunities for Aspiring Artists</h2>
              <p>
                - <b>Actors</b>: Whether you're a seasoned performer or a first-timer, audition for roles in our productions. The spotlight awaits!<br /><br />
                - <b>Editors</b>: Video editing plays a crucial role in theater. Join Pravrutthi to learn the art of editing and enhance our visual storytelling.<br /><br />
                - <b>Script Writers</b>: If you have a flair for words, contribute your scripts and ideas. We value originality and fresh perspectives.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Niriksha Bhat</li><br /><br />
                <li>Shivanshi Singh</li><br /><br />
                <li>Champa Anitha</li><br /><br />
              </ul>
              <h2>Faculty Incharge:</h2>
              <p>Prof. Preetha<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our performances, behind-the-scenes moments, and artistic inspirations on our Instagram Page: <a href="https://www.instagram.com/bmsce_pravrutthi?igsh=MWVzdmUzaWFhNXgzbQ==" target="_blank">@bmsce_pravrutthi</a>. Join the Pravrutthi family today!</p><br /><br />
              Let's create magic together under the spotlight! 🌟🎬🎭
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ClubInformation;