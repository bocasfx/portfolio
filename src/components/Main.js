import React from 'react';
import Profile from './Profile.js';
import ProjectList from './ProjectList.js';
import './Main.css';
import utils from '../utils/utils.js';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.isIE = utils.detectIE();
  }

  render() {
    if (this.isIE) {
      return <div className="main-is-ie">Get A Better Browser.</div>;
    }

    return (
      <div className="main-container">
        <Profile/>
        <ProjectList/>
      </div>
    );
  }
}

module.exports = Portfolio;
