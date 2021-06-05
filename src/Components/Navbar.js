import React from "react";
import {Navbar, Nav, Form,FormControl, Button} from "react-bootstrap"
function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="link">Blog</Nav.Link>
            <Nav.Link href="link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;