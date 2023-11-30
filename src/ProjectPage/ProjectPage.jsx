import NavBar from "../NavBar/NavBar";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./projectPage.css";
import photo from "../assets/react.svg";
import { Row, Col, Container } from "react-bootstrap";

function ProjectPage({ ...props }) {
  return (
    <>
      <NavBar />
      <div className="project-text">
        <Container>
          <Row className="cards">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project"
                backgroundColor="black"
                link="https://www.google.com/"
                description="This is a test project."
                image={photo}
                {...props}
              />
              <ProjectCard
                title="Test Project"
                backgroundColor="black"
                link="https://www.google.com/"
                description="This is a test project."
                image={photo}
                {...props}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <ProjectCard
                title="Test Project"
                backgroundColor="black"
                link="https://www.google.com/"
                description="This is a test project."
                image={photo}
                {...props}
              />
              <ProjectCard
                title="Test Project"
                backgroundColor="black"
                link="https://www.google.com/"
                description="This is a test project."
                image={photo}
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
