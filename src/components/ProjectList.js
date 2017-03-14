import React from 'react';
import './ProjectList.css';
import { getProjects } from '../actions/projects';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import { bindActionCreators } from 'redux';

class ProjectList extends React.Component {

  componentWillMount() {
    this.props.getProjects();
  }

  renderProjects() {
    return this.props.projects.map((project, idx) => {
      return (
        <ProjectListItem
          project={project}
          key={idx}
          id={idx}
          changeHeaderColor={this.props.changeHeaderColor}/>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="project-list">
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjects, dispatch)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProjectList);
