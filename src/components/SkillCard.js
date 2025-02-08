import React from 'react';
import '../styles.css';

export const SkillCard = ({ category, icon, items }) => (
    <div className="skill-category">
      <div className="skill-header">
        {icon}
        <h4>{category}</h4>
      </div>
      {items.map((skill, i) => (
        <div key={i} className="skill-item">
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div 
              className="skill-progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );