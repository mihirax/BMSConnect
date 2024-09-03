import React from 'react';

const BusinessClub = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Business Club Information</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 2px;
              color: #070707;
              line-height: 1.6;
              background: url("./assets/busbg.jpeg") center/cover no-repeat fixed; 
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
          <h1>Business Titans - The Business Club of BMSCE</h1>
          <p>Welcome to the dynamic world of <b>Business Titans</b> at <b>BMS College of Engineering</b>! 🚀💼</p>
          <img src="C:\webdevproj\client\public\assets\businessclub_logo.png" alt="Business Titans Logo" height="20" />
          <div className="club-info">
            <div>
              <h2>About the Club</h2>
              <p>Business Titans is dedicated to fostering entrepreneurial spirit, leadership skills, and business acumen among students. We aim to provide a platform for budding entrepreneurs and business enthusiasts to learn, collaborate, and innovate.</p>
              <p>Join us as we explore the realms of business, entrepreneurship, and innovation through workshops, seminars, and networking events.</p>
              <h2>Events Hosted and Participated:</h2>
              <p>
                1. <b>Entrepreneurship Workshops</b>: Learn from successful entrepreneurs and industry experts about starting and growing your own business.<br /><br />
                2. <b>Business Plan Competitions</b>: Showcase your innovative business ideas and compete for cash prizes and mentorship opportunities.<br /><br />
                3. <b>Industry Visits</b>: Gain insights into real-world business operations through visits to leading companies and organizations.<br /><br />
                4. <b>Guest Lectures</b>: Engage with business leaders and thought influencers through interactive guest lectures and panel discussions.<br /><br />
              </p>
              <h2>Opportunities for Aspiring Entrepreneurs</h2>
              <p>
                - <b>Entrepreneurial Minds</b>: Whether you have a business idea or aspire to launch your own startup, Business Titans provides resources and support to turn your dreams into reality.<br /><br />
                - <b>Leadership Enthusiasts</b>: Develop leadership skills, teamwork, and problem-solving abilities through our leadership development programs and activities.<br /><br />
                - <b>Networking Aficionados</b>: Expand your professional network, connect with industry professionals, and explore internship and job opportunities.<br /><br />
              </p>
              <h2>Meet Our Team</h2>
              <b>Club Coordinators:</b><br /><br />
              <ul>
                <li>Alexander Smith</li><br /><br />
                <li>Emily Johnson</li><br /><br />
              </ul>
              <h2>Faculty Advisor:</h2>
              <p>Prof. Sophia Williams<br /><br /></p>
              <h2>Follow Us</h2>
              <p>Stay updated with our events, workshops, and industry insights on our LinkedIn page: <a href="https://www.linkedin.com/company/business-titans-bmsce" target="_blank">Business Titans - BMSCE</a>. Join Business Titans today and unleash your entrepreneurial potential!</p><br /><br />
              Let's innovate, collaborate, and lead the future of business together! 💼🌟
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default BusinessClub;
