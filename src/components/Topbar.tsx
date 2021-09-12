import React from "react";
import logo from '../assets/pictures/logo.svg'
import { Container, Navbar } from "react-bootstrap";
import { useAppDispatch } from "../store/hooks";
import { changePage } from "../store/thunks/pokemon-thunk";


export function Topbar(){
    const dispatch = useAppDispatch()
    return(
    <Navbar bg="primary" variant="dark" style={{marginBottom: '25px'}}>
    <Container>
      <Navbar.Brand href="#home" onClick={() => dispatch(changePage(1))}><img
      alt=""
      src={logo}
      width="100"
      height="50"
      className="d-inline-block align-top"
    /></Navbar.Brand>
    </Container>
  </Navbar>
  )
}