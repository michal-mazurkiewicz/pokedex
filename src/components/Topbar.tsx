import React from "react";
import logo from '../assets/pictures/logo.svg'
import { Container, Nav, Navbar } from "react-bootstrap";


export function Topbar(){

    return(
    <Navbar bg="primary" variant="dark" style={{marginBottom: '25px'}}>
    <Container>
      <Navbar.Brand href="#home"><img
      alt=""
      src={logo}
      width="100"
      height="50"
      className="d-inline-block align-top"
    /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}