import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="text-center">
        <h2>🚀 Projects</h2>
        <Container>
          <Row className="justify-content-center">
            {/* Project 1 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/event-planner.jpg" />
                <Card.Body>
                  <Card.Title>Event Planner App</Card.Title>
                  <Card.Text>
                    A collaborative platform for event management and scheduling.
                  </Card.Text>
                  <a href="https://github.com/your-repo" target="_blank" className="btn btn-dark">
                    GitHub Repo
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Project 2 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/birthday-memory.jpg" />
                <Card.Body>
                  <Card.Title>Happy Birthday Memory Grid</Card.Title>
                  <Card.Text>
                    An interactive web app with animations and a dynamic photo grid.
                  </Card.Text>
                  <a href="https://github.com/your-repo" target="_blank" className="btn btn-dark">
                    GitHub Repo
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section (Timeline) */}
      <section id="experience">
        <h2>💼 Experience</h2>
        <Container>
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
        </Container>
      </section>
    </>
  );
}

export default App;

