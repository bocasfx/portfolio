const initialState = {
  color: 'plum'
};

export default function changeColor(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { color: action.color };
    default:
      return state;
  }
};
