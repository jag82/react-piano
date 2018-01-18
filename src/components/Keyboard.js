import React, { Component } from 'react';
import './Keyboard.css';
import pianoSketch from '../images/piano-sketch.jpg';

class Keyboard extends Component {
  constructor(props) {
  	super(props);
  	this.state =  { 
  		date: new Date(), 
  		counter: 0
  	};
  	this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  	this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
  	clearInterval(this.timerId);
  }

  tick() {
  	this.setState({
  		date: new Date()
  	});
  }

  handleClick(e) {
  	e.preventDefault();
  	this.setState((prevState, props) => ({
  		counter: prevState.counter + 1
  	}));
  }

  render() {
    return (
      <div className="Keyboard">
          <img src={pianoSketch} className="piano-sketch" alt="keyboard" />
          <div>keys: {this.props.keys}</div>
          <div>{this.state.date.toLocaleTimeString()}</div>
          <div onClick={this.handleClick}>counter: {this.state.counter}</div>

      </div>
    );
  }
}

export default Keyboard;


