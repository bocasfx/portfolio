import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import colors from '../utils/colors.js';

const mainColor = colors[Math.floor(Math.random() * colors.length)];

class App extends Component {
  render() {
    return (
      <div>
        <Navigation color={mainColor}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
