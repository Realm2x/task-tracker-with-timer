import { useDispatch, useSelector } from 'react-redux';
import './buttontimerdone.css';
import { AppDispatch, RootState } from '../../../../../store/store';
import { taskDone } from '../../../../../store/task/taskSlice';

interface IButtonTimerDone {
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
  id: string;
}

export function ButtonTimerDone({setIsWork, setIsPause, setTimer, id}: IButtonTimerDone) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();

  const handleDone = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
    dispatch(taskDone(id));
  };
    
  return (
    <button className="timerButton timerButtonDone" onClick={handleDone}>Сделано</button>
  );
}
