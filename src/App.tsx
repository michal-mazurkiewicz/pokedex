import React, { useEffect } from "react";
import "./assets/styles/App.scss";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getInitialData } from "./store/thunks/pokemon-thunk";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { Topbar } from "./components/Topbar";
import { Pokedex } from "./components/Pokedex";
import { selectAppState } from "./store/reducers/app-reducer";
import { ViewState } from "./entities/app-entities";
import { PokePagination } from "./components/pokemon-list/PokePagination";
import { Search } from "./components/pokemon-list/Search";
import { Provider } from 'react-redux';
import store from './store/store';

const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export function App() {
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
        <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Search/>
          <PokePagination />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md="auto">
            {viewState === ViewState.LOADING && <Spinner animation="grow" variant="danger" />}
            {viewState === ViewState.SUCCESS && !error && <Pokedex />}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AppWrapper;
