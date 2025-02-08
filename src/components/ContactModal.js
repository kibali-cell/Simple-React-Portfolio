
import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

const ContactModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    // Add your form submission logic here
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Get in Touch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {status && (
          <Alert variant={status.type} onClose={() => setStatus(null)} dismissible>
            {status.message}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Send Message
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;