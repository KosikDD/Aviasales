const initialState = {
  ticketsData: [],
  loading: false,
  error: null,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETH_TIKETS':
      return { loading: true, error: null, ticketsData: [...state.ticketsData] };

    case 'FETH_TIKETS_SUCCESS_PART':
      return { loading: state.loading, error: null, ticketsData: [...state.ticketsData, ...action.payload] };

    case 'FETH_TIKETS_SUCCESS':
      return { loading: false, error: null, ticketsData: [...state.ticketsData] };

    case 'FETH_TIKETS_ERROR':
      return { loading: false, error: action.payload, ticketsData: [] };

    default:
      return state;
  }
};
