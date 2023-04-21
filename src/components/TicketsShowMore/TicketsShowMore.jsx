import React from 'react';
import { useDispatch } from 'react-redux';

import sm from './TicketsShowMore.module.scss';

const TicketsShowMore = () => {
  const dispatch = useDispatch();
  const addListTickets = () => {
    dispatch({ type: 'ADD_COUNT', payload: 5 });
  };
  return (
    <div className={sm.ticketsshowmore} onClick={addListTickets}>
      <button className={sm.ticketsshowmore__btn}>
        <span>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
      </button>
    </div>
  );
};

export default TicketsShowMore;
