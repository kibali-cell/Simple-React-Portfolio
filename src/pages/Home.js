// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const imageURL =
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "CSS",
    "HTML",
    "Express",
    "MongoDB",
    "Git"
  ];

  return (
    <div className="home container">
      {/* About Section */}
      <section id="about" className="section mb-5">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          About Me
        </motion.h1>
        <p>
          Hi, I'm Jane Doe – a passionate Full-Stack Developer dedicated to building scalable and engaging web applications.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <motion.h2 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            Featured Projects
          </motion.h2>
          <div className="view-all-container">
            <Link to="/projects" className="view-all-link">
              <i className="bi bi-arrow-right-circle"></i> View All Projects
            </Link>
          </div>
        </div>
        <div className="row">
          {/* Three Featured Projects */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={imageURL} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text">A modern e-commerce platform with seamless UX. Come work with us</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={imageURL} className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">A dynamic social networking app connecting people.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={imageURL} className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">An interactive analytics dashboard for real-time insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section mb-5">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h5>Senior Developer at ABC Company</h5>
              <p className="date">2020 - Present</p>
              <p>Leading development teams to build high-performance web applications.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5>Frontend Developer at XYZ Solutions</h5>
              <p className="date">2017 - 2020</p>
              <p>Crafted engaging user interfaces for dynamic web applications.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5>Intern at Startup Inc.</h5>
              <p className="date">2016 - 2017</p>
              <p>Assisted in developing innovative features for the company’s main product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section mb-5">
        <h2>Skills</h2>
        <ul className="skill-list" style={{ listStyle: "none", padding: "0", display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="bi bi-dot" style={{ fontSize: "1.5rem", color: "var(--secondary-text)" }}></i>
              <span style={{ color: "var(--primary-text)", fontSize: "1rem" }}>{skill}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
