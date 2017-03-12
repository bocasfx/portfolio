import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { getProject } from '../actions/projects';
import { bindActionCreators } from 'redux';

class Project extends React.Component {

  componentWillMount() {
    this.props.getProject(parseInt(this.props.params.projectId, 10));
  }

  componentWillReceiveProps(props) {
    this.props.getProject(parseInt(props.params.projectId, 10));
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
  return {
    project: state.projects[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: bindActionCreators(getProject, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
