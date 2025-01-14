import { useDispatch } from 'react-redux';
import styles from './buttontimerpause.module.css';
import { AppDispatch } from '../../../../../store/store';
import { timeOnPause } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerPause {
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
}

export function ButtonTimerPause({setIsWork, setIsPause}: IButtonTimerPause) {
  const dispatch = useDispatch<AppDispatch>();
  const date = new Date;
  const formattedDate = date.toISOString().split('T')[0];
  const miliseconds = date.getTime();
  
  const handlePause = () => {
    setIsWork(false);
    setIsPause(true);
    dispatch(timeOnPause({formattedDate, miliseconds}));
  };

  return (
    <button className={`${styles.timerButton} ${styles.timerButtonLeft} ${styles.timerButtonPause}`} onClick={handlePause}>Пауза</button>
  );
}
