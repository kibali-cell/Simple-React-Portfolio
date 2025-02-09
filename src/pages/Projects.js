// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const imageURL =
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Detailed description for project one. This description might be very long and should be truncated if it exceeds a certain length.",
      techStack: ["React", "Node.js", "Express"],
      github: "https://github.com/yourusername/project-one",
      viewLink: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Detailed description for project two.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/project-two",
      viewLink: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Detailed description for project three.",
      techStack: ["Python", "Django"],
      github: "https://github.com/yourusername/project-three",
      viewLink: "#"
    }
    // More projects...
  ];

  return (
    <div className="projects-page container py-5">
      <h1 className="mb-4">All Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="col-md-6 col-lg-4 mb-4"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="project-card">
              {/* Top Section */}
              <div className="project-top">
                <img src={imageURL} alt={project.title} className="project-img" />
                <button className="view-btn" onClick={() => window.open(project.viewLink, "_blank")}>
                  View
                </button>
              </div>
              <div className="project-title">{project.title}</div>
              {/* Tech Stack Section */}
              <div className="project-tech">
                <div className="tech-label">
                  <i className="bi bi-code-slash"></i> Tech stack
                </div>
                <ul className="tech-list">
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              {/* GitHub Link Section */}
              <div
                className="project-github"
                onClick={() => window.open(project.github, "_blank")}
              >
                <i className="bi bi-github"></i>
                <span className="github-text">GitHub</span>
                <span className="arrow">&gt;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
