import { MenuDelete } from '../../../../../../assets';
import styles from './menudeletebutton.module.css';
import { AppDispatch } from '../../../../../../store/store';
import { useDispatch } from 'react-redux';
import { modalAdd, modalAddId } from '../../../../../../store/modalDelete/modalSlice';

interface IMenuDeleteButton {
  id: string;
}

export function MenuDeleteButton({id}: IMenuDeleteButton) {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(modalAdd(true));
    dispatch(modalAddId(id));
  }

  return (
    <>
      <button className={`${styles.taskMenuDelete} ${styles.menuButton}`} onClick={onClick}>
        <MenuDelete />
        Удалить
      </button>
    </>
  );
}
