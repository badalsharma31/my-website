import React from "react";
import {Navbar, Nav, Form,FormControl, Button} from "react-bootstrap";
import "./Navbar.css"
function NavBar() {
  return (
    <div className="row">
      <div className="col-md-10 mx-auto">
        <Navbar expand="lg">
          <Navbar.Brand href="home">Badal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="home" >Home</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="about">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavBar;