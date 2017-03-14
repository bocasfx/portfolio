import colors from '../utils/colors';

const initialState = {
  color: colors[Math.floor(Math.random() * colors.length)],
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
