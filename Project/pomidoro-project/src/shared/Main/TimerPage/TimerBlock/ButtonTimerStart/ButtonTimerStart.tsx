import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import './buttontimerstart.css';
import { dataAdd } from '../../../../../store/statisticData/statisticData';

interface IButtonTimerStart {
  setIsWork: (value: boolean) => void;
}

export function ButtonTimerStart({setIsWork}: IButtonTimerStart) {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  const dispatch = useDispatch<AppDispatch>();
  const handleStart = () => {
    setIsWork(true);
    dispatch(dataAdd(formattedDate));
  };

  return (
    <button className="timerButton timerButtonLeft timerButtonStart" onClick={handleStart}>Старт</button>
  );
}
