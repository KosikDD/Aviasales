import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { ticketsReducer } from './ticketsReducer';
import { ticketsShowMoreReducer } from './ticketsShowMoreReducer';
import { transfersReducer } from './transferReducer';

export const rootReducer = combineReducers({
  ticketsData: ticketsReducer,
  transfersReducer: transfersReducer,
  count: ticketsShowMoreReducer,
  sort: filterReducer,
});
