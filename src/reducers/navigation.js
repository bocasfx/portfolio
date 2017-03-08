export default function changeColor(state = 'plum', action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return Object.assign({}, state, {
        color: action.color
      });
    default:
      return state;
  }
};
