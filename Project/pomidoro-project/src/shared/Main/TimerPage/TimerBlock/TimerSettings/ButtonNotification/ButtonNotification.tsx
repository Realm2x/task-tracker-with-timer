import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../../store/store';
import styles from './buttonnotification.module.css';
import { changesNotification } from '../../../../../../store/modalSettings/modalSettings';

export function ButtonNotification() {
  const {notification} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  function onClick() {
    dispatch(changesNotification(!notification))
  }

  return (
    <>
    {notification ? 
      <button className={`${styles.notificationBtn} ${styles.notificationBtnActive}`} onClick={onClick}>Выключить</button>
        :
      <button className={`${styles.notificationBtn} ${styles.notificationBtnDeactivate}`} onClick={onClick}>Включить</button>
    }
    </>
  );
}
