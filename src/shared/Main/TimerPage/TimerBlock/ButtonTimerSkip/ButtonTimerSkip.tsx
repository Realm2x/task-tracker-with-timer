import {  useSelector } from 'react-redux';
import {  RootState } from '../../../../../store/store';
import styles from './buttontimerskip.module.css';

interface IButtonTimerSkip {
  setIsBreak: (value: boolean) => void;
  setTimer: (value: number) => void;
  setIsWork: (value: boolean) => void;
  setIsSound: (value: boolean) => void;
  id: string;
}

export function ButtonTimerSkip({setIsBreak, setTimer, setIsWork, setIsSound}: IButtonTimerSkip) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  
  const handleBreak = () => {
    setIsBreak(false);
    setIsWork(false);
    setTimer(60 * pomidoroDuration);
    setIsSound(true);
  };

  return (
    <button className={`${styles.timerButton} ${styles.timerButtonSkip}`} onClick={handleBreak}>Пропустить</button>
  );
}
