import React, { Component } from 'react';
import './App.css';

import Key from './components/Key';
import Keyboard from './components/Keyboard';
import Chord from './components/Chord';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Key />
        <Keyboard keys="abc" />
        <Chord />
      </div>
    );
  }
}

export default App;
