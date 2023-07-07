import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    // For now, we'll navigate to the profile page with the entered username and password
    navigate('/profile', { state: { username, password } });
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="social-login">
          <button className="btn-google">
            <i className="fab fa-google"></i> Login with Google
          </button>
          <button className="btn-facebook">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <a href="/create-account">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
