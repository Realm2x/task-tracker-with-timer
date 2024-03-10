import { useDispatch, useSelector } from 'react-redux';
import './buttontimerdone.css';
import { AppDispatch, RootState } from '../../../../../store/store';
import { taskDone } from '../../../../../store/task/taskSlice';
import { quantityTimeOnPause } from '../../../../../store/statistickData/statistickData';

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
  const formattedDate = date.toLocaleDateString("ru-RU");
  const miliseconds = date.getTime();

  const handleDone = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
    dispatch(taskDone(id));
    dispatch(quantityTimeOnPause({formattedDate, miliseconds}));
  };
    
  return (
    <button className="timerButton timerButtonDone" onClick={handleDone}>Сделано</button>
  );
}
