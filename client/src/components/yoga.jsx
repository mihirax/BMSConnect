import React from 'react';

const YogaClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Samyama</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url('./assets/yoga_bg.jpeg.jpg') center/cover no-repeat fixed;
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
          <h1>Samyama- The Yoga Club of BMSCE</h1>
          <p>Welcome to the serene world of <b>Samyama</b> at <b>BMS College of Engineering</b>! 🧘‍♀️🕉️</p>
          <img src="C:\webdevproj\client\public\assets\yogaclub_logo.png" alt="Yoga Club Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>The Yoga Club is dedicated to fostering physical, mental, and spiritual well-being through the practice of yoga. Join us to discover inner peace and harmony!</p>
              <h2>Yoga Practices Offered:</h2>
              <p>
                1. <b>Pranayama</b>: Explore the art of breath control to enhance vitality and mental clarity.<br /><br />
                2. <b>Asanas</b>: Experience the benefits of various sitting and standing yoga postures, such as:
                   - <b>Sukhasana (Easy Pose)</b>: Cultivates a calm and steady mind.
                   - <b>Tadasana (Mountain Pose)</b>: Improves posture and strengthens legs.
                   - <b>Virabhadrasana (Warrior Pose)</b>: Builds stamina and focus.
                   - <b>Utkatasana (Chair Pose)</b>: Tones leg muscles and enhances balance.
                <br /><br />
                3. <b>Advance Yoga</b>: Delve deeper into advanced yoga practices to challenge body and mind.
              </p>
              <h2>Club Activities and Workshops</h2>
              <p>
                - Participate in yoga health improvement workshops held by the college.
                - Compete in inter-college yoga competitions and showcase your skills.
              </p>
              <h2>The Importance of Yoga</h2>
              <p>Yoga is not just a physical exercise; it is a holistic approach to well-being. Regular practice of yoga improves flexibility, strength, and mental clarity. It reduces stress, promotes relaxation, and cultivates inner peace.</p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>John Doe</li><br /><br />
                <li>Jane Smith</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. Emily Johnson<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our yoga sessions, workshops, and events on our Instagram page: <a href="https://https://www.instagram.com/bmsce_samyama?igsh=MXNlc2RjbTc2MzFoeA==.instagram.com/yogaclub_bmsce" target="_blank">@bmsce_samyama</a>. Join the Yoga Club today and embark on a journey of self-discovery!</p><br /><br />
              Let's unite body, mind, and soul through the practice of yoga! 🧘‍♂️🌿
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default YogaClub;
