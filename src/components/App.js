import React, { Component } from 'react';
import Navigation from './Navigation';
import utils from '../utils/utils.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.isIE = utils.detectIE();
  }

  render() {
    if (this.isIE) {
      return <div className="main-is-ie">Get A Better Browser.</div>;
    }

    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
