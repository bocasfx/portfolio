const initialState = {
  color: 'plum',
  projectId: 0
};

export default function changeHeaderColor(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_HEADER_COLOR':
      return Object.assign({}, state, { color: action.color });
    default:
      return state;
  }
};
