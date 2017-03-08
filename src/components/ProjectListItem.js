import React from 'react';
// import colors from './colors.js';
import './ProjectListItem.css';
// import Bubble from './bubble.jsx';
import { changeColor } from '../actions/navigation';
import { connect } from 'react-redux';

class ProjectListItem extends React.Component {

  // componentWillReceiveProps(props) {
  //   this.setState({
  //     triangleStyle: {},
  //     project: props.project,
  //     color: colors[props.project.id % colors.length],
  //     projectUrl: '/projects/' + props.project.id
  //   });
  // }

  onClick() {
    this.props.dispatch(changeColor('dodgerblue'));
  }

  // onMouseOver() {
  //   this.setState({
  //     triangleStyle: {
  //       borderTopColor: this.state.color,
  //       opacity: 1
  //     }
  //   });
  // }

  // onMouseOut() {
  //   this.setState({
  //     triangleStyle: {}
  //   });
  // }

  render() {
    let liClass = 'project-list-item-li animated fadeIn hover-tomato';
    let iconClass = 'fa fa-laptop';
    return (
      <div className="project-list-item" onClick={this.onClick.bind(this)}>
        <li className={liClass}>
          <div className="project-list-item-triangle"></div>
          <div className="project-list-item-title">{this.props.project.title}</div>
          <div className="project-list-item-info">
            <i className={iconClass}></i>
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProjectListItem);

