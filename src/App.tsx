import React, { useEffect, useState } from "react";
import "./assets/styles/App.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectAppState } from "./store/reducers/app-reducer";
import { getInitialData } from "./store/thunks/pokemon-thunk";
import { Col, Container, Row } from "react-bootstrap";
import { Topbar } from "./components/Topbar";
import { Pokedex } from "./components/Pokedex";

function App() {
  const [open, setOpen] = useState(false);
  const { viewState } = useAppSelector(selectAppState);
  const dispatch = useAppDispatch();

  const openPokedex = async () => {
    await dispatch(getInitialData());
    setOpen(!open);
  };

  useEffect(() => {
    openPokedex()
  }, [])
  
  return (
    <Container fluid>
      <Topbar />
      <Container>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Pokedex />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
