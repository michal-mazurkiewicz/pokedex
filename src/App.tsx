import React, { useEffect } from "react";
import "./assets/styles/App.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getInitialData } from "./store/thunks/pokemon-thunk";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Topbar } from "./components/Topbar";
import { Pokedex } from "./components/Pokedex";
import { selectAppState } from "./store/reducers/app-reducer";
import { ViewState } from "./entities/app-entities";
import { PokePagination } from "./components/PokePagination";
import { Search } from "./components/Search";

function App() {
  const dispatch = useAppDispatch();
  const { viewState, error } = useAppSelector(selectAppState)

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch])

  return (
    <Container fluid>
      <Topbar />
      {error && <Alert variant={'danger'}>{error}</Alert>}
      <Container>
        <Row>
          <PokePagination />
          <Search/>
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
