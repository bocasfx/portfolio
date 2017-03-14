import React from 'react';
import './ProjectListItem.css';
import { Link } from 'react-router';

class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      borderStyle: {
        borderTopColor: this.props.project.color,
        opacity: 0
      }
    };
  }

  onMouseOver(event) {
    event.preventDefault();
    this.setState({
      borderStyle: {
        borderTopColor: this.props.project.color,
        opacity: 1
      }
    });
  }
  
  onMouseOut(event) {
    event.preventDefault();
    this.setState({
      borderStyle: {
        opacity: 0
      }
    });
  }

  render() {
    let liClass = 'project-list-item-li transition2 animated ' + this.props.project.transition + ' hover-' + this.props.project.color;
    let iconClass = 'transition2opacity fa fa-' + this.props.project.icon;
    let bubbleClass = 'transition1 bubble-container background-' + this.props.project.color;
    let projectUrl = '/projects/' + this.props.project.id;
    return (
      <div className="project-list-item" onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
        <Link to={projectUrl}>
          <li className={liClass}>
            <div className="project-list-item-triangle transition2" style={this.state.borderStyle}></div>
            <div className="project-list-item-title">{this.props.project.title}</div>
            <div className="project-list-item-info">
              <i className={iconClass}></i>
            </div>
            <div className={bubbleClass}>{this.props.project.description}</div>
          </li>
        </Link>
      </div>
    );
  }
}

export default ProjectListItem;
