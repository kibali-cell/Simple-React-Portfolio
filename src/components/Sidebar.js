// src/components/Sidebar.js
import React from 'react';
import { motion } from 'framer-motion';

function Sidebar({ openContactModal }) {
  return (
    <div className="sidebar floating-sidebar">
      {/* Profile Section */}
      <div className="profile text-center">
        <img
          src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile"
          className="profile-img"
        />
        <h2 className="h5 mt-2">Jane Doe</h2>
        <p>Full-Stack Developer</p>
      </div>

      {/* Navigation (in-page links) */}
      <nav className="nav flex-column">
        <motion.a href="#about" className="nav-link" whileHover={{ x: 5 }}>
          About
        </motion.a>
        <motion.a href="#projects" className="nav-link" whileHover={{ x: 5 }}>
          Projects
        </motion.a>
        <motion.a href="#experience" className="nav-link" whileHover={{ x: 5 }}>
          Experience
        </motion.a>
        <motion.a href="#skills" className="nav-link" whileHover={{ x: 5 }}>
          Skills
        </motion.a>
      </nav>

      {/* Actions */}
      <div className="sidebar-actions">
        <button className=" contact-btn" onClick={openContactModal}>
        <span>Contact Me</span>
          <i className="bi bi-arrow-up-right"></i>
        </button>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
