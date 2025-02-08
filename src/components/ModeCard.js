import React from 'react';
import '../styles.css';

export const ModeCard = () => (
    <div className="card mode-card">
      <h3>Mode</h3>
      <div className="availability">
        <div className="status-indicator"></div>
        <p>Available for freelance</p>
      </div>
      <p>Open to full-time positions and freelance projects</p>
      <button className="contact-button">
        Contact Me <span>→</span>
      </button>
    </div>
  );