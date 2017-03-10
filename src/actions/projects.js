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
