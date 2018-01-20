import React, { Component } from 'react';
import './App.css';

import Key from './components/Key';
import Keyboard from './components/Keyboard';
import Chord from './components/Chord';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		keys: [ 'A', 'C', 'E' ]
  	}
  }
  render() {
    return (
      <div className="App">
        <Key />
        <Keyboard keys={this.state.keys} />
        <Chord />
      </div>
    );
  }
}

export default App;
