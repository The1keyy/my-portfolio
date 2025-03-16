import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Footer from "./Footer";  

// List of projects with details (Easily extendable)
const projects = [
  {
    title: "Meetitude",
    description: "A web application designed to simplify event planning and scheduling. Users can create events, generate unique invite links, and collect availability from attendees. The platform suggests optimal meeting times based on schedules.",
    img: "photos/meetitude.png",
    link: "https://meetitude.com/index.html",
  },
  {
    title: "Happy Birthday Memory Grid",
    description: "An interactive web app featuring animations and a dynamic photo grid, enhancing user engagement with a personalized experience.",
    img: "photos/memorygrid.png",
    link: "https://the1keyy.github.io/sterlo-birthday-gift/",
  },
];

// Work experience details (Now includes images)
const experiences = [
  {
    title: "Help Desk Engineer Intern",
    company: "University of Massachusetts Boston IT Department",
    date: "December 2024 - Present",
    description: "Provided technical support for students and faculty, troubleshooting software, network, and system issues with a 90% resolution rate. Diagnosed errors using Terminal and PowerShell, improving response time.",
    img: "photos/helpdesk.png", // Ensure this image is in your "photos" folder
  },
  {
    title: "Freelance Developer",
    company: "Remote",
    date: "December 2024 - Present",
    description: "Designed, developed, and deployed multiple responsive websites, ensuring mobile compatibility and user-friendly interfaces using JavaScript and React.js.",
    img: "photos/freelance.png", // Ensure this image is in your "photos" folder
  },
];

// Leadership and Community Engagement Section
const leadership = [
  {
    title: "National Society of Black Engineers (NSBE) - President",
    description: "Revitalized the NSBE chapter, organized STEM workshops, and secured guest speakers to enhance career opportunities for members.",
    img: "photos/nsbe.png",
  },
  {
    title: "ColorStack Member",
    description: "Engaged in mentorship and career development programs, participating in virtual networking events to expand knowledge in software engineering.",
    img: "photos/colorstack.png",
  },
];

// Coursework categorized into two sections
const csCourses = [
  "Introduction to Computing",
  "Intermediate Computing with Data Structures and Algorithms",
  "Programming in C",
  "Applied Discrete Mathematics",
];

const otherCourses = [
  "Fullstack Bootcamp - Udemy",
  "Introduction to Psychology",
  "Critical Thinking",
];

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">Keyshawn Jeannot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#leadership">Leadership</Nav.Link>
              <Nav.Link href="#coursework">Coursework</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Container */}
      <Container fluid className="px-4" style={{ paddingTop: "90px" }}>

        {/* About Me Section */}
        <motion.section id="about" className="py-5 d-flex align-items-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Row className="align-items-center">
            <Col md={4} xs={12} className="text-center mb-3">
              <img src="photos/me.jpeg" alt="Keyshawn Jeannot" className="rounded-circle shadow-lg img-fluid" width="200" />
            </Col>
            <Col md={8} xs={12}>
              <h1>Hi there, I'm Keyshawn</h1>
              <p>Passionate about tech, solving real-world problems, and creating innovative solutions. From front-end development to backend logic, I thrive on building applications that enhance user experiences.</p>
            </Col>
          </Row>
        </motion.section>

        <hr />

        {/* Projects Section */}
        <motion.section id="projects" className="py-5">
          <h2 className="text-center">Projects</h2>
          <Row className="justify-content-center">
            {projects.map((project, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                <Card className="shadow-lg border-0">
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark">View Project</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/* Experience Section with Images */}
        <motion.section id="experience" className="py-5">
          <h2 className="text-center">Experience</h2>
          <Row className="justify-content-center">
            {experiences.map((exp, index) => (
              <Col md={5} sm={12} className="mb-4" key={index}>
                <Card className="shadow-lg border-0">
                  <Card.Img variant="top" src={exp.img} />
                  <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <p><strong>{exp.company}</strong> - {exp.date}</p>
                    <Card.Text>{exp.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/* Leadership Section */}
        <motion.section id="leadership" className="py-5">
          <h2 className="text-center">Leadership & Community Engagement</h2>
          <Row className="justify-content-center">
            {leadership.map((role, index) => (
              <Col md={5} sm={12} className="mb-4" key={index}>
                <Card className="shadow-lg border-0">
                  <Card.Img variant="top" src={role.img} />
                  <Card.Body>
                    <Card.Title>{role.title}</Card.Title>
                    <Card.Text>{role.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/* Coursework Section */}
        <motion.section id="coursework" className="py-5">
          <h2 className="text-center">Coursework</h2>
          <Row>
            <Col md={6}>
              <h4>Computer Science</h4>
              <ul>{csCourses.map((course, index) => <li key={index}>{course}</li>)}</ul>
            </Col>
            <Col md={6}>
              <h4>Other Courses</h4>
              <ul>{otherCourses.map((course, index) => <li key={index}>{course}</li>)}</ul>
            </Col>
          </Row>
        </motion.section>

      </Container>

      <Footer />
    </>
  );
}

export default App;
