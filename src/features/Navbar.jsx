import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {Form,FormControl, Button} from "react-bootstrap"
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/">Home</Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Link to="/about"> About</Link>

            <NavDropdown title="Search" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#Details/3.1">Details</NavDropdown.Item> */}
              <NavDropdown.Item href="#findPlayer/3.1"></NavDropdown.Item>
              <Link to="/findPlayer/3.1">Find Player</Link>
              <NavDropdown.Item href="#playerForm/3.2"></NavDropdown.Item>
              <NavDropdown.Divider />
              <Link to="/playerForm/3.2">Player Form</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
