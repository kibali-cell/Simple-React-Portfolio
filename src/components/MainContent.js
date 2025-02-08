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
            Hello! I’m Jane Doe, a passionate Software Engineer and Full-Stack Developer based in New York.
            I specialize in creating dynamic and responsive web applications with a focus on performance
            and user experience.
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
          {[
            {
              id: 1,
              title: "E-Commerce Platform",
              description: "A modern e-commerce website with a seamless shopping experience.",
              image: "https://via.placeholder.com/400x300?text=E-Commerce+Platform"
            },
            {
              id: 2,
              title: "Social Network App",
              description: "A social networking app connecting people worldwide.",
              image: "https://via.placeholder.com/400x300?text=Social+Network+App"
            },
            {
              id: 3,
              title: "Analytics Dashboard",
              description: "An interactive dashboard for data visualization and analysis.",
              image: "https://via.placeholder.com/400x300?text=Analytics+Dashboard"
            }
          ].map((project) => (
            <motion.div
              key={project.id}
              className="project-card col-md-6 col-lg-4"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-image gradient-overlay p-3">
                <img src={project.image} alt={project.title} className="img-fluid mb-2" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/projects" className="btn btn-outline-light">View All Projects</a>
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
              company: 'Tech Innovations Inc.',
              role: 'Senior Software Engineer',
              period: '2022 - Present'
            },
            {
              company: 'Creative Solutions',
              role: 'Software Developer',
              period: '2019 - 2022'
            },
            {
              company: 'WebWorks Agency',
              role: 'Junior Developer',
              period: '2017 - 2019'
            }
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
