import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Footer from "./Footer";

// List of projects - Easily add more
const projects = [
  {
    title: "Meetitude",
    description: "A web app for event planning. Users create events, generate invite links, and collect availability. The app suggests the best meeting times.",
    img: "/photos/meetitude.png",
    link: "https://meetitude.com/index.html",
  },
  {
    title: "Happy Birthday Memory Grid",
    description: "An interactive birthday web app with animations and a dynamic photo grid to celebreate my firnd birthday.",
    img: "/photos/happy1.png",
    link: "https://the1keyy.github.io/sterlo-birthday-gift/",
  },
  {
    title: "Personalized birthday website",
    description: "This project is a personalized birthday website created to celebrate my friend 21 birthday. It includes a thoughtful message, interactive elements, and special features like confetti animations, sound preferences, and a custom-designed theme",
    img: "/photos/happy2.png",
    link: "https://the1keyy.github.io/brenda-birthday/",
  },
];

// Work Experience - Ensure images exist in the "photos" directory
const experiences = [
  {
    title: "Help Desk Engineer Intern",
    company: "University of Massachusetts Boston IT Dept.",
    date: "Dec 2024 - Present",
    description: "Provided tech support to students & faculty, troubleshooting software, network, and system issues with a 90% resolution rate.",
    img: "/photos/boston.png",
  },
  {
    title: "Freelance Developer",
    company: "Remote",
    date: "Dec 2024 - Present",
    description: "Built multiple responsive websites, ensuring mobile compatibility & user-friendly interfaces with JavaScript & React.js.",
    img: "/photos/soon.png",
  },
];

// Leadership & Community Engagement
const leadership = [
  {
    title: "National Society of Black Engineers - President",
    description: "As President, I revitalized the NSBE chapter at UMass Boston after a 2-year hiatus, organized STEM workshops, and led chapter operations, including meeting coordination and member engagement initiatives.",
    img: "/photos/nsbe.png",
  },
  {
    title: "ColorStack Member",
    description: "Engaged in mentorship and networking events to expand knowledge in software engineering.",
    img: "/photos/colorstack.png",
  },
  {
    title: "Adage",
    description: "The ADAGE Program at UMB provides access to professional development resources across various tech-related fields, including IT, Cybersecurity, Coding, and AI. The program has also collaborated with major brands like Apple to offer specialized training, such as coding in Swift.",
    img: "/photos/adage.jpeg",
  },
];

// Coursework Section
const csCourses = ["Introduction to Computing", "Data Structures & Algorithms", "Programming in C", "Discrete Mathematics"];
const otherCourses = ["Fullstack Bootcamp - Udemy", "Introduction to Psychology", "Critical Thinking"];

function App() {
  return (
    <>
      {/* ✅ Navbar - Stays fixed for easy access */}
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

      {/* ✅ Main Content Container */}
      <Container fluid className="px-4" style={{ paddingTop: "90px" }}>
        
        {/* ✅ About Me Section */}
        <motion.section 
          id="about" 
          className="py-5 d-flex align-items-center" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <Row className="align-items-center">
            <Col md={4} xs={12} className="text-center mb-3">
              <img src="/photos/me.jpeg" alt="Keyshawn Jeannot" className="rounded shadow-lg img-fluid" width="250" />
            </Col>
            <Col md={8} xs={12}>
              <h1>Welcome to my page! I'm Keyshawn, explore my journey in tech and the projects </h1>
              <p>I love problem-solving, and tech is one of the best ways to do it. I don’t see technology as a way to make the world perfect, but as a tool to tackle real challenges and build solutions that actually make a difference. With tech evolving so fast, history is being made right before our eyes—I’m just grateful to be part of this journey and experience it firsthand.

At first, I thought the only way to help the world was by becoming a doctor, but as I grew, I realized that technology has the power to change lives too. Whether it's creating impactful software, building tools that improve daily life, or just making things more efficient, tech gives me the ability to contribute in ways I never imagined.

So here I am, exploring, learning, and building—one project at a time.</p>
            </Col>
          </Row>
        </motion.section>

        <hr />

        {/*  Projects Section */}
        <motion.section id="projects" className="py-5">
          <h2 className="text-center mb-4">Projects</h2>
          <Row className="justify-content-center">
            {projects.map((project, index) => (
              <Col md={4} sm={6} xs={12} className="mb-4 d-flex" key={index}>
                <Card className="shadow-lg border-0 flex-fill">
                  <Card.Img variant="top" src={project.img} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-auto">View Project</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/* Experience Section */}
        <motion.section id="experience" className="py-5">
          <h2 className="text-center mb-4">Experience</h2>
          <Row className="justify-content-center">
            {experiences.map((exp, index) => (
              <Col md={5} sm={12} className="mb-4 d-flex" key={index}>
                <Card className="shadow-lg border-0 flex-fill">
                  <Card.Img variant="top" src={exp.img} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{exp.title}</Card.Title>
                    <p><strong>{exp.company}</strong> - {exp.date}</p>
                    <Card.Text className="flex-grow-1">{exp.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/*  Leadership Section */}
        <motion.section id="leadership" className="py-5">
          <h2 className="text-center mb-4">Leadership & Community Engagement</h2>
          <Row className="justify-content-center">
            {leadership.map((role, index) => (
              <Col md={5} sm={12} className="mb-4 d-flex" key={index}>
                <Card className="shadow-lg border-0 flex-fill">
                  <Card.Img variant="top" src={role.img} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{role.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{role.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        <hr />

        {/* Coursework Section */}
        <motion.section id="coursework" className="py-5">
          <h2 className="text-center mb-4">Coursework</h2>
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;