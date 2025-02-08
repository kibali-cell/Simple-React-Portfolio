// components/Sidebar.js
import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  return (
    <div className="sidebar-container">
      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="profile-section text-center"
      >
        <div className="profile-image-container mx-auto">
          <div className="profile-image">
            <div className="status-indicator"></div>
          </div>
        </div>
        <h1>Your Name</h1>
        <p className="title">Software Engineer &amp; Full-stack Developer</p>
        <div className="location-chip">
          <i className="bi bi-geo-alt"></i>
          Tanzania
        </div>
      </motion.div>

      {/* Primary Navigation */}
      <nav className="primary-nav mt-4">
        <motion.a 
          href="#about"
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="bi bi-person"></i> About
        </motion.a>
        <motion.a 
          href="#projects"
          className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveSection('projects')}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="bi bi-grid"></i> Projects
        </motion.a>
        <motion.a 
          href="#experience"
          className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveSection('experience')}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="bi bi-briefcase"></i> Experience
        </motion.a>
        <motion.a 
          href="#skills"
          className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveSection('skills')}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="bi bi-tools"></i> Skills
        </motion.a>
      </nav>

      {/* Availability & Contact */}
      <div className="availability-section mt-4 text-center">
        <span className="status-badge">
          <span className="pulse"></span>
          Available for Freelance
        </span>
        <p>Open to Web Development Projects</p>
        <motion.button 
          className="contact-btn btn btn-outline-light"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.button>
      </div>

      {/* Dark/Light Mode Toggle */}
      <div className="toggle-mode mt-4 text-center">
        <button onClick={toggleDarkMode} className="btn btn-secondary">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
