import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import './buttontimerstop.css';

interface IButtonTimerStop {
  switches: boolean;
  setIsWork: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setTimer: (value: number) => void;
}

export function ButtonTimerStop({switches, setIsWork, setIsPause, setTimer}: IButtonTimerStop) {
  const {pomidoroDuration} = useSelector((state: RootState) => state.modalSettings);
  const handleStop = () => {
    setIsWork(false);
    setIsPause(false);
    setTimer(60 * pomidoroDuration);
  };

  return (
    <>
      {switches ? 
      <button className="timerButton timerButtonStop timerButtonStopActive" onClick={handleStop} disabled={!switches}>Стоп</button>
        :
      <button className="timerButton timerButtonStop" onClick={handleStop} disabled={!switches}>Стоп</button>
      }
    </>
  );
}
