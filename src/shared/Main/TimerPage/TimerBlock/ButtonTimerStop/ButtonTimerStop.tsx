import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import styles from './buttontimerstop.module.css';
import { stopsQuantity } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerStop {
  switches: boolean;
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
}

export function ButtonTimerStop({switches, setIsWork, setIsPause, setTimer}: IButtonTimerStop) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];

  const handleStop = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
    dispatch(stopsQuantity(formattedDate));
  };

  return (
    <>
      {switches ? 
      <button className={`${styles.timerButton} ${styles.timerButtonStop} ${styles.timerButtonStopActive}`} onClick={handleStop} disabled={!switches}>Стоп</button>
        :
      <button className={`${styles.timerButton} ${styles.timerButtonStop}`} onClick={handleStop} disabled={!switches}>Стоп</button>
      }
    </>
  );
}
