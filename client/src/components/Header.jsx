import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap'; // Import Alert component

import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 // State to control login message visibility

  useEffect(() => {
    // Check authentication status when component mounts
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    setIsLoggedIn(!!token); // Set isLoggedIn based on whether token exists
  };

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // You might want to redirect the user to the login page after logout
    // window.location.href = '/login';
  };

  const handlePrefClick = () => {
    // Show login message and delay redirection to login page for 1 second
   
     
      // Redirect to login page if not logged in
      if (!isLoggedIn) {
        window.location.href = '/login'; // Redirect to login page
      } else {
        // Handle other actions for logged-in users, if needed
        window.location.href = '/preferences'; // Redirect to competitions page
    
    }
  };
  const handleRegClick = () => {
    // Show login message and delay redirection to login page for 1 second
   
     
      // Redirect to login page if not logged in
      if (!isLoggedIn) {
        window.location.href = '/login'; // Redirect to login page
      } else {
        // Handle other actions for logged-in users, if needed
        window.location.href = '/all'; // Redirect to competitions page
    
    }
  };

  return (
    <Navbar bg="transparent" variant="dark" expand="lg" fixed="top" className="header">
      <Container>
        <Navbar.Brand href="#home">BMS CONNECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="/" className="mx-3">HOME</Nav.Link>
            <Nav.Link href="/events" className="mx-3">EVENTS</Nav.Link>
            <Nav.Link onClick={handlePrefClick} className="mx-3">PREFERENCES</Nav.Link>
            <Nav.Link onClick={handleRegClick} className="mx-3">REGISTRATIONS</Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="mx-3">LOGOUT</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login" className="mx-3">LOGIN</Nav.Link>
                <Nav.Link href="/signup" className="mx-3">SIGNUP</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Header;
