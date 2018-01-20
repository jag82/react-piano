import React, { Component } from 'react';
import './Keyboard.css';
import pianoSketch from '../images/piano-sketch.jpg';

const IMAGE_MARGIN_WIDTH = 0.07;
const IMAGE_MARGIN_HEIGHT = 0.20;
const IMAGE_BLACK_HALF_WIDTH = 0.35;
const IMAGE_BLACK_HEIGHT = 0.70;
const IMAGE_WHITE_COUNT = 22;
const IMAGE_NOTE_ORDER = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ];

class Keyboard extends Component {

  constructor(props) {
  	super(props);

  	this.state =  {
      dimensions: {},
      padding: 0,
  		date: new Date(), 
  		counter: 0
  	};
    this.onImgLoad = this.calculateDimensions.bind(this);
  }


  componentDidMount() {
  	// this.timerId = setInterval(() => this.tick(), 1000);
    window.addEventListener("resize", this.calculateDimensions.bind(this));
  }

  componentWillUnmount() {
  	// clearInterval(this.timerId);
    window.removeEventListener("resize", this.calculateDimensions.bind(this));
  }

  calculateDimensions() {
    this.setState({
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight * 0.5
      }
    });
  }

  render() {

    const keyboard = {
      width: (this.state.dimensions.width*1 - this.state.padding*1),
      height: (this.state.dimensions.height*1 - this.state.padding*1),
      x: this.state.dimensions.width * IMAGE_MARGIN_WIDTH,
      y: this.state.dimensions.height * IMAGE_MARGIN_HEIGHT
    }


    const key = {
      width: this.state.dimensions.width / 25.63,
      height: this.state.dimensions.height / 1.67
    }


    const htmlKeys = [];
    
    let whiteNote, blackNote;
    const top = {};
    const bottom = {};
    const black = {};

    for(let i = 0; i < IMAGE_WHITE_COUNT; i++) {
      
      whiteNote = IMAGE_NOTE_ORDER[i % IMAGE_NOTE_ORDER.length];

      if (whiteNote === 'C' || whiteNote === 'F') {
        top.x = 0;
        top.w = key.width * (1 - IMAGE_BLACK_HALF_WIDTH);
      } else if (whiteNote === 'D' || whiteNote === 'G' || whiteNote === 'A') {
        top.x = key.width * IMAGE_BLACK_HALF_WIDTH;
        top.w = key.width * (1 - IMAGE_BLACK_HALF_WIDTH * 2);
      } else if (whiteNote === 'E' || whiteNote === 'B') {
        top.x = key.width * IMAGE_BLACK_HALF_WIDTH;
        top.w = key.width * (1 - IMAGE_BLACK_HALF_WIDTH);
      }

      top.y = 0;
      top.h = key.height * IMAGE_BLACK_HEIGHT;
      bottom.x = 0;
      bottom.y = top.h;
      bottom.w = key.width;
      bottom.h = key.height - top.h;

      //white key (top+bottom)
      htmlKeys.push(
        <div 
          key={i} 
          className="key white active" 
          data-note={whiteNote} 
          style={{ left: keyboard.x + (i * key.width)+'px', top: keyboard.y+'px', width: key.width+'px', height: key.height+'px' }}
        >
          <div className="top" style={{ left: top.x+'px', top: top.y+'px', width: top.w+'px', height: top.h+'px' }}></div>
          <div className="bottom" style={{ left: bottom.x+'px', top: bottom.y+'px', width: bottom.w+'px', height: bottom.h+'px' }}></div>
          {i}
        </div>
      );



      //black key
      if (whiteNote === 'D' || whiteNote === 'E' || whiteNote === 'G' || whiteNote === 'A' || whiteNote === 'B') {
        blackNote = whiteNote + 'b';

        black.x = keyboard.x + (i * key.width) - (IMAGE_BLACK_HALF_WIDTH * key.width);
        black.y = keyboard.y;
        black.w = key.width * (IMAGE_BLACK_HALF_WIDTH * 2);
        black.h = top.h;

        htmlKeys.push(
          <div
            key={i+.5}
            className="key black active"
            data-note={blackNote} 
            style={{ left: black.x+'px', top: black.y+'px', width: black.w+'px', height: black.h+'px' }}
          >
            {i+.5}
          </div>
        );
      }

    }

    return (
      <div className="Keyboard">
          <img 
            onLoad={this.onImgLoad} 
            src={pianoSketch} 
            style={{width: keyboard.width+'px', height: keyboard.height+'px'}} 
            className="keyboard" 
            alt="keyboard" 
          />

          {htmlKeys}
          
      </div>
    );
  }
}

export default Keyboard;


