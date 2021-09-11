import React from 'react';
import logo from './logo.svg';
import './assets/styles/App.scss';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectAppState } from './store/reducers/app-reducer';
import { getInitialData } from './store/thunks/pokemon-thunk';
import { Button, Spinner } from 'react-bootstrap';
import { ViewState } from './entities/app-entities';

function App() {
  const {viewState} = useAppSelector(selectAppState)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {viewState}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
        <Button variant="light" onClick={() => dispatch(getInitialData())}>Load Data</Button> 
        {viewState === ViewState.LOADING && <Spinner animation="border" variant="primary" />}
      </header>
    </div>
  );
}

export default App;
