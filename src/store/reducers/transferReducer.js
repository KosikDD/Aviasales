const initialState = {
  checkedList: [],
  indeterminate: false,
  checkAll: false,
};

export const transfersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKED_LIST':
      return { checkedList: [...action.payload], checkAll: false };

    case 'CHECK_ALL':
      return { checkAll: action.payload, checkedList: [...state.checkedList] };

    default:
      return state;
  }
};
