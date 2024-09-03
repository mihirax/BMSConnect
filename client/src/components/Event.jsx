import React, { useEffect, useState } from 'react';
import {  Nav} from 'react-bootstrap';
import Header from './Header';
const EventCalendar = () => {
  // Sample data of events
  const handleButtonClick = () =>{
     const token = localStorage.getItem('token'); // Check if user is logged in
     if (token) {
       
         window.location.href = '/add';
     } else {
         window.location.href ='/login' ;
       }
     }
   
  const [events, setEvents] = useState([
    {
      date: "2024-03-15",
      club: "Paramvah",
      eventName: "BDC Dance audition",
      description: "Paramvah, BMSCE's cultural dance club, rhythmically celebrates diversity through captivating performances, uniting students in a vibrant tapestry of movement and expression.",
      POC: "paramvah@gmail.com",
      registrationLink: "/add",
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzBedmUnuTOUS3bJPjQvcm1iNqY9lgQs29A&usqp=CAU"
    },
    {
        date: "2024-04-10",
        club: "Art Club",
        eventName: "Painting Exhibition",
        description: "The Art Club at BMSCE is a creative haven where students explore diverse mediums, fostering imagination and expression within the campus community.",
        POC: "artgal@gmail.com",
        registrationLink: "/add",
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0MEv52R6EISfNpdpIh6ns8vpeHuVjFrhMg&usqp=CAU"
      },
      {
        date: "2024-04-20",
      club: "Kala Sourabha",
      eventName: "A cultural evening",
      description: "The Kalasourabha Club at BMSCE hosts enchanting cultural evenings, showcasing a plethora of talents through music, dance, drama, and more, fostering a vibrant atmosphere of cultural exchange and appreciation.",
      POC: "kala@gmail.com",
      registrationLink: "/add",
      imgLink: "https://media.gettyimages.com/id/466103921/vector/entertainment-and-culture-icon-set.jpg?s=2048x2048&w=gi&k=20&c=P79Y2JvdvswJ85oRAXyDUqD09iiWyTfKczhfE4lNugM="
    },
      {
        date: "2024-05-11",
      club: "Technical",
      eventName: "Hackathon",
      description: "The Technical Club at BMSCE orchestrates exhilarating hackathons, igniting innovation and collaboration among students, shaping tomorrow's tech leaders through intensive coding challenges.",
      POC: "tech@gmail.com",
      registrationLink: '/add',
      imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnm7QJUhFsGdgJVIfiPqjUkjZV0fMbcJUKQ&usqp=CAU'
      },
      //{
       // date: "2024-05-15",
      //club: "Sports",
      //eventName: "KREEDOSTAV",
      //description: "Kreedostav at BMSCE is a dynamic sports fest uniting students in spirited competition and camaraderie, showcasing athleticism and teamwork across various indoor and outdoor games.",
      //POC: "sport@gmail.com",
      //registrationLink: "https://docs.google.com/forms/d/1hZ7oogDVBTWAfJ2N33CLsuHqeHG28OMOv2SaKxRhgws/edit",
      //imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_efAfhxkSd5jXvxk6G7MZwriXTk_FuFswg&usqp=CAU'
      //},
    
    
    
 ]);

  useEffect(() => {
    // You can fetch events data from an API or other sources here
  }, []);

  // CSS styles
  const styles = {
    body: {
      fontFamily: "Times New Roman, Times, serif, sans-serif",
      margin: 0,
      padding: 0,
      
    },
    container: {
      
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "grey",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      height: "811px",
    },
    h1: {
      textAlign: "center",
      color: "#333333",
    },
    event: {
      marginBottom: "30px",
      padding: "10px",
      borderRadius: "9px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.599)",
      backgroundColor: "#f9f9f9",
      width: "368px",
      marginLeft: "8px",
      float: "left",
    },
    h2: {
      marginTop: 0,
      marginBottom: "5px",
      color: "rgb(45, 0, 128)",
      display: "inline",
    },
    p: {
      marginTop: 0,
      color: "black",
    },
    registrationLink: {
      display: "block",
      marginTop: "10px",
      textAlign: "center",
    },
    desc: {
      display: "inline",
      fontWeight: 400,
    },
    link: {
      color: "purple",
      textDecoration: "overline",
    },
  };

  // Function to generate event elements
  const generateEventElement = (event) => (
   <div><Header/>
    <div style={styles.event} key={event.eventName}>
      <div>
        <img
          src={event.imgLink}
          alt="Event"
          width="32"
          height="32"
        />
        <h2>{event.eventName}</h2>
      </div>
      <div>
        <strong>Description:</strong>
        <div style={styles.desc}>{event.description}</div>
      </div>
      <div>
        <strong>Date:</strong>
        <div style={styles.desc}>{event.date}</div>
      </div>
      <div>
        <strong>Club:</strong>
        <div style={styles.desc}>{event.club}</div>
      </div>
      <div>
        <strong>POC:</strong>
        <div style={styles.desc}>{event.POC}</div>
      </div>
      <div style={styles.registrationLink}>
      <Nav.Link onClick={handleButtonClick} className="mx-3">REGISTER</Nav.Link>
      </div>
    </div></div>
  );

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>UPCOMING EVENTS</h1>
        <div id="events-container">
          {events.map(event => generateEventElement(event))}
        </div>
      </div>
    </div>
   
  );
};

export default EventCalendar;