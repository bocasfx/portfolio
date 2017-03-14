import React from 'react';
import Profile from './Profile.js';
import ProjectList from './ProjectList.js';
import './Main.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Profile/>
        <ProjectList/>
      </div>
    );
  }
}

module.exports = Portfolio;
