import React from 'react';
import './Profile.css';
import Filter from './Filter';
import { connect } from 'react-redux';
import { filterProjects, clearProjects, fadeOutProjects } from '../actions/projects';
import { bindActionCreators } from 'redux';

class Profile extends React.Component {
  render() {

    return (
      <div className="profile-container animated fadeIn">
        <a href="https://www.linkedin.com/in/rodolfopalacios" target="_blank">
          <img src="/img/profile.png" className="profile-image" alt="Profile"/>
          <div className="profile-name">Rodolfo Palacios</div>
          <div className="profile-title">Software Developer</div>
        </a>
        <Filter
          filterProjects={this.props.filterProjects}
          clearProjects={this.props.clearProjects}
          fadeOutProjects={this.props.fadeOutProjects}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: bindActionCreators(filterProjects, dispatch),
    clearProjects: bindActionCreators(clearProjects, dispatch),
    fadeOutProjects: bindActionCreators(fadeOutProjects, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile);
