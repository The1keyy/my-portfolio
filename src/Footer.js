import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Footer component containing contact info and quick navigation links
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          {/* Contact Information Section */}
          <Col md={4} className="mb-3">
            <h5>Contact Me</h5>
            <p>Email: <a href="mailto:keyshawnjeannot2@gmail.com">keyshawnjeannot2@gmail.com</a></p>
            <p>
              {/* External links to LinkedIn and GitHub */}
              <a href="https://linkedin.com/in/keyshawnjeannot" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
              <a href="https://github.com/The1keyy" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
          </Col>

          {/* Quick Navigation Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {/* Internal page navigation links */}
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#coursework">Coursework</a></li>
            </ul>
          </Col>
        </Row>

        {/* Divider and Copyright Notice */}
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Keyshawn Jeannot. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;

