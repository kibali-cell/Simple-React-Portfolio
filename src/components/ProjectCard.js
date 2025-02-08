import React from 'react';
import '../styles.css';

export const ProjectCard = ({ project, isExpanded, onToggle }) => (
    <div 
      className={`project-card ${project.gradient}`}
      onClick={onToggle}
    >
      <div className="project-content">
        <h3>{project.title}</h3>
        {isExpanded && (
          <div className="project-details">
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="metrics">{project.metrics}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        )}
      </div>
    </div>
  );