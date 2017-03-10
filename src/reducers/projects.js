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

export default function getProjects(state = projects, action) {
  switch (action.type) {
    case 'GET_PROJECTS':
      return state;
    case 'FILTER_PROJECTS':
      return filterProjects(state, action.categories);
    default:
      return state;
  }
};
