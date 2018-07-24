import * as React from 'react';
import './App.css';
import Game from './Game';

import logo from './logo.svg';

function App(props: {}) {
    return (
      <div className="App">
        <div className="container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Game className="Game" />
        </div>
      </div>
    );
}

export default App;
