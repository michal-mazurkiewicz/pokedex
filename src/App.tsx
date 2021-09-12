import React, { useEffect } from "react";
import "./assets/styles/App.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getInitialData } from "./store/thunks/pokemon-thunk";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Topbar } from "./components/Topbar";
import { Pokedex } from "./components/Pokedex";
import { selectAppState } from "./store/reducers/app-reducer";
import { ViewState } from "./entities/app-entities";
import { PokePagination } from "./components/pokemon-list/PokePagination";
import { Search } from "./components/pokemon-list/Search";
import { PokemonDetailsModal } from "./components/pokemon-details/PokemonDetailsModal";

function App() {
  const dispatch = useAppDispatch();
  const { viewState, error } = useAppSelector(selectAppState)

  useEffect(() => {
    dispatch(getInitialData());
  }, [])

  return (
    <Container fluid>
      <Topbar />
      {error && <Alert variant={'danger'}>{error}</Alert>}
      <Container>
        <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Search/>
          <PokePagination />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            {viewState === ViewState.SUCCESS && <Pokedex />}
          </Col>
        </Row>
      </Container>
      <PokemonDetailsModal/> 
    </Container>
  );
}
 
export default App;
