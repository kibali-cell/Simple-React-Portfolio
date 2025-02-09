// src/components/ContactModal.js
import React from 'react';
import { motion } from 'framer-motion';

function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-dialog"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside
      >
        <div className="modal-header">
          <h5>Contact Me</h5>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactModal;
