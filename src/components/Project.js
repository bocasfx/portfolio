import React from 'react';
import './Project.css';
import { connect } from 'react-redux';
import { changeHeaderColor } from '../actions/navigation';

class Project extends React.Component {

  componentWillMount() {
    this.props.dispatch(changeHeaderColor('darkorange'));
  }

  onClick() {
    this.props.dispatch(changeHeaderColor('dodgerblue'));
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
