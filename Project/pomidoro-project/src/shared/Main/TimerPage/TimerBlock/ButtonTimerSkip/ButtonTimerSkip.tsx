import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import './buttontimerskip.css';
import { taskDone } from '../../../../../store/task/taskSlice';

interface IButtonTimerSkip {
  setIsBreak: (value: boolean) => void;
  setTimer: (value: number) => void;
  setIsWork: (value: boolean) => void;
  setIsCurrentPomidoro: (value: number) => void;
  setIsSound: (value: boolean) => void;
  isCurrentPomidoro: number;
  pomidoro: number;
  id: string;
}

export function ButtonTimerSkip({setIsBreak, setTimer, setIsWork, setIsCurrentPomidoro, setIsSound, isCurrentPomidoro, pomidoro, id}: IButtonTimerSkip) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const dispatch = useDispatch<AppDispatch>();
  
  const handleBreak = () => {
    setIsBreak(false);
    setIsWork(false);
    setTimer(60 * pomidoroDuration);
    setIsSound(true);
    if (isCurrentPomidoro < pomidoro) {
      setIsCurrentPomidoro(isCurrentPomidoro + 1)
    } else {
      setIsCurrentPomidoro(1)
      dispatch(taskDone(id));
    }
  };

  return (
    <button className="timerButton timerButtonSkip" onClick={handleBreak}>Пропустить</button>
  );
}
