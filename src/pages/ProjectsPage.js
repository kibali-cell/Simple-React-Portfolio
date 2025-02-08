import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { projects } from '../data/portfolioData';

const ProjectsPage = () => {
  return (
    <Container className="projects-page py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Projects</h1>
        <Link to="/" className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2"></i>Back to Home
        </Link>
      </div>

      <Row className="g-4">
        {projects.map((project) => (
          <Col key={project.id} md={6} lg={4}>
            <Card className="project-card h-100">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="tech-stack mb-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} bg="secondary" className="me-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent">
                <div className="d-flex gap-2">
                  <a href={project.demo} className="btn btn-primary btn-sm flex-grow-1">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn btn-outline-primary btn-sm flex-grow-1">
                    <i className="bi bi-github me-2"></i>Code
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;