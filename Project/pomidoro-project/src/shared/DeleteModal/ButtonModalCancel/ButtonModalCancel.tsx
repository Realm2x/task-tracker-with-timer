import { useDispatch } from 'react-redux';
import { modalAdd, modalAddId } from '../../../store/modalDelete/modalSlice';
import styles from './buttonmodal.module.css';
import { AppDispatch } from '../../../store/store';

interface ButtonModalCancel {
  id?: string;
}

export function ButtonModalCancel() {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(modalAdd(false));
    dispatch(modalAddId(''));
  }

  return (
    <button className={styles.modalButtonCancel} onClick={onClick}>Отмена</button>
  );
}
