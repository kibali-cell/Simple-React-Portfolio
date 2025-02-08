import React from 'react';
import '../index.css';
import '../styles.css';

export const Header = ({ name, title, onCoffeeClick }) => (
  <header className="header">
    <div className="header-content">
      <div className="profile">
        <div className="profile-image">
          <img src="/api/placeholder/48/48" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </div>
      <button className="coffee-button" onClick={onCoffeeClick}>
        Buy Me A Coffee
      </button>
    </div>
  </header>
);