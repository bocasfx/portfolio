import _ from 'lodash';
import projects from '../store/projects';

const filterProjects = (state, categories) => {
  if (!categories.length) {
    return projects;
  }

  return _.filter(projects, (project) => {
    return (_.indexOf(categories, project.icon) >= 0);
  });
};

export default (state = projects, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return state;
    case 'FILTER_PROJECTS':
      let newState = filterProjects(state, action.categories);
      return newState.map((project) => {
        project.transition = 'fadeIn';
        return project;
      });
    case 'CLEAR_PROJECTS':
      return [];
    case 'FADE_OUT_PROJECTS':
      return state.map((project) => {
        project.transition = 'fadeOut';
        return project;
      });
    default:
      return state;
  }
};
