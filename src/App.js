import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Footer from "./Footer";  

// List of projects with details
const projects = [
  {
    title: "Event Planner App",
    description: "A collaborative platform for event management and scheduling.",
    img: "/event-planner.jpg",
    link: "https://github.com/The1keyy/event-planner",
  },
  {
    title: "Happy Birthday Memory Grid",
    description: "An interactive web app with animations and a dynamic photo grid.",
    img: "/birthday-memory.jpg",
    link: "https://github.com/The1keyy/memory-grid",
  },
];

// Work experience details (Corrected)
const experiences = [
  {
    title: "Help Desk Engineer Intern",
    company: "University of Massachusetts Boston IT Department",
    date: "December 2024 - Present",
    description: "Provided technical support for students and faculty, troubleshooting software, network, and system issues with a 90% resolution rate. Diagnosed errors using Terminal and PowerShell, improving response time.",
    img: "/photos/helpdesk.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Company Name",
    date: "Summer 2023",
    description: "Worked on cloud-based applications, optimized APIs, and enhanced system security.",
    img: "/photos/software_engineer.png",
  },
  {
    title: "Freelance Developer",
    company: "Remote",
    date: "December 2024 - Present",
    description: "Designed, developed, and deployed multiple responsive websites, ensuring mobile compatibility and user-friendly interfaces using JavaScript and React.js.",
    img: "/photos/freelance.png",
  },
];

// Leadership and Community Engagement Section (Corrected)
const leadership = [
  {
    title: "National Society of Black Engineers (NSBE) - President",
    description: "Revitalized the NSBE chapter, organized STEM workshops, and secured guest speakers to enhance career opportunities for members.",
    img: "/photos/nsbe.png",
  },
  {
    title: "ColorStack Member",
    description: "Engaged in mentorship and career development programs, participating in virtual networking events to expand knowledge in software engineering.",
    img: "/photos/colorstack.png",
  },
  {
    title: "Technical Research Assistant",
    company: "University Name",
    date: "2022-2023",
    description: "Assisted in AI research, developing machine learning models for data processing.",
    img: "/photos/research.png",
  },
];

// Coursework categorized into two sections
const csCourses = [
  "CS 149 Parallel Computing",
  "CS 143 Compilers",
  "CS 144 Networking",
  "CS 161 Algorithms",
  "CS 111 Operating Systems",
  "CS 106B Programming Abstractions in C++",
];

const otherCourses = [
  "Deep Learning Specialization - Coursera",
  "PSYCH 1 Introduction to Psychology",
  "ENGLISH 91 Creative Nonfiction",
  "FILMEDIA 50Q The Video Essay",
  "THINK 66 Design That Understands Us",
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
        <motion.section id="about" className="py-5 d-flex align-items-center">
          <Row className="align-items-center">
            <Col md={4} xs={12} className="text-center mb-3">
              <img src="/photos/me.jpeg" alt="Keyshawn Jeannot" className="rounded shadow-lg img-fluid" width="250" height="300" />
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                      GitHub Repo
                    </a>
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

      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
