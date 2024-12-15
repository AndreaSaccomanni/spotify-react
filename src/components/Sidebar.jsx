import { Navbar, Nav, Button, Form, FormControl, Container } from "react-bootstrap";
import { FaHouseUser, FaBook } from "react-icons/fa";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar expand="md" className="navbar fixed-left flex-column align-items-start justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <Nav.Item as="li">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <FaHouseUser className="me-2 " /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <FaBook className="me-2 " /> Your Library
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Form className="mt-3">
                  <Form.Group className="input-group">
                    <FormControl type="text" placeholder="Search" aria-label="Search" />
                    <Button variant="outline-secondary" size="sm">
                      GO
                    </Button>
                  </Form.Group>
                </Form>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn d-flex flex-column mx-auto">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <Nav.Link href="#" className="d-inline">
              Cookie Policy
            </Nav.Link>{" "}
            |{" "}
            <Nav.Link href="#" className="d-inline">
              Privacy
            </Nav.Link>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
