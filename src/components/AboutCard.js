import React from 'react';
import '../styles.css';

export const AboutCard = ({ content }) => (
    <div className="card about-card">
      <h3>About</h3>
      <p>{content}</p>
    </div>
  );