import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Header from '../Header/Header';
import Transfer from '../Transfer/Transfer';
import Filter from '../Filter/Filter';
import TicketsList from '../TicketsList/TicketsList';
import TicketsShowMore from '../TicketsShowMore/TicketsShowMore';
import { useActions } from '../../store/hooks/useAction';
import { getFiltredTickets, transfersSort } from '../../Utils/ticketsfilter';
import AviasalesApi from '../../service/aviasalesAPI';

import AppStyles from './App.module.scss';

const AviaAPI = new AviasalesApi();

function App() {
  const { ticketsData, loading, error } = useSelector((state) => state.ticketsData);
  const { checkedList } = useSelector((state) => state.transfersReducer);
  const { count } = useSelector((state) => state.count);
  const { sort } = useSelector((state) => state.sort);
  const { asyncSetTickets } = useActions();

  const transfers = transfersSort(checkedList);

  useEffect(() => {
    AviaAPI.getSearchId().then((data) => {
      asyncSetTickets(data.searchId);
    });
  }, []);

  const filterTicketsDataOne = useMemo(() => getFiltredTickets(ticketsData, transfers, sort), [transfers.length, sort]);

  const filterTicketsData = filterTicketsDataOne.slice(0, count);

  return (
    <div className={AppStyles.App}>
      <Header></Header>
      <main className={AppStyles.App_main}>
        <Transfer></Transfer>
        <div className={AppStyles.Content_wrapper}>
          <Filter></Filter>
          {!error ? (
            <div>
              {loading && filterTicketsData.length ? <Spin className={AppStyles.spin} size="large" /> : null}
              {!filterTicketsData.length && !error ? (
                <span className={AppStyles.nosearch}>Рейсы, подходящие под заданные фильтры, не найдены</span>
              ) : null}
              <TicketsList filterTicketsData={filterTicketsData} />
              {filterTicketsData.length ? <TicketsShowMore /> : null}
            </div>
          ) : (
            <span className={AppStyles.nosearch}>ПРОИЗОШЛА ОШИБКА</span>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
