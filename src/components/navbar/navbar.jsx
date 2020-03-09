import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavigationBar= () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">NoteBook</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link><Link to='/signup'>Signup</Link></Nav.Link>
        <Nav.Link><Link to='/signin'>Signin</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
