import { useDispatch, useSelector } from 'react-redux';
import styles from './buttontimerdone.module.css';
import { AppDispatch, RootState } from '../../../../../store/store';
import { taskCurrentPomidoro, taskDelete, taskReduce } from '../../../../../store/task/taskSlice';
import { quantityTimeOnPause, timeFocus, timeQuantityPomidoro } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerDone {
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
  id: string;
  pomidoro: number;
}

export function ButtonTimerDone({setIsWork, setIsPause, setTimer, id, pomidoro}: IButtonTimerDone) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];

  const handleDone = () => {
    if (pomidoro > 1) {
      setIsWork(false);
      setIsPause(false);
      setTimer(60 * pomidoroDuration);
      dispatch(taskReduce(id));
      dispatch(taskCurrentPomidoro(id));
      dispatch(timeQuantityPomidoro(formattedDate));
    } else {
      setIsWork(false);
      setIsPause(false);
      setTimer(60 * pomidoroDuration);
      dispatch(quantityTimeOnPause(formattedDate));
      dispatch(timeQuantityPomidoro(formattedDate));
      dispatch(timeFocus(formattedDate));
      dispatch(taskDelete(id));
    }
  };

    
  return (
    <button className={`${styles.timerButton} ${styles.timerButtonDone}`} onClick={handleDone}>Сделано</button>
  );
}
