import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { changeColor } from '../actions/navigation';

class Project extends React.Component {

  componentWillMount() {
    this.props.dispatch(changeColor('darkorange'));
  }

  onClick() {
    this.props.dispatch(changeColor('dodgerblue'));
  }

  render() {
    return (
      <div className="project-container">
        <button onClick={this.onClick.bind(this)}>Change Color</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Project);
