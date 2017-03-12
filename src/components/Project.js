import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { activateProject } from '../actions/projects';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class Project extends React.Component {

  componentWillMount() {
    this.props.activateProject(parseInt(this.props.params.projectId, 10));
  }

  componentWillReceiveProps(props) {
    this.props.activateProject(parseInt(props.params.projectId, 10));
  }

  renderImages() {
    return this.props.project.images.map((img, idx) => {
      return (
        <img src={img} key={idx} alt="Project"/>
      );
    });
  }

  renderInfo() {
    return this.props.project.info.map((line, idx) => {
      return (
        <p key={idx}>{line}</p>
      );
    });
  }

  render() {
    if (!this.props.project) {
      return null;
    }
    let titleClass = 'project-title ' + this.props.color;
    return (
      <div className="project-container animated fadeIn">
        <div className="project-left">
          <div className={titleClass}>{this.props.project.title}</div>
          <div className="project-info">{this.renderInfo()}</div>
        </div>
        <div className="project-images-container">{this.renderImages()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let activeProject = _.filter(state.projects, 'active')[0];
  return {
    project: activeProject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateProject: bindActionCreators(activateProject, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
