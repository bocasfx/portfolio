import React from 'react';
import './Filter.css';
import _ from 'lodash';
import colors from '../utils/colors';
import categories from '../utils/categories';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    let state = {
      styles: {},
      activeCategories: []
    };
    this.filterColors = {};

    categories.forEach((category, idx) => {
      this.filterColors[category] = {
        color: colors[idx]
      };
      state.styles[category] = null;
    });

    this.state = state;

    this.renderIcons = this.renderIcons.bind(this);
  }

  filterProjects(category) {
    let activeCategories = this.state.activeCategories;
    activeCategories = _.xor(activeCategories, [category]);

    let styles = this.state.styles;
    styles[category] = styles[category] ? null : this.filterColors[category];

    this.setState({styles, activeCategories});

    this.props.fadeOutProjects();
    setTimeout(() => {
      this.props.clearProjects();
      this.props.filterProjects(activeCategories);  
    }, 500);
    
  }

  renderIcons() {
    return categories.map((category, idx) => {
      let catClass = 'transition2 fa fa-' + category + ' hover-' + this.filterColors[category].color;
      return (
        <i
          key={idx}
          style={this.state.styles[category]}
          className={catClass}
          onClick={() => {this.filterProjects(category);}}
        ></i>
      );
    });
  }

  render() {
    return (
      <div className="filter-container">
        {this.renderIcons()}
      </div>
    );
  }
}

module.exports = Filter;
