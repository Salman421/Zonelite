import { Button } from '@mui/material'
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
let navigate = useNavigate()
  const handleSubmit = () => {
    if (username === 'afsar' && password === 'pathan') {
      setIsLoggedIn(true);
      setUsername('')
      setPassword('')
      navigate('/layout')
    } else {
      setIsLoggedIn(false);
      setUsername('')
      setPassword('')
      alert('Invalid credentials. Please try again.');
    }
  };

  if (isLoggedIn) {
    return <div>Welcome, {username}!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <Button variant='contained' onClick={()=> handleSubmit()} >Log In</Button>
      <br />
      <Link to='/forgot' style={{ textDecoration:'none' }} >Forgot Password??</Link>
      <Link to='/signup' style={{ textDecoration:'none' , padding: '20px' }} >Sign Up!!</Link>
    </form>
  );
};

export default LoginPage;
