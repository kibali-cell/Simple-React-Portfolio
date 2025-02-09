// src/App.js
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import ContactModal from './components/ContactModal';
import './styles.css';

function AppContent({ darkMode, toggleDarkMode, showContact, openContactModal, closeContactModal }) {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Global Dark/Light Toggle at Top Right */}
      <div className="global-toggle" onClick={toggleDarkMode}>
        {darkMode ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
      </div>

      {/* Sidebar appears only on Home */}
      {!isProjectsPage && <Sidebar openContactModal={openContactModal} />}

      {/* Content area uses full width on Projects page */}
      <div className={isProjectsPage ? "content full-width" : "content"}>
        {isProjectsPage && (
          <div className="back-button mb-3">
            <Link to="/" className="back-link">
              <i className="bi bi-arrow-left"></i> Back
            </Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <ContactModal show={showContact} onClose={closeContactModal} />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showContact, setShowContact] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const openContactModal = () => setShowContact(true);
  const closeContactModal = () => setShowContact(false);

  return (
    <Router>
      <AppContent
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        showContact={showContact}
        openContactModal={openContactModal}
        closeContactModal={closeContactModal}
      />
    </Router>
  );
}

export default App;
