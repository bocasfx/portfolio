import React from 'react';
import './ProjectList.css';
import { getActiveProjects } from '../actions/projects';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';

class ProjectList extends React.Component {

  componentWillMount() {
    this.props.dispatch(getActiveProjects());
  }

  renderProjects() {
    return this.props.projects.map((project, idx) => {
      return (
        <ProjectListItem project={project} key={idx}/>
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
  console.log(state);
  return { projects: state.projects };
};

export default connect(mapStatetoProps)(ProjectList);
