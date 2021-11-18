import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">CRUD Café</Navbar.Brand>
        <Nav className="me-auto">
          <Link className='nav-link' to='/'>Inicio</Link>
          <Link className='nav-link' to='/productos'>Productos</Link>
          <Link className='nav-link' to='/error404'>Extra</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
