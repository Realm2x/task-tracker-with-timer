import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import './buttontimerskip.css';

interface IButtonTimerSkip {
  setIsBreak: (value: boolean) => void;
  setTimer: (value: number) => void;
  setIsWork: (value: boolean) => void;
  setIsPomidoro: (value: number) => void;
  setIsSound: (value: boolean) => void;
  isPomidoro: number;
}

export function ButtonTimerSkip({setIsBreak, setTimer, setIsWork, setIsPomidoro, setIsSound, isPomidoro}: IButtonTimerSkip) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  
  const handleBreak = () => {
    setIsBreak(false);
    setIsWork(false);
    setTimer(60 * pomidoroDuration);
    setIsPomidoro(isPomidoro++);
    setIsSound(true);
  };

  return (
    <button className="timerButton timerButtonSkip" onClick={handleBreak}>Пропустить</button>
  );
}
