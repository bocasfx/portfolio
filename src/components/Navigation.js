import React from 'react';
import './Navigation.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activateProject, filterProjects } from '../actions/projects';
import { changeHeaderColor } from '../actions/navigation';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import colors from '../utils/colors';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goAbout = this.goAbout.bind(this);
  }

  goToPrev() {
    let projectId = 0;
    if (this.props.project) {
      projectId = this.getProjectId() + 1;
    }
    this.updateProject(projectId);
  }
  
  goToNext() {
    let projectId = 0;
    if (this.props.project) {
      projectId = this.getProjectId() - 1;
    }
    this.updateProject(projectId);
  }

  getProjectId() {
    let projectId = 0;
    if (this.props.project) {
      projectId = this.props.project.id;
    }
    return projectId;
  }

  updateProject(projectId) {
    this.props.changeHeaderColor(colors[projectId % colors.length]);
    projectId = (this.props.projectCount + projectId) % this.props.projectCount;
    this.props.activateProject(projectId);
    browserHistory.push('/projects/' + projectId);
  }

  goHome() {
    browserHistory.push('/');
    this.props.filterProjects([]);
    this.props.activateProject(null);
  }

  goAbout() {
    browserHistory.push('/about');
    this.props.activateProject(0);
  }

  render() {
    let color = this.props.navigation.color;
    let navigationClass = 'navigation-about transition2 background-' + color + ' animated fadeIn ' + color;
    let containerClass = 'transition2 navigation-container background-' + color;
    return (
      <div>
        <div className={containerClass}>
          <div className="transition3 navigation-hamburger"><i className="fa fa-angle-down"></i></div>
          <div onClick={this.goAbout} className={navigationClass}>About</div>
          <div onClick={this.goHome} className="transition3 navigation-home">Home</div>
        </div>
        <div className="transition3 navigation-prev-next">
          <div className="navigation-prev" onClick={this.goToPrev}>&lt; Prev</div>
          <div className="navigation-next" onClick={this.goToNext}>Next &gt;</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    navigation: state.navigation,
    projectCount: state.projects.length,
    project: _.filter(state.projects, 'active')[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateProject: bindActionCreators(activateProject, dispatch),
    filterProjects: bindActionCreators(filterProjects, dispatch),
    changeHeaderColor: bindActionCreators(changeHeaderColor, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
