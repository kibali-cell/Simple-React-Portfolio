import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import '../styles.css';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "fullstack",
    description: "Built a scalable e-commerce platform handling 10k+ daily users",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    metrics: "Improved load time by 40%, increased conversion by 25%",
    // Using a CSS gradient via inline style.
    gradient: "linear-gradient(to right, #6a11cb, #2575fc)",
    link: "https://project1.com"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "frontend",
    description: "Real-time analytics dashboard for business metrics",
    tech: ["Next.js", "TypeScript", "D3.js"],
    metrics: "Processing 1M+ data points in real-time",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)",
    link: "https://project2.com"
  },
  {
    id: 3,
    title: "API Gateway Service",
    category: "backend",
    description: "Microservices API gateway handling authentication",
    tech: ["Node.js", "Redis", "Docker"],
    metrics: "99.99% uptime, 50ms average response time",
    gradient: "linear-gradient(to right, #f7971e, #ffd200)",
    link: "https://project3.com"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(
    (project) => activeTab === 'all' || project.category === activeTab
  );

  return (
    <AnimatedSection delay={300}>
      <div className="card bg-dark text-white mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title m-0">Projects</h5>
            <div>
              {['all', 'frontend', 'backend', 'fullstack'].map((tab) => (
                <button
                  key={tab}
                  className={`btn btn-sm mx-1 ${activeTab === tab ? 'btn-secondary' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="list-group">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="list-group-item bg-transparent border-0 p-0 mb-2"
                onClick={() =>
                  setSelectedProject(selectedProject === project.id ? null : project.id)
                }
                style={{ cursor: 'pointer' }}
              >
                <div className="p-3 rounded" style={{ background: project.gradient }}>
                  <h5 className="mb-2">{project.title}</h5>
                  {selectedProject === project.id && (
                    <div>
                      <p>{project.description}</p>
                      <div className="mb-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="badge bg-secondary me-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="small">{project.metrics}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        View Project <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
