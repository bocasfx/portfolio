import React from 'react';
import './ProjectList.css';
import { getProjects } from '../actions/projects';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import { bindActionCreators } from 'redux';
import colors from '../utils/colors';
import { changeHeaderColor } from '../actions/navigation';

class ProjectList extends React.Component {

  componentWillMount() {
    this.props.getProjects();
  }

  renderProjects() {
    return this.props.projects.map((project, idx) => {
      let color = colors[idx % colors.length];
      return (
        <ProjectListItem
          project={project}
          key={idx}
          id={idx}
          color={color}
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
    getProjects: bindActionCreators(getProjects, dispatch),
    changeHeaderColor: bindActionCreators(changeHeaderColor, dispatch)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProjectList);
