import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useAppSelector } from './store/hooks';
import { selectAppState } from './store/reducers/app-reducer';

function App() {
  const {viewState} = useAppSelector(selectAppState)

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
      </header>
    </div>
  );
}

export default App;
