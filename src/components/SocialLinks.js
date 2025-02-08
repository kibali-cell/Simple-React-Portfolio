import React from 'react';
import '../styles.css';

export const SocialLinks = ({ links }) => (
    <div className="card social-card">
      <h3>Get in touch</h3>
      <div className="social-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className={`social-icon ${link.platform}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );