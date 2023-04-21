const initialState = {
  count: 5,
};

export const ticketsShowMoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return { count: state.count + action.payload };
    case 'RESET_COUNT':
      return { count: action.payload };

    default:
      return state;
  }
};
