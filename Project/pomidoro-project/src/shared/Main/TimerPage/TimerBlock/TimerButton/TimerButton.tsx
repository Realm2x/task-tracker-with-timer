import { TimerSvg } from '../../../../../assets';
import styles from './timerbuttonsettings.module.css';

interface ITimerSettings {
  timer: number;
  setTimer: (value: number) => void;
  isBreak: boolean;
  isWork: boolean;
  timerBreak: number;
  setTimerBreak: (value: number) => void;
}

export function TimerButton({timer, setTimer, isBreak, timerBreak, setTimerBreak}: ITimerSettings) {
  const increase = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isBreak) setTimer(timer + 60);
    if (isBreak) setTimerBreak(timerBreak + 60);
  };

  return (
    <button className={styles.timerButtonPomidor} onClick={increase}>
      <TimerSvg />
    </button>
  );
}
