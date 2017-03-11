import React from 'react';
import './Filter.css';
import _ from 'lodash';
import colors from '../utils/colors.js';

const filterColors = {
  laptop: { color: colors[0]},
  'paint-brush': { color: colors[1]},
  cutlery: { color: colors[2]},
  music: { color: colors[3]},
  'video-camera': { color: colors[4]},
  wrench: { color: colors[5]}
};

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategories: [],
      styles: {
        laptop: null,
        'paint-brush': null,
        cutlery: null,
        music: null,
        'video-camera': null,
        wrench: null
      }
    };
  }

  filterProjects(category) {
    let activeCategories = this.state.activeCategories;
    activeCategories = _.xor(activeCategories, [category]);

    let styles = this.state.styles;
    styles[category] = styles[category] ? null : filterColors[category];

    this.setState({styles, activeCategories});

    this.props.fadeOutProjects();
    setTimeout(() => {
      this.props.clearProjects();
      this.props.filterProjects(activeCategories);  
    }, 500);
    
  }

  render() {
    return (
      <div className="filter-container">
        <i style={this.state.styles.laptop} className="fa fa-laptop" onClick={() => {this.filterProjects('laptop');}}></i>
        <i style={this.state.styles['paint-brush']} className="fa fa-paint-brush" onClick={() => {this.filterProjects('paint-brush');}}></i>
        <i style={this.state.styles.cutlery} className="fa fa-cutlery" onClick={() => {this.filterProjects('cutlery');}}></i>
        <i style={this.state.styles.music} className="fa fa-music" onClick={() => {this.filterProjects('music');}}></i>
        <i style={this.state.styles['video-camera']} className="fa fa-video-camera" onClick={() => {this.filterProjects('video-camera');}}></i>
        <i style={this.state.styles.wrench} className="fa fa-wrench" onClick={() => {this.filterProjects('wrench');}}></i>
      </div>
    );
  }
}

module.exports = Filter;
