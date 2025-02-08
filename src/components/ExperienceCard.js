import React from 'react';
import '../styles.css';

export const ExperienceCard = ({ experiences }) => (
    <div className="card experience-card">
      <h3>Experience</h3>
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-item">
            <div className="company-logo">
              <img src="/api/placeholder/32/32" alt={exp.company} />
            </div>
            <div className="experience-details">
              <h4>{exp.company}</h4>
              <p>{exp.role}</p>
              <span>{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );