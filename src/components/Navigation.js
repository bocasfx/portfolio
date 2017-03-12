import React from 'react';
import './Navigation.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProject } from '../actions/projects';
import { browserHistory } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  goToPrev() {
    let projectId = this.props.project.id - 1;
    this.props.getProject(projectId);
    browserHistory.push('/projects/' + projectId);
  }
  
  goToNext() {
    let projectId = this.props.project.id + 1;
    this.props.getProject(projectId);
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
    project: state.projects[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: bindActionCreators(getProject, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

