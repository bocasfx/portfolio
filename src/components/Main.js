import React from 'react';
import Profile from './Profile.js';
import ProjectList from './ProjectList.js';
import './Main.css';
// import projectProvider from '../projects/project-provider.js';
import utils from '../utils/utils.js';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   projects: projectProvider.getActiveProjects()
    // };

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
