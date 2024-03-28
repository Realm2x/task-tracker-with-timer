import { useDispatch } from 'react-redux';
import styles from './buttontimercontinue.module.css';
import { AppDispatch } from '../../../../../store/store';
import { quantityTimeOnPause } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerContinue {
  setIsWork: (value: boolean) => void;
}

export function ButtonTimerContinue({setIsWork}: IButtonTimerContinue) {
  const dispatch = useDispatch<AppDispatch>();
  
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  
  const handleContinue = () => {
    setIsWork(true);
    dispatch(quantityTimeOnPause(formattedDate));
  };

  return (
    <button className={`${styles.timerButton} ${styles.timerButtonLeft} ${styles.timerButtonStart}`} onClick={handleContinue}>Продолжить</button>
  );
}
