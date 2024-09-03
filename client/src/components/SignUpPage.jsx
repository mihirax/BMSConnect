import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usn, setUsn] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateUsn = (usn) => {
    const regex = /1BM(20|19|21|22|23)(AD|AS|CD|CS|IS|BT|ML|MD|ET|EC)[0-9]{3}$/;
    return regex.test(usn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage('Invalid email address');
      return;
    }
    if (!validateUsn(usn)) {
      setMessage('Invalid USN format');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    setLoading(true);
    axios
      .post('http://localhost:5000/signup', { name, email, password, confirmPassword, usn })
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setMessage('Error creating account');
      });
  };

  return (
    <div className="login-page"><Header />
    <div className='page1-container'>
      <div className='head'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
        </div>
        <div className='input'>
          <input type='text' value={usn} onChange={(e) => setUsn(e.target.value)} placeholder='USN' required />
        </div>
        <div className='input'>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' required />
        </div>
        <div className='input'>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        </div>
        <div className='input'>
          <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required />
        </div>
        
      </div>
      <div className='message'>{message}</div>
      <div className='submit-container'>
        <button className='submit' disabled={loading} onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <Link to='/login' className='link'>
          <div className='submit'>Login</div>
        </Link>
      </div>
    </div></div>
  );
};
export default SignUpPage;
