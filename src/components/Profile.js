import React from 'react';
import './Profile.css';
import Filter from './Filter';
import { connect } from 'react-redux';
import { filterProjects, clearProjects, fadeOutProjects } from '../actions/projects';
import { bindActionCreators } from 'redux';

class Profile extends React.Component {
  render() {
    let linkClass = this.props.color;
    let decoratorStyle = {
      borderTopColor: this.props.color
    };
    return (
      <div className="profile-container animated fadeIn">
        <a href="https://www.linkedin.com/in/rodolfopalacios" target="_blank" className={linkClass}>
          <img src="/img/profile.png" className="profile-image" alt="Profile"/>
          <div className="profile-name-container">
            <div className="transition2 profile-name-decorator" style={decoratorStyle}></div>
            <div className="transition2 profile-name">Rodolfo Palacios</div>
          </div>
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
  return {
    color: state.navigation.color
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: bindActionCreators(filterProjects, dispatch),
    clearProjects: bindActionCreators(clearProjects, dispatch),
    fadeOutProjects: bindActionCreators(fadeOutProjects, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile);
