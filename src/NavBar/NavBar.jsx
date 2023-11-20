import { Container, Nav, Navbar } from "react-bootstrap";
import "./navBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-container">
        <Nav>
          <Nav.Link className="nav-item" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-item" href="/aboutme">
            About Me
          </Nav.Link>
          <Nav.Link className="nav-item" href="/projectpage">
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
