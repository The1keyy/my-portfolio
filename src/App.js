import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Keyshawn Jeannot</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#research">Research</Nav.Link>
            <Nav.Link href="#coursework">Coursework</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container style={{ paddingTop: "80px" }}>
        {/* About Me Section */}
        <section id="about" className="text-center">
          <img 
            src="/profile.jpg" 
            alt="Keyshawn Jeannot" 
            className="rounded-circle mb-3" 
            width="200"
          />
          <h1>👋 Hi there, I'm Keyshawn!</h1>
          <p>
            I’m a tech professional passionate about using technology to drive positive change. 
            From enhancing user experiences to solving real-world problems, I thrive on building 
            solutions that make a difference.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-center">🚀 Projects</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/event-planner.jpg" />
                <Card.Body>
                  <Card.Title>Event Planner App</Card.Title>
                  <Card.Text>
                    A collaborative platform for event management and scheduling.
                  </Card.Text>
                  <a href="https://github.com/The1keyy/event-planner" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    GitHub Repo
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/birthday-memory.jpg" />
                <Card.Body>
                  <Card.Title>Happy Birthday Memory Grid</Card.Title>
                  <Card.Text>
                    An interactive web app with animations and a dynamic photo grid.
                  </Card.Text>
                  <a href="https://github.com/The1keyy/memory-grid" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    GitHub Repo
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-center">💼 Experience</h2>
          <ul className="timeline">
            <li>
              <h4>Software Engineer Intern</h4>
              <p>Company Name – Summer 2023</p>
              <p>Worked on cloud-based applications, optimized APIs, and enhanced system security.</p>
            </li>
            <li>
              <h4>Technical Research Assistant</h4>
              <p>University Name – 2022-2023</p>
              <p>Assisted in AI research, developing machine learning models for data processing.</p>
            </li>
          </ul>
        </section>

        {/* Research Section */}
        <section id="research">
          <h2 className="text-center">🔬 Research</h2>
          <p className="text-center">Because we're working on it! 😉</p>
        </section>

        {/* Coursework Section */}
        <section id="coursework">
          <h2 className="text-center">📚 Coursework</h2>
          <ul>
            <li>CS 149 Parallel Computing</li>
            <li>EE 180 Digital Systems Architecture</li>
            <li>CS 143 Compilers</li>
            <li>CS 144 Networking</li>
            <li>CS 161 Algorithms</li>
            <li>CS 111 Operating Systems</li>
            <li>CS 106B Programming Abstractions in C++</li>
            <li>Deep Learning Specialization - Coursera</li>
            <li>PSYCH 1 Introduction to Psychology</li>
          </ul>
        </section>
      </Container>
    </>
  );
}

export default App;
