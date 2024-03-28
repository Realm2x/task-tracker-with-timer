import { useDispatch } from 'react-redux';
import { TimerSvg } from '../../../../../assets';
import { AppDispatch } from '../../../../../store/store';
import { taskIncrease } from '../../../../../store/task/taskSlice';
import styles from './timerbuttonsettings.module.css';

interface ITimerSettings {
  id: string;
  pomidoro: number;
}

export function TimerButton({id, pomidoro}: ITimerSettings) {
  const dispatch = useDispatch<AppDispatch>();
  const increase = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pomidoro < 8) {
      event.preventDefault();
      dispatch(taskIncrease(id));
    }
  };

  return (
    <button className={styles.timerButtonPomidor} onClick={increase}>
      <TimerSvg />
    </button>
  );
}
