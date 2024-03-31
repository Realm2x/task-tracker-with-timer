import { useDispatch, useSelector } from 'react-redux';
import styles from './buttontimerdone.module.css';
import { AppDispatch, RootState } from '../../../../../store/store';
import { taskDelete } from '../../../../../store/task/taskSlice';
import { quantityTimeOnPause, timeQuantityPomidoro } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerDone {
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
  id: string;
}

export function ButtonTimerDone({setIsWork, setIsPause, setTimer, id}: IButtonTimerDone) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];

  const handleDone = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
    dispatch(quantityTimeOnPause(formattedDate));
    dispatch(timeQuantityPomidoro(formattedDate));
    dispatch(taskDelete(id));
  };
    
  return (
    <button className={`${styles.timerButton} ${styles.timerButtonDone}`} onClick={handleDone}>Сделано</button>
  );
}
