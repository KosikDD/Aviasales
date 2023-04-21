import React from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../store/hooks/useAction';

import FilterStyles from './Filter.module.scss';

const Filter = () => {
  const { setFilter } = useActions();
  const { sort } = useSelector((state) => state.sort);
  const isActive = (active) => (active === sort ? ` ${FilterStyles.filter__active}` : '');
  return (
    <div className={FilterStyles.filter}>
      <button className={FilterStyles.filter__btn + isActive('price')} onClick={() => setFilter('price')}>
        Самый дешевый
      </button>
      <button className={FilterStyles.filter__btn + isActive('fast')} onClick={() => setFilter('fast')}>
        Самый быстрый
      </button>
      <button className={FilterStyles.filter__btn + isActive('optimal')} onClick={() => setFilter('optimal')}>
        Оптимальный
      </button>
    </div>
  );
};

export default Filter;
