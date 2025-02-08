// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`portfolio-app ${darkMode ? 'dark' : 'light'}`}>
      {/* Background layers */}
      <div className="gradient-bg">
        <div className="noise-overlay"></div>
      </div>

      <div className="container-fluid">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <MainContent setActiveSection={setActiveSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
