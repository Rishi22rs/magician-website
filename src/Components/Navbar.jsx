import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/james-chan-logo-zip-file/png/logo-no-background.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar
      className="fixed-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height="50" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tv">Television appearances</Nav.Link>
            <Nav.Link href="#birthday">Birthday parties</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
