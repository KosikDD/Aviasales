import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TicketsActionCreators from '../action-creator/tickets';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TicketsActionCreators, dispatch);
};
