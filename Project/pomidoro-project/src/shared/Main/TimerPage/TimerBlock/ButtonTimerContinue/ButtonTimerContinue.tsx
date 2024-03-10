import { useDispatch } from 'react-redux';
import './buttontimercontinue.css';
import { AppDispatch } from '../../../../../store/store';
import { quantityTimeOnPause } from '../../../../../store/statistickData/statistickData';

interface IButtonTimerContinue {
  setIsWork: (value: boolean) => void;
}

export function ButtonTimerContinue({setIsWork}: IButtonTimerContinue) {
  const dispatch = useDispatch<AppDispatch>();

  const date = new Date();
  const formattedDate = date.toLocaleDateString("ru-RU");
  const miliseconds = date.getTime();
  
  const handleContinue = () => {
    setIsWork(true);
    dispatch(quantityTimeOnPause({formattedDate, miliseconds}));
  };

  return (
    <button className="timerButton timerButtonLeft timerButtonStart" onClick={handleContinue}>Продолжить</button>
  );
}
