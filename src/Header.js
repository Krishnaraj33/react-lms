import React, { Component } from 'react';
import './styles/index.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <h1 className="logo">LiMan</h1>
          <div className="admin-login">
            <input type="text" placeholder="Admin Username" />
            <input type="password" placeholder="Admin Password" />
            <button className="btn-admin">Admin Login</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
