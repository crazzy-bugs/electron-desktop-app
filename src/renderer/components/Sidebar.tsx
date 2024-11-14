import React from 'react';
import './Sidebar.css';
import icon from '../../../assets/icon.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={icon} alt="App Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/scan">Scan</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
