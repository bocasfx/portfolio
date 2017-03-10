const initialState = {
  color: 'plum'
};

export default function changeHeaderColor(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_HEADER_COLOR':
      return { color: action.color };
    default:
      return state;
  }
};
