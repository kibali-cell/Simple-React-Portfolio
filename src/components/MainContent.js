// src/components/MainContent.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MainContent = ({ setActiveSection }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = { threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  return (
    <div className="main-content p-4">
      {/* About Section */}
      <motion.section 
        id="about"
        className="content-section mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-card p-4">
          <h2>About Me</h2>
          <p>
            Hey there! I'm a Software Engineer and Full-Stack Developer passionate about creating engaging digital experiences. With a strong background in both front-end and back-end development, I design and build applications with a focus on clean design, user experience, and performance.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="content-section mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
                <p>Short description of the project.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        className="content-section mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <div className="timeline position-relative ps-3">
          {[
            {
              company: 'Spiraxy Studios',
              role: 'Software Engineer',
              period: '2024 - Present'
            },
            // Add more experiences as needed
          ].map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item mb-4 position-relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content p-3">
                <h3 className="h5">{exp.company}</h3>
                <p className="role mb-1">{exp.role}</p>
                <span className="period small">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="content-section mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
