export const getProjects = () => {
  return {
    type: 'GET_PROJECTS'
  };
};

export const filterProjects = (categories) => {
  return {
    type: 'FILTER_PROJECTS',
    categories
  };
};

export const clearProjects = () => {
  return {
    type: 'CLEAR_PROJECTS'
  };
};

export const fadeOutProjects = () => {
  return {
    type: 'FADE_OUT_PROJECTS'
  };
};

export const activateProject = (id) => {
  return {
    type: 'ACTIVATE_PROJECT',
    id
  };
};
