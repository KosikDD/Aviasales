const initialState = {
  sort: 'price',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
