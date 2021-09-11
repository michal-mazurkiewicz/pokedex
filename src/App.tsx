import React, { useEffect } from "react";
import "./assets/styles/App.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getInitialData } from "./store/thunks/pokemon-thunk";
import { Col, Container, Row } from "react-bootstrap";
import { Topbar } from "./components/Topbar";
import { Pokedex } from "./components/Pokedex";
import { selectAppState } from "./store/reducers/app-reducer";
import { ViewState } from "./entities/app-entities";
import { PokePagination } from "./components/PokePagination";

function App() {
  const dispatch = useAppDispatch();
  const { viewState } = useAppSelector(selectAppState)
  useEffect(() => {
    dispatch(getInitialData());
  }, [])

  return (
    <Container fluid>
      <Topbar />
      <Container>
        <Row>
          <PokePagination />
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            {viewState === ViewState.SUCCESS && <Pokedex />}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
