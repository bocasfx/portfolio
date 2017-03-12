import React from 'react';
import './Navigation.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activateProject } from '../actions/projects';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.updateProject = this.updateProject.bind(this);
  }

  goToPrev() {
    this.updateProject(this.getProjectId() - 1);
  }
  
  goToNext() {
    this.updateProject(this.getProjectId() + 1);
  }

  getProjectId() {
    let projectId = 0;
    if (this.props.project) {
      projectId = this.props.project.id;
    }
    return projectId;
  }

  updateProject(projectId) {
    projectId = (this.props.projectCount + projectId) % this.props.projectCount;
    this.props.activateProject(projectId);
    browserHistory.push('/projects/' + projectId);
  }

  render() {
    let navigationClass = 'transition1s background-' + this.props.navigation.color + ' navigation-home animated fadeIn';
    return (
      <div>
        <div className="navigation-container">
          <Link to="/" className={navigationClass}></Link>
          <div className="transition2 navigation-prev-next">
              <div className="navigation-prev" onClick={this.goToPrev}>&lt; Prev</div>
              <div className="navigation-next" onClick={this.goToNext}>Next &gt;</div>
          </div>
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
    activateProject: bindActionCreators(activateProject, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

