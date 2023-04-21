import { useSelector } from 'react-redux';
import { Checkbox } from 'antd';

import { useActions } from '../../store/hooks/useAction';

import TranserStyles from './Transfer.module.scss';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 Пересадка', '2 Пересадки', '3 Пересадки'];

const Transfer = () => {
  const { onCheckAllChange, onChange } = useActions();
  const { checkedList, checkAll } = useSelector((state) => state.transfersReducer);
  return (
    <div className={TranserStyles.filter_wrapper}>
      <span className={TranserStyles.filter_label}>Количество пересадок</span>
      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default Transfer;
