import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { activateProject } from '../actions/projects';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { changeHeaderColor } from '../actions/navigation';

class Project extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkStyle: {
        borderTopColor: 'gainsboro'
      }
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(event) {
    event.preventDefault();
    this.setState({
      linkStyle: {
        borderTopColor: this.props.project.color
      }
    });
  }
  
  onMouseOut(event) {
    event.preventDefault();
    this.setState({
      linkStyle: {
        borderTopColor: 'gainsboro'
      }
    });
  }

  componentWillMount() {
    this.props.activateProject(parseInt(this.props.params.projectId, 10));
  }

  componentWillReceiveProps(props) {
    this.props.changeHeaderColor(props.project.color);
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

  renderLinks() {
    let linkClass = 'transition2 project-link hover-' + this.props.project.color;
    return this.props.project.links.map((link, idx) => {
      return (
        <div className="project-links-container" key={idx} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
          <span className="transition2 project-link-decorator" style={this.state.linkStyle}></span>
          <a className={linkClass} href={link.href} target="_blank">{link.label}</a>
        </div>
      );
    });
  }

  renderVideos() {
    return this.props.project.videos.map((video, idx) => {
      let src = video + '?color=ffffff&title=0&byline=0&portrait=0';
      return (
        <div className="project-iframe project-iframe-16x9" key={idx}>
          <iframe
            src={src}
            height="500"
            frameBorder="0"></iframe>
        </div>
      );
    });
  }

  render() {
    if (!this.props.project) {
      return null;
    }
    let titleClass = 'project-title ' + this.props.project.color;

    return (
      <div className="project-container animated fadeIn">
        <div className="project-left">
          <div className={titleClass}>{this.props.project.title}</div>
          <div className="project-info">{this.renderInfo()}</div>
          {this.renderLinks()}
        </div>
        <div className="project-right">
          <div className="project-video-container">{this.renderVideos()}</div>
          <div className="project-image-container">{this.renderImages()}</div>
        </div>
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
    activateProject: bindActionCreators(activateProject, dispatch),
    changeHeaderColor: bindActionCreators(changeHeaderColor, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
