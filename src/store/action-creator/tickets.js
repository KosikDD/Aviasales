export const requestTickets = (dispatch, id) => {
  dispatch({ type: 'FETH_TIKETS' });
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((tickets) => {
      if (tickets.status === 500) {
        requestTickets(dispatch, id);
      } else if (tickets.res === 'ok') {
        return tickets.json();
      } else {
        dispatch({ type: 'FETH_TIKETS_ERROR', payload: true });
        throw new Error('Ошибка');
      }
    })
    .then((tickets) => {
      if (tickets.stop) {
        dispatch({ type: 'FETH_TIKETS_SUCCESS' });
        return;
      }
      if (tickets.tickets.length) {
        dispatch({ type: 'FETH_TIKETS_SUCCESS_PART', payload: tickets.tickets });
        requestTickets(dispatch, id);
      }
    })
    .catch((err) => err);
};

export const asyncSetTickets = (id) => {
  return (dispatch) => {
    requestTickets(dispatch, id);
  };
};

const plainOptions = ['Без пересадок', '1 Пересадка', '2 Пересадки', '3 Пересадки'];
export const onChange = (list) => {
  return (dispatch) => {
    dispatch({ type: 'CHECKED_LIST', payload: list });
    dispatch({ type: 'CHECK_ALL', payload: list.length === plainOptions.length });
  };
};

export const onCheckAllChange = (e) => {
  return (dispatch) => {
    dispatch({ type: 'CHECKED_LIST', payload: e.target.checked ? plainOptions : [] });
    dispatch({ type: 'CHECK_ALL', payload: e.target.checked });
  };
};

export const setFilter = (sort) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SORT', payload: sort });
    dispatch({ type: 'RESET_COUNT', payload: 5 });
  };
};
