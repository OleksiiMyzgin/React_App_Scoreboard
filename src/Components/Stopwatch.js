import React, { Component } from 'react';

export default class Stopwatch extends Component {
  constructor() {
    super();

    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    }
  }

  render() {
    var seconds = Math.floor(this.state.elapsedTime / 1000);
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{seconds}</div>
        { this.state.running ? 
          <button onClick={ this._onStop.bind(this) }>Stop</button> 
          : 
          <button onClick={ this._onStart.bind(this) }>Start</button>
        } 
        <button onClick={ this._onReset.bind(this) }>Reset</button>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(this._onTick.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  _onTick() {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }
    console.log('onTick');
  }

  _onStart() {
    this.setState({ 
      running: true,
      previousTime: Date.now(),
    });
  }

  _onStop() {
    this.setState({ running: false });
  }

  _onReset() {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });
  }
};