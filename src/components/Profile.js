import React from 'react';
import './Profile.css';
import Filter from './Filter';
import { connect } from 'react-redux';
import { filterProjects } from '../actions/projects';
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
        <Filter filterProjects={this.props.filterProjects}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: bindActionCreators(filterProjects, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile);
