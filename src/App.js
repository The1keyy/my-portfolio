import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

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

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Company Name",
    date: "Summer 2023",
    description: "Worked on cloud-based applications, optimized APIs, and enhanced system security.",
  },
  {
    title: "Technical Research Assistant",
    company: "University Name",
    date: "2022-2023",
    description: "Assisted in AI research, developing machine learning models for data processing.",
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
          <Nav className="ms-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#research">Research</Nav.Link>
            <Nav.Link href="#coursework">Coursework</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container fluid className="px-4" style={{ paddingTop: "90px" }}>
        
        {/* About Me Section */}
        <motion.section
          id="about"
          className="py-5 d-flex align-items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <img 
                src="/profile.jpg" 
                alt="Keyshawn Jeannot" 
                className="rounded-circle shadow-lg" 
                width="200"
              />
            </Col>
            <Col md={8}>
              <h1>👋 Hi there, I'm Keyshawn!</h1>
              <p>
                I’m a tech professional passionate about using technology to drive positive change. 
                From enhancing user experiences to solving real-world problems, I thrive on building 
                solutions that make a difference.
              </p>
            </Col>
          </Row>
        </motion.section>
        
        <hr />

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center">🚀 Projects</h2>
          <Row className="justify-content-center">
            {projects.map((project, index) => (
              <Col md={4} className="mb-4" key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
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
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>
        
        <hr />

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center">💼 Experience</h2>
          <Row className="justify-content-center">
            {experiences.map((exp, index) => (
              <Col md={5} className="mb-4" key={index}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="shadow-lg border-0">
                    <Card.Body>
                      <Card.Title>{exp.title}</Card.Title>
                      <p><strong>{exp.company}</strong> - {exp.date}</p>
                      <Card.Text>{exp.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>
        
        <hr />

        {/* Research Section */}
        <motion.section
          id="research"
          className="py-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>🔬 Research</h2>
          <p>Because we're working on it! 😉</p>
        </motion.section>
        
        <hr />

        {/* Coursework Section */}
        <motion.section
          id="coursework"
          className="py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center">📚 Coursework</h2>
          <Row>
            <Col md={6}>
              <h4>Computer Science</h4>
              <ul>
                {csCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <h4>Other Courses</h4>
              <ul>
                {otherCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </motion.section>
        
      </Container>
    </>
  );
}

export default App;
