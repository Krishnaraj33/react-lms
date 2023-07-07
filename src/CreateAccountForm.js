import React, { Component } from 'react';
import './styles/index.css';
import { Link } from 'react-router-dom';

class CreateAccountForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h2 className="title">Create Account</h2>
          <form>
            <div className="input-container">
              <input type="text" id="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-container">
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input type="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-container">
              <input type="password" id="confirm-password" required />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <Link to="/" className="btn-create">Already have an account?</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAccountForm;
