// components/MainContent.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MainContent = ({ setActiveSection }) => {
  // Use IntersectionObserver to update the active section
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    const options = { threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  return (
    <div className="main-content">
      {/* About Section */}
      <motion.section 
        id="about"
        className="content-section mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-card p-4">
          <h2>About</h2>
          <p>
            Hey there! I'm a Software Engineer and Full-Stack Developer passionate about building engaging, interactive digital experiences. I always approach development with the user in mind.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="content-section mb-5"
      >
        <h2>Featured Projects</h2>
        <div className="projects-grid row g-4">
          {[1, 2, 3].map((project) => (
            <motion.div 
              key={project}
              className="project-card col-md-6 col-lg-4"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-image gradient-overlay p-3">
                <h3>Project {project}</h3>
                <p>Project Description</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        className="content-section mb-5"
      >
        <h2>Experience</h2>
        <div className="timeline">
          {[
            {
              company: 'Spiraxy Studios',
              role: 'Software Engineer',
              period: '2024 - Present'
            },
            // Additional experiences can be added here.
          ].map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content p-3">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <span className="period">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="content-section mb-5"
      >
        <div className="section-card p-4">
          <h2>Tech Stack</h2>
          <div className="skills-grid row g-3">
            {[
              'React', 'Node.js', 'Python', 'MongoDB',
              'TypeScript', 'AWS', 'Docker', 'Git'
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-chip col-6 col-md-3 text-center p-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MainContent;
