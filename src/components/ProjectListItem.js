import React from 'react';
import './ProjectListItem.css';
// import Bubble from './bubble.jsx';

class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      borderTopColor: this.props.color,
      opacity: 0
    };
  }

  onClick() {
    this.props.changeHeaderColor(this.props.color);
  }

  onMouseOver(event) {
    event.preventDefault();
    this.setState({
      borderStyle: {
        borderTopColor: this.props.color,
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
    let liClass = 'project-list-item-li animated fadeIn hover-' + this.props.color;
    let iconClass = 'fa fa-' + this.props.project.icon;
    return (
      <div className="project-list-item" onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
        <li className={liClass}>
          <div className="project-list-item-triangle" style={this.state.borderStyle}></div>
          <div className="project-list-item-title">{this.props.project.title}</div>
          <div className="project-list-item-info">
            <i className={iconClass}></i>
          </div>
        </li>
      </div>
    );
  }
}

export default ProjectListItem;
