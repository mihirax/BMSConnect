import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import email_icon from '/assets/email.png';
import pass_icon from '/assets/password.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('http://localhost:5000/login', { email, password })
      .then((response) => {
        const { data } = response;
        if (data.token) {
          // Store the token in local storage
          localStorage.setItem('token', data.token);
          // Redirect to the desired page after successful login
          navigate('/');
        } else {
          setMessage(data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Login error:', error);
        setLoading(false);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-page"><Header />
    <div className="bcg" style={{ backgroundImage: `url(https://images.app.goo.gl/6LUBY8bFQ7FgzgeHA)` }}>
      
      <div className="page1-container">
        <div className="head">
          <div className="text">LOGIN</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" required />
          </div>
          <div className="input">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          </div>
        </div>
        
        <div className="submit-container">
          <button className="submit" disabled={loading} onClick={handleSubmit}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <Link to="/signup" className="link">
            <div className="submit">Sign Up</div>
          </Link>
        </div>
      </div>
    </div></div>
  );
};

export default LoginPage;
