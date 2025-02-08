import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ProjectsPage from './pages/ProjectsPage';
import ContactModal from './components/ContactModal';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  return (
    <Router>
      <div className={`portfolio-app ${darkMode ? 'dark' : 'light'}`}>
        {/* Background Layers */}
        <div className="gradient-bg">
          <div className="noise-overlay"></div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container-fluid">
                <div className="row">
                  {/* Floating Sidebar for large screens */}
                  <div className="d-none d-lg-block">
                    <Sidebar
                      activeSection={activeSection}
                      setActiveSection={setActiveSection}
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                      openContactModal={openContactModal}
                    />
                  </div>
                  {/* Main Content – leave a left margin for the floating sidebar */}
                  <div className="col-12" style={{ marginLeft: '280px' }}>
                    <MainContent setActiveSection={setActiveSection} />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <ContactModal show={showContactModal} onClose={closeContactModal} />
      </div>
    </Router>
  );
};

export default App;
