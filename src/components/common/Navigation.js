import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">CRUD Café</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#extra">Extra</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
