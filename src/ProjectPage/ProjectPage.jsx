import NavBar from "../NavBar/NavBar";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./projectPage.css";
import reactPhoto from "../assets/react.svg";
import { Row, Col, Container } from "react-bootstrap";

function ProjectPage({ ...props }) {
  return (
    <>
      <NavBar />
      <div className="project-text">
        <h1>Project Page</h1>
        <Container>
          <Row className="cards">
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project"
                backgroundColor="darkblue"
                link="https://www.google.com/"
                description="This is a test project."
                image={reactPhoto}
                {...props}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project Two"
                backgroundColor="darkred"
                link="https://www.google.com/"
                description="This is a second test project."
                image={reactPhoto}
                {...props}
              />
            </Col>
          </Row>
          <Row className="cards">
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project"
                backgroundColor="darkblue"
                link="https://www.google.com/"
                description="This is a test project."
                image={reactPhoto}
                {...props}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project Two"
                backgroundColor="darkred"
                link="https://www.google.com/"
                description="This is a second test project."
                image={reactPhoto}
                {...props}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectPage;
