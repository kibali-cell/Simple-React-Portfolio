// src/components/Sidebar.js
import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  return (
    <div className="sidebar-container p-4">
      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="profile-section text-center mb-4"
      >
        <div className="profile-image-container mx-auto mb-3">
          <div className="profile-image">
            <div className="status-indicator"></div>
          </div>
        </div>
        <h1 className="h4">Your Name</h1>
        <p className="mb-1">Software Engineer &amp; Full-stack Developer</p>
        <div className="location-chip">
          <i className="bi bi-geo-alt"></i> Tanzania
        </div>
      </motion.div>

      {/* Primary Navigation */}
      <nav className="primary-nav mb-4">
        {[
          { id: 'about', icon: 'bi bi-person', label: 'About' },
          { id: 'projects', icon: 'bi bi-grid', label: 'Projects' },
          { id: 'experience', icon: 'bi bi-briefcase', label: 'Experience' },
          { id: 'skills', icon: 'bi bi-tools', label: 'Skills' }
        ].map((item) => (
          <motion.a 
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item d-block mb-2 p-2 ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <i className={item.icon}></i> {item.label}
          </motion.a>
        ))}
      </nav>

      {/* Availability & Contact */}
      <div className="availability-section text-center mb-4">
        <span className="status-badge d-inline-flex align-items-center mb-2">
          <span className="pulse me-1"></span> Available for Freelance
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
      <div className="toggle-mode text-center">
        <button onClick={toggleDarkMode} className="btn btn-secondary">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
